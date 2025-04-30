# Personal Website GQL Server
## Inspired by [Node.js + Express.js + TypeScript Template](https://github.com/takuyadev/node-express-typescript)
This server is built with Node.js, Express.js, and TypeScript. It is a GraphQL server that is used for my personal website.

## Features
- GraphQL Server (Apollo Server)
- TypeScript Support
- Test-ready with Jest configured with TypeScript
- Async Handling with error handling if error is thrown
- Flexible for any database or ORMs
- Path aliases for cleaner imports
- Nodemon for refresh on save
- Setup build script for production; no ts-node for production
- Security middlewares setup
- Environment variables configured on load

## Development
> This project was setup using Node.js v20.11. Please use specified version for best experience.

1. Use this project as a template
2. Install dependencies with ```npm install```
3. Run ```npm run generate```
4. Start development server with ```npm run dev```

## Production
Production build is compiled first into JavaScript, built on the ```./dist``` folder, and can be ran after compilation.

1. Run ```npm run generate```
2. Run ```npm run build```
3. Run ```npm run start```

# Project
Every development files are located within the ```./src``` folder. 

```
├── app.ts
├── config
│   └── db.ts
├── controllers
│   └── user-controller.ts
│   └── index.ts
├── data
│   └── books.ts
│   └── index.ts
├── graphql
│   └── resolvers-types.ts
│   └── schema.graphql
├── middleware
│   ├── async-middleware.ts
│   ├── auth-middleware.ts
│   └── error-middleware.ts
├── resolvers
│   └── index.ts
├── routes
│   └── user-route.ts
├── __tests__
│   └── app.test.ts
├── types
│   ├── enums
│   │   └── enums.common.ts
│   ├── interfaces
│   │   └── interfaces.common.ts
│   └── types
│   │   └──  types.common.ts
│   └── index.d.ts
└── utils
    ├── ApiError.ts
    └── ApiSucess.ts
```

## Important helper functions

### asyncHandler
Passing middleware into the asyncHandler will allow the server to automatically catch any internal server errors, or manually thrown errors from the server. 
```js
// ? asyncHandler should be used for every request for easy async handling
export const getUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Example user, get from database
    const user = [{ name: "John Doe" }, { name: "Jaen Doe" }];

    // Return json with success message
    res.status(200).json(new ApiSuccess<User[]>(user, "Success!"));
  },
);
```

## ApiError & ApiSucccess
Using ApiError or ApiSuccess allows for consistent responses across all routes; please use this instead of passing your own data structure. 

### ApiError
```js
 throw new ApiError({}, 500, "Handled by asyncHandler")
```

### ApiSuccess
```js
 res.status(200).json(new ApiSuccess<User[]>(user, "Success!"));
```

# Endpoints

## Queries

### **about**
Fetches information about the user, such as name, bio, and contact details.

**Example:**
```graphql
query {
  about {
    name
    bio
    email
  }
}
```

---

### **allAwards**
Retrieves a list of all awards and recognitions.

**Example:**
```graphql
query {
  allAwards {
    title
    awarder
    date
    summary
  }
}
```

---

### **allBasics**
Fetches basic information, including general details about the user.

**Example:**
```graphql
query {
  allBasics {
    name
    label
    email
    phone
    summary
  }
}
```

---

### **allCertificates**
Retrieves all certifications earned by the user.

**Example:**
```graphql
query {
  allCertificates {
    name
    issuer
    date
    url
  }
}
```

---

### **allEducation**
Fetches details about the user's educational background.

**Example:**
```graphql
query {
  allEducation {
    institution
    area
    studyType
    startDate
    endDate
    score
  }
}
```

---

### **allInterests**
Retrieves a list of the user's interests and hobbies.

**Example:**
```graphql
query {
  allInterests {
    name
    keywords
  }
}
```

---

### **allLanguages**
Fetches the languages the user is proficient in.

**Example:**
```graphql
query {
  allLanguages {
    language
    fluency
  }
}
```

---

### **allProjects**
Retrieves a list of all projects the user has worked on.

**Example:**
```graphql
query {
  allProjects {
    name
    description
    startDate
    endDate
    url
  }
}
```

---

### **allPublications**
Fetches all publications authored by the user.

**Example:**
```graphql
query {
  allPublications {
    name
    publisher
    releaseDate
    summary
    url
  }
}
```

---

### **allReferences**
Retrieves references or testimonials for the user.

**Example:**
```graphql
query {
  allReferences {
    name
    reference
  }
}
```

---

### **allSkills**
Fetches a list of the user's skills and proficiencies.

**Example:**
```graphql
query {
  allSkills {
    name
    level
    keywords
  }
}
```

---

### **allVolunteer**
Retrieves details about the user's volunteer experiences.

**Example:**
```graphql
query {
  allVolunteer {
    organization
    position
    startDate
    endDate
    summary
  }
}
```

---

### **allWorkExperience**
Fetches the user's professional work experience.

**Example:**
```graphql
query {
  allWorkExperience {
    name
    position
    startDate
    endDate
    summary
  }
}
```

---

### **getReadingStates**
Retrieves the user's reading states (e.g., currently reading, read) from Goodreads.

**Example:**
```graphql
query {
  getReadingStates {
    book {
      title
      authors {
        name
      }
    }
    status
  }
}
```

---

### **gitHubRepos**
Fetches a list of the user's GitHub repositories.

**Example:**
```graphql
query {
  gitHubRepos {
    title
    description
    html_url
  }
}
```

---

### **goodreadsBooks**
Retrieves a list of books from the user's Goodreads account.

**Example:**
```graphql
query {
  goodreadsBooks {
    title
    authorName
    bookDescription
    bookImageUrl
  }
}
```

---

### **substackFeed**
Fetches posts from the user's Substack feed.

**Example:**
```graphql
query {
  substackFeed {
    title
    description
    link
    pubDate
  }
}
```
## App Flow

This section explains the flow of the application, from initialization to handling requests.

1. **Environment Setup**:
   - The application loads environment variables using `dotenv` to configure constants like `PORT`, `RATE_TIME_LIMIT`, and `RATE_REQUEST_LIMIT`.

2. **Apollo Server Initialization**:
   - The GraphQL schema is loaded from the `graphql/schema.graphql` file.
   - Resolvers are dynamically selected based on the environment (`devResolvers` for development, `resolvers` for production).
   - An instance of `ApolloServer` is created with the schema and resolvers.

3. **Express Server Setup**:
   - An Express server instance is initialized.
   - Middleware is added to handle:
     - **Body Parsing**: Parses incoming JSON requests.
     - **Logging**: Logs HTTP requests using `morgan`.
     - **Rate Limiting**: Limits the number of requests per window of time using `express-rate-limit`.
     - **CORS**: Enables Cross-Origin Resource Sharing.
     - **Security Headers**: Adds security headers using `helmet`.
     - **Parameter Pollution Prevention**: Protects against HTTP parameter pollution using `hpp`.

4. **GraphQL Endpoint**:
   - The `/graphql` endpoint is secured with:
     - **Auth0 Middleware**: Ensures authentication for requests.
     - **Scope Validation**: Validates required scopes using `checkAuth0ScopesMiddleware`.
   - The `expressMiddleware` from Apollo Server is used to handle GraphQL requests.
   - Errors are handled consistently using the `errorResponse` middleware.

5. **Server Start**:
   - The `createApolloServer` function initializes both the Apollo Server and Express server.
   - The Express server listens on the specified `PORT` and logs a message when the server is ready.

### Request Flow
1. A client sends a request to the `/graphql` endpoint.
2. The request passes through the following middleware:
   - **Auth0 Middleware**: Validates the user's authentication.
   - **Scope Validation**: Ensures the user has the required permissions.
   - **Apollo Middleware**: Processes the GraphQL query or mutation.
3. The appropriate resolver is executed based on the query/mutation.
4. The response is returned to the client, with errors handled consistently.

## License

This project is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.

## Contribution

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them with clear and descriptive messages:
   ```bash
   git commit -m "Add your descriptive commit message here"
   ```
4. Push your changes to your forked repository:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request to the `main` branch of this repository.

### Guidelines
- Ensure your code follows the existing coding style.
- Write clear and concise commit messages.
- Add tests for any new functionality.
- Update the documentation if necessary.

Thank you for contributing!