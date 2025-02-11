import { ReadingStatus } from "@/types/enums/enums.common";
import { LiteralReadingState } from "@/types/types/types.common";
import { ApolloServer } from "@apollo/server";
import dotenv from "dotenv";
import { Express } from "express";
import request from "supertest";
import { createApolloServer } from "../app";
import { RESUME } from "../data";
let apolloServer: ApolloServer;
let expressServer: Express;
dotenv.config({ path: "../../.env.test" });
beforeAll((done) => {
  createApolloServer()
    .then((result) => {
      apolloServer = result.apolloServer;
      expressServer = result.expressServer;
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      done();
    });
});
afterAll((done) => {
  apolloServer.stop().then(() => {
    done();
  });
});
describe("Setup tests", () => {
  it("should setup the Apollo Server", () => {
    expect(apolloServer).toBeDefined();
  });
  it("should setup the Express Server", () => {
    expect(expressServer).toBeDefined();
  });
});
/*describe("Middleware", () => {
    it("should throw UnauthorizedError", (done) => {
        request(expressServer).post("/graphql").send({
            query: `
            query AllCertificates {
                certificates {
                    __typename
                    name
                    date
                    issuer
                    url
                }
            }
        `,
        }).then(response => {
            expect(response.status).toBe(401);
            expect(response.body.message).toBe("Unauthorized");
        }).finally(() => {
            done();
        });
    });
});*/
describe("Resolvers", () => {
  it("should return all certificates", (done) => {
    request(expressServer)
      .post("/graphql")
      .set("Authorization", "Bearer some_token")
      .send({
        query: `
            query AllCertificates {
                certificates {
                    name
                    date
                    issuer
                }
            }
        `,
      })
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.data.certificates).toEqual(
          RESUME.certificates.map((c) => ({
            name: c.name,
            date: c.date,
            issuer: c.issuer,
          })),
        );
      })
      .finally(() => {
        done();
      });
  });
  it("should return all basics", (done) => {
    request(expressServer)
      .post("/graphql")
      .set("Authorization", "Bearer some token")
      .send({
        query: `
            query AllBasics {
                basics  {
                    name
                    label
                    image
                    email
                    url
                    summary
                    location {
                        address
                        postalCode
                        city
                        countryCode
                        region
                    }
                    profiles {
                        network
                        url
                    }
                }
            }
        `,
      })
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.data.basics).toEqual(RESUME.basics);
      })
      .finally(() => {
        done();
      });
  });
  it("should return all work", (done) => {
    request(expressServer)
      .post("/graphql")
      .set("Authorization", "Bearer some token")
      .send({
        query: `
            query AllWorkExperience {
                work {
                    name
                    position
                    url
                    startDate
                    endDate
                    summary
                    highlights
                    image
                }
            }
        `,
      })
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.data.work).toEqual(
          RESUME.work.map((w) => ({
            name: w.name,
            position: w.position,
            url: w.url,
            startDate: w.startDate,
            endDate: w.endDate ?? null,
            summary: w.summary,
            highlights: w.highlights,
            image: w.image,
          })),
        );
      })
      .catch(console.error)
      .finally(() => {
        done();
      });
  });
  it("should return all education", (done) => {
    request(expressServer)
      .post("/graphql")
      .set("Authorization", "Bearer some token")
      .send({
        query: `
            query AllEducation {
                education {
                    institution
                    url
                    area
                    studyType
                    startDate
                    endDate
                    score
                    courses
                }
            }
        `,
      })
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.data.education).toEqual(
          RESUME.education.map((e) => ({
            institution: e.institution,
            url: e.url ?? null,
            area: e.area,
            studyType: e.studyType,
            startDate: e.startDate,
            endDate: e.endDate,
            score: e.score ?? null,
            courses: e.courses ?? null,
          })),
        );
      })
      .finally(() => {
        done();
      });
  });
  it("should call substack Feed Query", (done) => {
    request(expressServer)
      .post("/graphql")
      .set("Authorization", "Bearer some token")
      .send({
        query: `
              query GetSubstackRawData {
                      getSubstackRawData {
                        title
                    }
                  }`,
      })
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.data.getSubstackRawData).toBeDefined();
      })
      .finally(() => {
        done();
      });
  });
  it("should call goodreads Feed Query", (done) => {
    request(expressServer)
      .post("/graphql")
      .set("Authorization", "Bearer some token")
      .send({
        query: `
              query GetGoodreadsBooks {
                      getGoodreadsBooks {
                      book {
                          title
                          description
                          cover
                          authors {
                              name
                          }
                      }
                      status
                    }
                  }`,
      })
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.data.getGoodreadsBooks).toBeDefined();
        const status = response.body.data.getGoodreadsBooks.map(
          (item: LiteralReadingState) => item.status,
        );
        const statusRead = status.filter(
          (item: ReadingStatus) => item === "FINISHED",
        );
        expect(statusRead.length).toBeGreaterThan(0);

        const statusReading = status.filter(
          (item: ReadingStatus) => item === "IS_READING",
        );
        expect(statusReading.length).toBeGreaterThan(0);

        const statusWantToRead = status.filter(
          (item: ReadingStatus) => item === "WANTS_TO_READ",
        );
        expect(statusWantToRead.length).toBeGreaterThan(0);
      })
      .finally(() => {
        done();
      });
  });
});
