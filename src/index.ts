import { readFileSync } from "node:fs";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Resolvers } from "../graphql/resolvers-types";
export enum ReadingStatus {
  Dropped = "DROPPED",
  Finished = "FINISHED",
  IsReading = "IS_READING",
  None = "NONE",
  WantsToRead = "WANTS_TO_READ",
}
export const RESUME = {
  basics: {
    name: "Rohit Khanduri",
    label: "Software Architect",
    image: "/portfolio/profile.pic.svg",
    email: "rohit.khanduri@hotmail.com",
    url: "https://www.rohit.khanduri.de",
    summary: `With over a decade of successful tenure in software development,
        I bring a robust background as a distinguished Software Architect specializing in Microservice Architecture.
        My expertise spans the entire software development lifecycle, enriched further by extensive experience in agile methodologies, particularly Scrum.
        Notably, my international project involvements across Germany, France, India, Japan
        and beyond have honed my prowess in leading diverse software teams, showcasing my ability to collaborate seamlessly across borders.
        I aim to contribute my expertise in fostering innovation, leveraging technology stacks,
        and driving the evolution of the tech landscape as a Software Architect.
        My academic foundation includes a Master of Science in Applied Mathematics for Network and Data Science
        from Hochschule Mittweida, Germany, and a Bachelor of Technology in Computer Science from Gautam Buddh Technical University in India.`,
    location: {
      address: "Frankfurt am Main, Germany",
      postalCode: "60326",
      city: "Frankfurt am Main",
      countryCode: "DE",
      region: "Hessen",
    },
    profiles: [
      {
        network: "LinkedIn",
        url: "https://www.linkedin.com/in/rohit-khanduri-9098b84a/",
      },
      {
        network: "Github",
        url: "https://github.com/rohit1901",
      },
      {
        network: "Twitter",
        url: "https://twitter.com/JohnnyD78310768",
      },
      {
        network: "Instagram",
        url: "https://www.instagram.com/johnny.drama.chase/",
      },
      {
        network: "Substack",
        url: "https://rohitkhanduri.substack.com/",
      },
    ],
  },
  work: [
    {
      name: "Adesso SE",
      location: "Frankfurt am Main, Germany",
      position: "Software Architect",
      url: "https://www.adesso.de/",
      description: `Adesso SE is a German IT service provider with more than 10,000 employees.`,
      startDate: "08-2020",
      summary: `As a Software Architect and a Consultant, I am responsible for the design and implementation of Software Solutions for our clients.
                I am also responsible for the technical leadership of the development team and occassionally review the architecture of the existing systems.`,
      highlights: [
        "A part of  the Adesso Talent Pool as a high potential employee",
        "Successfully led the development of new microservice architectures for clients",
        "Mentored junior developers and interns",
        "Conducted workshops and training sessions for the various teams",
      ],
      image: "/portfolio/assets/adesso.png",
    },
    {
      name: "Finatix GmbH",
      location: "Leipzig, Germany",
      position: "Software Engineer (Working Student)",
      url: "https://www.finatix.de/",
      description: `Finatix GmbH is a German IT service provider.`,
      startDate: "09-2019",
      endDate: "07-2020",
      summary: `As a Software Engineer, I was responsible for the development of new features for the existing software solutions.
                I was also responsible for the maintenance of the existing software solutions.`,
      highlights: [
        "Developed new features for the existing software solutions",
        "Maintained the existing software solutions",
      ],
      image: "/portfolio/assets/finatix.png",
    },
    {
      name: "Peak Performance Apps GmbH",
      location: "Leipzig, Germany",
      position: "Software Engineer (Working Student)",
      url: "https://appsfactory.de/",
      description: `Peak Performance Apps GmbH (Subsidiary of Appsfactory GmbH) is a German IT service provider.`,
      startDate: "05-2019",
      endDate: "08-2019",
      summary: `As a Software Engineer, I was responsible for the development of new features for the existing software solutions.
                I was also responsible for the maintenance of the existing software solutions.`,
      highlights: [
        "Developed new features for the existing software solutions",
        "Maintained the existing software solutions",
      ],
      image: "/portfolio/assets/ppa.png",
    },
    {
      name: "Appsfactory GmbH",
      location: "Leipzig, Germany",
      position: "Software Engineer (Working Student)",
      url: "https://appsfactory.de/",
      description: `Appsfactory GmbH is a German IT service provider.`,
      startDate: "12-2017",
      endDate: "04-2019",
      summary: `As a Software Engineer, I was responsible for the development of new features for the existing software solutions.
                I was also responsible for the maintenance of the existing software solutions.`,
      highlights: [
        "Developed new features for the existing software solutions",
        "Maintained the existing software solutions",
      ],
      image: "/portfolio/assets/appsfactory.ico",
    },
    {
      name: "Iris Software Inc. (SSA Infosystems Pvt. Ltd.)",
      location: "Noida, India",
      position: "Team Lead/ Software Engineer",
      url: "https://www.ssa-infosystems.com/",
      description: `Iris Software Inc. is a multinational IT service provider.`,
      startDate: "09-2016",
      endDate: "10-2017",
      summary: `As a Team Lead, I was responsible for the development of new features for the existing software solutions,
                mentoring junior developers and interns, conducting workshops and training sessions for the various teams.
                Conducted code reviews and was responsible for the technical leadership of the development team.`,
      highlights: [
        "Frontend (UI) Team Lead for 11 frontend developers",
        "Making technical decisions",
        "Responsible for developing new features",
        "Responsible for upgrading Angular version from 1 to 2",
        "Conducting code reviews and quality checks",
        "Regular and direct customer communication",
      ],
      image: "/portfolio/assets/iris.jpeg",
    },
    {
      name: "Virtusa Corp.",
      location: "Noida, India",
      position: "Business Analyst/ Software Engineer",
      url: "https://www.virtusa.com/",
      description: `Virtusa Corp. is multinational IT service provider.`,
      startDate: "02-2015",
      endDate: "08-2016",
      summary: `As a Business Analyst, I was responsible for the requirement gathering,
                preparing the requirement documents, preparing the wireframes, preparing the user stories,
                preparing the acceptance criteria and conducting the UAT. As a Software Engineer, I was responsible for the
                development of new features for the existing software solutions.`,
      highlights: [
        "Planning and execution of business and requirement analyses",
        "Software development of new functionalities",
        "Developing complete functionalities from Java REST endpoints to fully functional AngularJS components.",
      ],
      image: "/portfolio/assets/virtusa.jpeg",
    },
    {
      name: "Genpact Headstrong Capital Markets",
      location: "Noida, India",
      position: "Software Engineer",
      url: "https://www.genpact.com/",
      description: `Genpact Headstrong Capital Markets is a multinational IT service provider.`,
      startDate: "11-2013",
      endDate: "01-2015",
      summary: `As a Software Engineer, I was responsible for the development of new features for the existing software solutions.`,
      highlights: [
        "Developing new features for the existing software solutions",
        "Developing new functionalities in Calypso",
      ],
      image: "/portfolio/assets/genpact.jpeg",
    },
    {
      name: "NEC Technologies India Pvt. Ltd.",
      location: "Noida, India",
      position: "L3 Support Engineer/ Software Engineer",
      url: "https://in.nec.com/",
      description: `NEC Technologies India Pvt. Ltd. is a multinational IT service provider.`,
      startDate: "08-2012",
      endDate: "10-2013",
      summary: `As a L3 Support Engineer, I was responsible for the support of the existing software solutions.
                As a Software Engineer, I was responsible for the development of new features for the existing software solutions.`,
      highlights: [
        "Supporting the existing software solutions",
        "Developing new features for the existing software solutions",
      ],
      image: "/portfolio/assets/nec.png",
    },
  ],
  volunteer: [
    {
      organization: "Robin Hood Army",
      position: "Volunteer",
      url: "https://robinhoodarmy.com/",
      startDate: "08-2014",
      endDate: "07-2017",
      summary: `As a Volunteer, I was responsible for the distribution of food to the needy people.`,
      highlights: [
        "Distributed food to the needy people",
        "Conducted food distribution drives",
      ],
    },
  ],
  education: [
    {
      institution: "Hochsch ule Mittweida",
      location: "Mittweida, Germany",
      area: "Applied Mathematics for Network and Data Science",
      studyType: "Master",
      startDate: "10-2017",
      endDate: "09-2019",
    },
    {
      institution: "Gautam Buddh Technical University",
      location: "Noida, India",
      area: "Computer Science",
      studyType: "Bachelor",
      startDate: "08-2008",
      endDate: "06-2012",
    },
  ],
  awards: [
    {
      title: "Adesso Talent Pool",
      date: "08-2020",
      awarder: "Adesso SE",
      summary: `Adesso Talent Pool is an exclusive program designed to recognize and reward employees
                for their exceptional work performance and strong work ethics.
                This exclusive promotion initiative aimed to identify and appreciate individuals with
                the potential to propel the company forward, offering unique opportunities for networking and professional growth within adesso.`,
    },
    {
      title: "Certificate of Appreciation",
      date: "07-2017",
      awarder: "SSA Infosystems Pvt. Ltd.",
      summary: `Certificate of Appreciation is an award that is granted to employees
                who've worked exceptionally well and have won accolades from the client.`,
    },
    {
      title: "Round of Applause",
      date: "07-2017",
      awarder: "SSA Infosystems Pvt. Ltd.",
      summary:
        "Round of Applause is an award that is granted to employees who've worked exceptionally well in a particular month.",
    },
    {
      title: "Top Talent",
      date: "08-2015",
      awarder: "Virtusa Corp.",
      summary: "Top Talent for the successful completion of the project.",
    },
  ],
  publications: [
    {
      name: "Fraud Detection using Machine Learning",
      publisher: "Hochschule Mittweida",
      releaseDate: "12-2018",
      url: "https://monami.hs-mittweida.de/frontdoor/index/index/year/2023/docId/13759",
      summary: `Fraud detection is a critical issue in the financial sector.
                This paper presents a machine learning approach to detect fraud in the financial sector.`,
    },
  ],
  languages: [
    {
      language: "English",
      fluency: "Professional working proficiency",
    },
    {
      language: "German",
      fluency: "Elementary proficiency",
    },
    {
      language: "Hindi",
      fluency: "Native proficiency",
    },
  ],
  meta: [
    {
      canonical: "https://www.rohit.khanduri.de",
      version: "1.0.0",
      lastModified: "2021-08-06",
    },
  ],
};
export const ReadingStates = {
  myReadingStates: [
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl5af8esc1212780hefwyhv7jwh",
        slug: "peter-zeihan-end-of-the-world-is-just-the-beginning-8vffa",
        title: "End of the World Is Just the Beginning",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl6vj0vbm2213050ii2slfewcy9",
        slug: "konstantin-kisin-immigrants-love-letter-to-the-west-agxu4",
        title: "Immigrant's Love Letter to the West",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "cluqm6r8v14490160hab1ykrdaht",
        slug: "steven-r-gundry-gut-check-k9oyo",
        title: "Gut Check",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckq2mjiru101701rirpmixerfe",
        slug: "persuader-r68lq",
        title: "Persuader",
        description:
          "Jack Reacher takes an undercover assignment to investigate the disappearance of a federal agent from the home of a notorious drug dealer, but Reacher soon discovers that the dealer has ties to a man from Reacher's own past, one that Reacher supposedly killed. Reprint.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1r1vqg0bd501crkqbe8d23",
        slug: "lee-childdie-trying-n5pb2",
        title: "Die Trying",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckpoap40k507121gmzmud25la7",
        slug: "the-ministry-for-the-future-9lbo1",
        title: "The Ministry for the Future",
        description:
          '"From legendary science fiction author Kim Stanley Robinson comes a vision of climate change unlike any ever imagined. Kim Stanley Robinson is one of contemporary science fiction\'s most acclaimed writers, and with this new novel, he once again turns his eye to themes of climate change, technology, politics, and the human behaviors that drive these forces. But his setting is not a desolate, post-apocalyptic world--rather, he imagines a more hopeful future, one where humanity has managed to overcome our challenges and thrive. It is a novel both immediate and impactful, perfect for his many fans and for readers who crave powerful and thought-provoking sci-fi stories"--',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckrbperrr81444183s753tb4cl",
        slug: "the-art-of-war-ibl05",
        title: "The Art of War",
        description:
          "The Art of War is composed of only about 6,000 Chinese characters, it is considered by many to be the greatest book on strategy and strategic thinking ever written. . 350F PROFESSIONAL READING LIST.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckt4dhak04410814tc523y1edl",
        slug: "dawn-dais-the-sht-no-one-tells-you-o3u46",
        title: "The Sh!t No One Tells You",
        description:
          "\"Dawn Dais bravely goes where other baby books don't.... She spills the truth about everything from breastfeeding to getting along with your partner post-baby.\" -- Parents Magazine There comes a time in every new mother's life when she realizes that all the pregnancy well-wishes and baby shower gifts left her profoundly unqualified for the realities of life with a newborn. Who knew there would be so much crying--and how much of that crying would be coming from the mom? Bestselling author Dawn Dais believes that a vast conspiracy exists to hide the truth about parenting from expectant mothers for fear that if the truth got out, women would (1) stop having babies or (2) stop bringing them home. Eschewing the adorableness that oozes out of other parenting books, Dais offers real advice from real moms--along with hilarious anecdotes, tips, and the encouragement every new mom needs to survive the first year of parenthood. Revised and updated with new chapters offering advice for single moms and tips for partners, The Sh!t No One Tells You is a must-have companion for every new mother's sleepless nights and poop-filled days.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckrp4wvhr651081czqt3tc6b37",
        slug: "bringing-up-bebe-8pipc",
        title: "Bringing Up Bébé",
        description:
          "The runaway New York Times bestseller that shows American parents the secrets behind France's amazingly well-behaved children, from the author of There Are No Grown-ups. When American journalist Pamela Druckerman had a baby in Paris, she didn't aspire to become a \"French parent.\" But she noticed that French children slept through the night by two or three months old. They ate braised leeks. They played by themselves while their parents sipped coffee. And yet French kids were still boisterous, curious, and creative. Why? How? With a notebook stashed in her diaper bag, Druckerman set out to investigate—and wound up sparking a national debate on parenting. Researched over three years and written in her warm, funny voice, Bringing Up Bébé is deeply wise, charmingly told, and destined to become a classic resource for American parents.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cku7i0sx6341606pu7azjru370r",
        slug: "daniel-james-brown-facing-the-mountain-2c0rv",
        title: "Facing the Mountain",
        description:
          "\"Masterly. An epic story of four Japanese-American families and their sons who volunteered for military service and displayed uncommon heroism... Propulsive and gripping, in part because of Mr. Brown's ability to make us care deeply about the fates of these individual soldiers...a page-turner.\" - Wall Street Journal \"A masterwork of American history that will change the way we look at World War II.--Adam Makos, author of A Higher Call From the #1 New York Times bestselling author of The Boys in the Boat, a gripping World War II saga of patriotism, highlighting the contributions and sacrifices that Japanese immigrants and their American-born children made for the sake of the nation: the courageous Japanese-American Army unit that overcame brutal odds in Europe; their families, incarcerated back home; and a young man who refused to surrender his constitutional rights, even if it meant imprisonment. They came from across the continent and Hawaii. Their parents taught them to embrace both their Japanese heritage and the ways of America. They faced bigotry, yet they believed in their bright futures as American citizens. But within days of Pearl Harbor, the FBI was ransacking their houses and locking up their fathers. And within months many would themselves be living behind barbed wire. Facing the Mountain is an unforgettable chronicle of war-time America and the battlefields of Europe. Based on Daniel James Brown's extensive interviews with the families of the protagonists as well as deep archival research, it portrays the kaleidoscopic journey of four Japanese-American families and their sons, who volunteered for 442nd Regimental Combat Team and were deployed to France, Germany, and Italy, where they were asked to do the near impossible. But this is more than a war story. Brown also tells the story of these soldiers' parents, immigrants who were forced to shutter the businesses, surrender their homes, and submit to life in concentration camps on U.S. soil. Woven throughout is the chronicle of a brave young man, one of a cadre of patriotic resisters who stood up against their government in defense of their own rights. Whether fighting on battlefields or in courtrooms, these were Americans under unprecedented strain, doing what Americans do best--striving, resisting, pushing back, rising up, standing on principle, laying down their lives, and enduring.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckjso7owr44110zj15xsb95ua",
        slug: "the-rise-and-fall-of-the-dinosaurs-57130",
        title: "The Rise and Fall of the Dinosaurs",
        description:
          '"THE ULTIMATE DINOSAUR BIOGRAPHY," hails Scientific American: A thrilling new history of the age of dinosaurs, from one of our finest young scientists. A New York Times Bestseller • Goodreads Choice Awards WINNER A BEST BOOK OF THE YEAR: Smithsonian, NPR Science Friday, The Times (London), Popular Mechanics, Science News, Library Journal, Booklist, and Chicago Public Library "A masterpiece of science writing." —Washington Post "This is scientific storytelling at its most visceral, striding with the beasts through their Triassic dawn, Jurassic dominance, and abrupt demise in the Cretaceous." —Nature The dinosaurs. Sixty-six million years ago, the Earth’s most fearsome creatures vanished. Today they remain one of our planet’s great mysteries. Now The Rise and Fall of the Dinosaurs reveals their extraordinary, 200-million-year-long story as never before. In this captivating narrative (enlivened with more than seventy original illustrations and photographs), Steve Brusatte, a young American paleontologist who has emerged as one of the foremost stars of the field—naming fifteen new species and leading groundbreaking scientific studies and fieldwork—masterfully tells the complete, surprising, and new history of the dinosaurs, drawing on cutting-edge science to dramatically bring to life their lost world and illuminate their enigmatic origins, spectacular flourishing, astonishing diversity, cataclysmic extinction, and startling living legacy. Captivating and revelatory, The Rise and Fall of the Dinosaurs is a book for the ages. Brusatte traces the evolution of dinosaurs from their inauspicious start as small shadow dwellers—themselves the beneficiaries of a mass extinction caused by volcanic eruptions at the beginning of the Triassic period—into the dominant array of species every wide-eyed child memorizes today, T. rex, Triceratops, Brontosaurus, and more. This gifted scientist and writer re-creates the dinosaurs’ peak during the Jurassic and Cretaceous, when thousands of species thrived, and winged and feathered dinosaurs, the prehistoric ancestors of modern birds, emerged. The story continues to the end of the Cretaceous period, when a giant asteroid or comet struck the planet and nearly every dinosaur species (but not all) died out, in the most extraordinary extinction event in earth’s history, one full of lessons for today as we confront a “sixth extinction.” Brusatte also recalls compelling stories from his globe-trotting expeditions during one of the most exciting eras in dinosaur research—which he calls “a new golden age of discovery”—and offers thrilling accounts of some of the remarkable findings he and his colleagues have made, including primitive human-sized tyrannosaurs; monstrous carnivores even larger than T. rex; and paradigm-shifting feathered raptors from China. An electrifying scientific history that unearths the dinosaurs’ epic saga, The Rise and Fall of the Dinosaurs will be a definitive and treasured account for decades to come.',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1rl2e60h4u01cr4tgg3fvh",
        slug: "lee-childgone-tomorrow-wbmbh",
        title: "Gone Tomorrow",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckjlyu2c025562107y1kehc5e2",
        slug: "chasing-the-sun-iu6uu",
        title: "Chasing the Sun",
        description:
          "The full story of how our relationship with light shapes our health, productivity and mood. 'A sparkling and illuminating study, one of those rare books that could genuinely improve your life' Sunday Times Since the dawn of time, humans have worshipped the sun. And with good reason. Our biology is set up to work in partnership with it. From our sleep cycles to our immune systems and our mental health, access to sunlight is crucial for living a happy and fulfilling life. New research suggests that our sun exposure over a lifetime - even before we were born - may shape our risk of developing a range of different illnesses, from depression to diabetes. Bursting with cutting-edge science and eye-opening advice, Chasing the Sun explores the extraordinary significance of sunlight, from ancient solstice celebrations to modern sleep labs, and from the unexpected health benefits of sun exposure to what the Amish know about sleep that the rest of us don't. As more of us move into light-polluted cities, spending our days in dim offices and our evenings watching brightly lit screens, we are in danger of losing something vital: our connection to the star that gave us life. It's a loss that could have far-reaching consequences that we're only just beginning to grasp.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1tbcvv0z1e01cr9sa0vjzj",
        slug: "lee-childrunning-blind-8362o",
        title: "Running blind",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1syzcp0v6s01crkr99lgn3",
        slug: "lee-childpast-tense-38pnq",
        title: "Past tense",
        description:
          "\"Family secrets come back to haunt Jack Reacher in this electrifying thriller from #1 New York Times bestselling author Lee Child, \"a superb craftsman of suspense\" (Entertainment Weekly). Jack Reacher has extended his thumb and hit the pavement. His plan is to follow the autumn sun on an epic trip across America, from Maine to California. He doesn't get far. On a country road in rural New Hampshire, deep in the New England woods, he sees a sign to a place he has never been: The town where his father was born. He thinks, What's one extra day? and takes the detour. At the same moment, in the same isolated area, a car breaks down. Two young Canadians are trying to drive to New York City to sell a treasure. Now they're stranded at a lonely motel in the middle of nowhere. The owners almost seem too friendly. It's a strange place. but it's all there is. The next morning in the city clerk's office, Reacher asks about the old family home. He's told no one named Reacher ever lived in town. He knows his father left and never returned. Now Reacher wonders, Was he ever there in the first place? As Reacher explores his father's life, and strands of different stories begin to merge, he makes a shocking discovery: The present can be tough, but the past can be tense . . . and deadly\"--",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "cl084zg3g986580hvpf6cpp2sg",
        slug: "sara-manning-peskin-a-molecule-away-from-madness-pnijm",
        title: "A Molecule Away from Madness",
        description:
          '"A neurologist regales readers with extraordinary stories of the brain under siege. Our brains are the most complex machines known to humankind, but they have an Achilles heel: The very molecules that allow us to exist can also sabotage our minds. Here are true accounts of unruly molecules and the diseases that form in their wake, from total loss of inhibitions to florid psychosis to compulsive lying. Cognitive neurologist Sara Manning Peskin demystifies the most curious neurological phenomena through the perspective of patients, researchers, and science. She introduces us to a woman stuck in The Walking Dead, a family wracked with Alzheimer\'s disease, and an entire region gripped by a baffling epidemic. By tracing the molecular causes for neurologic diseases, Peskin highlights cutting-edge developments in cognitive research, making the case that these are the stories that will one day teach us how to cure dementia and other diseases of the brain. A Molecule Away from Madness offers a captivating, singular view of the human brain"--',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckpeh8mdb22791rk96zenrvnc",
        slug: "killing-floor-m4nl7",
        title: "Killing Floor",
        description:
          "Ex-MP Jack Reacher goes into action to find his brother's killers after a series of brutal crimes terrorize tiny Margrave, Georgia, only to uncover the dark and deadly conspiracy concealed behind the town's peaceful facade.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "clo32p7pd16109270hgdi6sam3s3",
        slug: "harrison-scott-key-how-to-stay-married-cj96o",
        title: "How to Stay Married",
        description:
          "\"From Harrison Scott Key, winner of the 2016 Thurber Prize for American Humor, How to Stay Married is a shockingly candid, hilarious, voyeuristic, and inspiring account of one man's personal journey through hell and back when his wife's infidelity threatens their marriage\"--",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckpimc6bt8464051ib7m7sz2gis",
        slug: "free-speech-and-why-it-matters-a1qvc",
        title: "Free Speech And Why It Matters",
        description:
          "FREE SPEECH AND WHY IT MATTERS Free speech is the bedrock of all our liberties, and yet in recent years it has come to be mistrusted. A new form of social justice activism, which perceives language as potentially violent, has prompted a national debate on where the limitations of acceptable speech should be drawn. Governments throughout Europe have enacted 'hate speech' legislation to curb the dissemination of objectionable ideas, Silicon Valley tech giants are collaborating to ensure that they control the limitations of public discourse, and campaigners in the US are calling for revisions to the First Amendment. However well-intentioned, these trends represent a threat to the freedoms that our ancestors fought and died to secure. In this incisive and fascinating book, Andrew Doyle addresses head-on the most common concerns of free speech sceptics, and offers a timely and robust defence of this most foundational of principles.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckup7mff4519211eu1ajahdo88",
        slug: "colleen-hoover-verity-qo7ia",
        title: "Verity",
        description:
          'A "sublimely creepy" psychological thriller from #1 New York Times bestselling author Colleen Hoover (Tarryn Fisher, New York Times bestselling author). Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish. Lowen arrives at the Crawford home, ready to sort through years of Verity’s notes and outlines, hoping to find enough material to get her started. What Lowen doesn’t expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Verity\'s recollection of the night her family was forever altered. Lowen decides to keep the manuscript hidden from Jeremy, knowing its contents could devastate the already grieving father. But as Lowen’s feelings for Jeremy begin to intensify, she recognizes all the ways she could benefit if he were to read his wife’s words. After all, no matter how devoted Jeremy is to his injured wife, a truth this horrifying would make it impossible for him to continue loving her.',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckmauiqgm18741ijairp9coz8",
        slug: "the-rosie-result-gjqe3",
        title: "The Rosie Result",
        description:
          "The hilarious, challenging and inspiring ending to the Rosie trilogy that will have readers cheering for joy.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckrage5a40doe01bj96wya091",
        slug: "david-baldaccimemory-man-nkmv2",
        title: "Memory man",
        description:
          "Amos Decker's life changed forever-- twice. The first time was on the gridiron. A big, towering athlete, he was the only person from his hometown of Burlington ever to go pro. But his career ended before it had a chance to begin. On his very first play, a violent helmet-to-helmet collision knocked him off the field for good, and left him with an improbable side effect -- he can never forget anything. The second time was at home nearly two decades later. Now a police detective, Decker returned from a stakeout one evening and entered a nightmare -- his wife, young daughter, and brother-in-law had been murdered. His family destroyed, their killer's identity as mysterious as the motive behind the crime, and unable to forget a single detail from that horrible night, Decker finds his world collapsing around him. He leaves the police force, loses his home, and winds up on the street, taking piecemeal jobs as a private investigator when he can. But over a year later, a man turns himself in to the police and confesses to the murders. At the same time a horrific event nearly brings Burlington to its knees, and Decker is called back in to help with this investigation. Decker also seizes his chance to learn what really happened to his family that night. To uncover the stunning truth, he must use his remarkable gifts and confront the burdens that go along with them. He must endure the memories he would much rather forget. And he may have to make the ultimate sacrifice.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "cks5radmu7347111798ad191my7",
        slug: "the-secret-of-the-nagas-nyymh",
        title: "The Secret of the Nagas",
        description:
          "What happens when even your closest guides betray you? The hunt is on. Shiva, the man believed to be the prophesied Neelkanth - the destroyer of evil - will not rest until he finds his demonic adversary; the Naga warrior that killed his closest friend and now stalks his wife. But the rise of evil is everywhere and Shiva's own philosopher guides have betrayed his unquestioning faith by accepting aid from the dark side. Even the perfect empire of Meluha hides a terrible secret. Shiva's search for truth takes him across the length and breadth of ancient India: a land of deadly mysteries where nothing is what it seems.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "cknlxndyd374691iaha0rklj0x",
        slug: "the-cafe-on-the-edge-of-the-world-2omju",
        title: "The Cafe on the Edge of the World",
        description:
          "In a small cafe at a location so remote it stands in the middle of the middle of nowhere, John-a man in a hurry-is at a crossroads. Intent only on refueling before moving along on his road trip, he finds sustenance of an entirely different kind. In addition to the specials of the day, the cafe menu lists three questions all diners are encouraged to consider: Why are you here? Do you fear death? Are you fulfilled?With this food for thought and the guidance of three people he meets at the cafe, John embarks on a journey of self-discovery. Along the way he discovers a new way to look at life, himself, and just how much you can learn from a green sea turtle.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "cksdzwu0j17451l198sqg67scl",
        slug: "wanting-57l4x",
        title: "Wanting",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckioobor607200yg5uloza1l7",
        slug: "born-a-crime-64qov",
        title: "Born a Crime",
        description:
          "The compelling, inspiring, and comically sublime story of one man's coming-of-age, set during the twilight of apartheid and the tumultuous days of freedom that followed Trevor Noah's unlikely path from apartheid South Africa to the desk of The Daily Show began with a criminal act: his birth. Trevor was born to a white Swiss father and a black Xhosa mother at a time when such a union was punishable by five years in prison. Living proof of his parents' indiscretion, Trevor was kept mostly indoors for the earliest years of his life, bound by the extreme and often absurd measures his mother took to hide him from a government that could, at any moment, steal him away. Finally liberated by the end of South Africa's tyrannical white rule, Trevor and his mother set forth on a grand adventure, living openly and freely and embracing the opportunities won by a centuries-long struggle. Born a Crime is the story of a mischievous young boy who grows into a restless young man as he struggles to find himself in a world where he was never supposed to exist. It is also the story of that young man's relationship with his fearless, rebellious, and fervently religious mother--his teammate, a woman determined to save her son from the cycle of poverty, violence, and abuse that would ultimately threaten her own life. The eighteen personal essays collected here are by turns hilarious, dramatic, and deeply affecting. Whether subsisting on caterpillars for dinner during hard times, being thrown from a moving car during an attempted kidnapping, or just trying to survive the life-and-death pitfalls of dating in high school, Trevor illuminates his curious world with an incisive wit and unflinching honesty. His stories weave together to form a moving and searingly funny portrait of a boy making his way through a damaged world in a dangerous time, armed only with a keen sense of humor and a mother's unconventional, unconditional love.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckhdifu2f04530zkhdxrud59j",
        slug: "the-selfish-gene-zmf2p",
        title: "The Selfish Gene",
        description:
          "An ethologist shows man to be a gene machine whose world is one of savage competition and deceit.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckhq875le11630zg1i9axvlhv",
        slug: "invisible-women-lvxxl",
        title: "Invisible Women",
        description:
          "Data is fundamental to the modern world. From economic development, to healthcare, to education and public policy, we rely on numbers to allocate resources and make crucial decisions. But because so much data fails to take into account gender, because it treats men as the default and women as atypical, bias and discrimination are baked into our systems. And women pay tremendous costs for this bias, in time, money, and often with their lives. Celebrated feminist advocate Caroline Criado Perez investigates the shocking root cause of gender inequality and research in Invisible Women​, diving into women's lives at home, the workplace, the public square, the doctor's office, and more. Built on hundreds of studies in the US, the UK, and around the world, and written with energy, wit, and sparkling intelligence, this is a groundbreaking, unforgettable exposé that will change the way you look at the world.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cluqm71fk14556400habal97u1lk",
        slug: "marcelo-gleiser-dawn-of-a-mindful-universe-0yaqf",
        title: "Dawn of a Mindful Universe",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckp83sd5r46081rl974b2zygm",
        slug: "the-immortal-life-of-henrietta-lacks-6hx9x",
        title: "The Immortal Life of Henrietta Lacks",
        description:
          "Documents the story of how scientists took cells from an unsuspecting descendant of freed slaves and created a human cell line that has been kept alive indefinitely, enabling discoveries in such areas as cancer research, in vitro fertilization and gene mapping.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckiuwf2dq86430zk5my1u63tv",
        slug: "how-we-got-to-now-5l5ob",
        title: "How We Got to Now",
        description:
          "An illustrated history of innovation shares lesser-known stories of accidental genius and brilliant mistakes, examines unexpected connections between seemingly unrelated fields and reveals how important inventions have had unintended consequences. By the best-selling author of Where Good Ideas Come From. 100,000 first printing.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckiuwgjlx176920zk5e1qej45p",
        slug: "a-short-history-of-nearly-everything-pjmlh",
        title: "A Short History of Nearly Everything",
        description:
          "The author of A Walk in the Woods traces the Big Bang through the rise of civilization, documenting his work with a host of the world's most advanced scientists and mathematicians to explain why things are the way they are. Reprint. 125,000 first printing.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckp5lyaag880091gjsffzsmbvb",
        slug: "the-code-book-jxanh",
        title: "The Code Book",
        description:
          "Includes a history of how codes have affected the world, from the World Wars to the death of Mary, Queen of Scots, and also looks at what the future holds for the field of cryptography.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl2cmez4z2532780igztxew12oa",
        slug: "ankur-warikoo-do-epic-shit-n5pc2",
        title: "Do Epic Shit",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckpsjx7bl10381rjmv7pidqy7",
        slug: "why-were-polarized-rzmhh",
        title: "Why We're Polarized",
        description:
          "America’s political system isn’t broken. The truth is scarier: it’s working exactly as designed. In this book, journalist Ezra Klein reveals how that system is polarizing us—and how we are polarizing it—with disastrous results. “The American political system—which includes everyone from voters to journalists to the president—is full of rational actors making rational decisions given the incentives they face,” writes political analyst Ezra Klein. “We are a collection of functional parts whose efforts combine into a dysfunctional whole.” In Why We’re Polarized, Klein reveals the structural and psychological forces behind America’s descent into division and dysfunction. Neither a polemic nor a lament, this book offers a clear framework for understanding everything from Trump’s rise to the Democratic Party’s leftward shift to the politicization of everyday culture. America is polarized, first and foremost, by identity. Everyone engaged in American politics is engaged, at some level, in identity politics. Over the past fifty years in America, our partisan identities have merged with our racial, religious, geographic, ideological, and cultural identities. These merged identities have attained a weight that is breaking much in our politics and tearing at the bonds that hold this country together. Klein shows how and why American politics polarized around identity in the twentieth century, and what that polarization did to the way we see the world and one another. And he traces the feedback loops between polarized political identities and polarized political institutions that are driving our system toward crisis. This is a revelatory book that will change how you look at politics, and perhaps at yourself.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckg3mdj5u1327gmx2oantq1kb",
        slug: "steve-jobs-o59au",
        title: "Steve Jobs",
        description:
          "Draws on more than forty interviews with Steve Jobs, as well as interviews with family members, friends, competitors, and colleagues to offer a look at the co-founder and leading creative force behind the Apple computer company.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckhghhkl511970z955fcjz3uz",
        slug: "a-gentleman-in-moscow-vk7y0",
        title: "A Gentleman in Moscow",
        description:
          "Chosen as an isolation read by Camilla, Duchess of Cornwall: ‘A wonderful book which gives the reader an understanding of life in post-revolution Moscow’ OVER A MILLION COPIES SOLD -- ***Soon to be a major TV series starring Kenneth Branagh*** ‘This novel is astonishing, uplifting and wise. Don’t miss it’ Chris Cleave ‘No historical novel this year was more witty, insightful or original than Amor Towles’s A Gentleman in Moscow’ Sunday Times, Books of the Year ‘Charming ... shows that not all books about Russian aristocrats have to be full of doom and nihilism’ The Times, Books of the Year '[A] supremely uplifting novel ... It's elegant, witty and delightful - much like the Count himself.' Mail on Sunday, Books of the Year On 21 June 1922, Count Alexander Rostov – recipient of the Order of Saint Andrew, member of the Jockey Club, Master of the Hunt – is escorted out of the Kremlin, across Red Square and through the elegant revolving doors of the Hotel Metropol. Deemed an unrepentant aristocrat by a Bolshevik tribunal, the Count has been sentenced to house arrest indefinitely. But instead of his usual suite, he must now live in an attic room while Russia undergoes decades of tumultuous upheaval. Can a life without luxury be the richest of all? A BOOK OF THE DECADE, 2010-2020 (INDEPENDENT) THE TIMES BOOK OF THE YEAR 2017 A SUNDAY TIMES BOOK OF THE YEAR 2017 A MAIL ON SUNDAY BOOK OF THE YEAR 2017 A DAILY EXPRESS BOOK OF THE YEAR 2017 AN IRISH TIMES BOOK OF THE YEAR 2017 ONE OF BARACK OBAMA'S BEST BOOKS OF 2017 ONE OF BILL GATES'S SUMMER READS OF 2019 NOMINATED FOR THE 2018 INDEPENDENT BOOKSELLERS WEEK AWARD",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckgm1gbse94400ybvhhozigmo",
        slug: "what-if-4oglc",
        title: "What If?",
        description:
          "The creator of the incredibly popular webcomic xkcd presents his heavily researched answers to his fans' oddest questions, including “What if I took a swim in a spent-nuclear-fuel pool?” and “Could you build a jetpack using downward-firing machine guns?” 100,000 first printing.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckrgyzf671445171excpex5itrb",
        slug: "101-essays-that-will-change-the-way-you-think-fqpyx",
        title: "101 Essays That Will Change The Way You Think",
        description:
          '"101 Essays That Will Change The Way You Think", the global bestseller and social media phenomenon, is a collection of author Brianna Wiest\'s most beloved pieces of writing. Her meditations include why you should pursue purpose over passion, embrace negative thinking, see the wisdom in daily routine, and become aware of the cognitive biases that are creating the way you see your life. Some of these pieces have never been seen; others have been read by millions of people around the world. Regardless, each will leave you thinking: this idea changed my life.',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1q13ki008l01cr76v5bdrg",
        slug: "lee-child61-hours-nav36",
        title: "61 hours",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckraen1q505xe01bjjdvpr5yk",
        slug: "lee-childecho-burning-ip0ea",
        title: "Echo burning",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1tojvi13hg01crekbxgl22",
        slug: "lee-childaffair-ymxl4",
        title: "Affair",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckrz6zr2v10971941798efjzsrzd",
        slug: "the-whisper-man-g5heq",
        title: "The Whisper Man",
        description:
          '**THE INSTANT NEW YORK TIMES BESTSELLER** "WORKS BEAUTIFULLY... If you like being terrified, The Whisper Man has your name on it." —The New York Times, Editor\'s Pick "SUPERB" —Publisher\'s Weekly, Starred Review "BRILLIANT... will satisfy readers of Thomas Harris and Stephen King." —Booklist, Starred Review "POIGNANT AND TERRIFYING" —Entertainment Weekly In this dark, suspenseful thriller, Alex North weaves a multi-generational tale of a father and son caught in the crosshairs of an investigation to catch a serial killer preying on a small town. After the sudden death of his wife, Tom Kennedy believes a fresh start will help him and his young son Jake heal. A new beginning, a new house, a new town. Featherbank. But the town has a dark past. Twenty years ago, a serial killer abducted and murdered five residents. Until Frank Carter was finally caught, he was nicknamed "The Whisper Man," for he would lure his victims out by whispering at their windows at night. Just as Tom and Jake settle into their new home, a young boy vanishes. His disappearance bears an unnerving resemblance to Frank Carter\'s crimes, reigniting old rumors that he preyed with an accomplice. Now, detectives Amanda Beck and Pete Willis must find the boy before it is too late, even if that means Pete has to revisit his great foe in prison: The Whisper Man. And then Jake begins acting strangely. He hears a whispering at his window...',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckjlyrjxc23187107yeidqcr9u",
        slug: "the-emperor-of-all-maladies-fvrh7",
        title: "The Emperor of All Maladies",
        description:
          "An assessment of cancer addresses both the courageous battles against the disease and the misperceptions and hubris that have compromised modern understandings, providing coverage of such topics as ancient-world surgeries and the development of present-day treatments. Reprint. Best-selling winner of the Pulitzer Prize. Includes reading-group guide.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckrp6b2b61044161czq766eufwk",
        slug: "a-thousand-brains-cenlj",
        title: "A Thousand Brains",
        description:
          "A bestselling author, neuroscientist, and computer engineer unveils a theory of intelligence that will revolutionize our understanding of the brain and the future of AI For all of neuroscience's advances, we've made little progress on its biggest question: How do simple cells in the brain create intelligence? Jeff Hawkins and his team discovered that the brain uses maplike structures to build a model of the world-not just one model, but hundreds of thousands of models of everything we know. This discovery allows Hawkins to answer important questions about how we perceive the world, why we have a sense of self, and the origin of high-level thought. A Thousand Brains heralds a revolution in the understanding of intelligence. It is a big-think book, in every sense of the word.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "cklgk98vz313861ifbbtjmmzmf",
        slug: "gone-girl-bjq8u",
        title: "Gone Girl",
        description:
          "For use in schools and libraries only. When a woman goes missing on her fifth wedding anniversary, her diary reveals hidden turmoil in her marriage, while her husband, desperate to clear himself of suspicion, realizes that something more disturbing than murder may have occurred.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "clpcyhz849131230hgdc2zv30z8",
        slug: "philippa-perry-the-book-you-wish-your-parents-had-read-and-your-children-will-be-glad-that-you-did-c67i7",
        title:
          "The Book You Wish Your Parents Had Read [and Your Children Will Be Glad That You Did]",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cksy54umq2492531j8g2ae565il",
        slug: "the-happiest-baby-on-the-block-i84yi",
        title: "The Happiest Baby on the Block",
        description:
          "A pediatrician and child development specialist combines medical research with personal experience to create a four-step plan for soothing a cranky infant.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckkln8g1k142991i7juluiok1f",
        slug: "the-midnight-library-mrpx0",
        title: "The Midnight Library",
        description:
          "THE NUMBER ONE SUNDAY TIMES BESTSELLER AN INSTANT NEW YORK TIMES BESTSELLER A BBC TWO BETWEEN THE COVERS BOOK CLUB PICK Between life and death there is a library. When Nora Seed finds herself in the Midnight Library, she has a chance to make things right. Up until now, her life has been full of misery and regret. She feels she has let everyone down, including herself. But things are about to change. The books in the Midnight Library enable Nora to live as if she had done things differently. With the help of an old friend, she can now undo every one of her regrets as she tries to work out her perfect life. But things aren’t always what she imagined they’d be, and soon her choices place the library and herself in extreme danger. Before time runs out, she must answer the ultimate question: what is the best way to live?",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cks8wursv9105341k98n29n5x2a",
        slug: "bebe-day-by-day-y36ya",
        title: "Bébé Day by Day",
        description:
          "An alternative guide to raising children shares wisdom and insights with American parents on the most effective practices being used by their French contemporaries, drawing on the author's considerable research to offer essential insights into a range of modern concerns.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckr1uqxtd1el501crvg9bbatw",
        slug: "ernesto-guevarathe-motorcycle-diaries-qqxhz",
        title: "The motorcycle diaries",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckrbpe3hg78433183sevluna3r",
        slug: "the-future-of-capitalism-r9znw",
        title: "The Future of Capitalism",
        description:
          "From world-renowned economist Paul Collier, a candid diagnosis of the failures of capitalism and a pragmatic and realistic vision for how we can repair it. Deep new rifts are tearing apart the fabric of the United States and other Western societies: thriving cities versus rural counties, the highly skilled elite versus the less educated, wealthy versus developing countries. As these divides deepen, we have lost the sense of ethical obligation to others that was crucial to the rise of post-war social democracy. So far these rifts have been answered only by the revivalist ideologies of populism and socialism, leading to the seismic upheavals of Trump, Brexit, and the return of the far-right in Germany. We have heard many critiques of capitalism but no one has laid out a realistic way to fix it, until now. In a passionate and polemical book, celebrated economist Paul Collier outlines brilliantly original and ethical ways of healing these rifts—economic, social and cultural—with the cool head of pragmatism, rather than the fervor of ideological revivalism. He reveals how he has personally lived across these three divides, moving from working-class Sheffield to hyper-competitive Oxford, and working between Britain and Africa, and acknowledges some of the failings of his profession. Drawing on his own solutions as well as ideas from some of the world’s most distinguished social scientists, he shows us how to save capitalism from itself—and free ourselves from the intellectual baggage of the twentieth century.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckq80vv1i1626071i7wk70o6yxg",
        slug: "models-of-the-mind-bb0ka",
        title: "Models of the Mind",
        description:
          "Grace Lindsay reveals the value of describing the machinery of neuroscience using the elegant language of mathematics. The brain is made up of 85 billion neurons, which are connected by over 100 trillion synapses. For over a century, a diverse array of researchers have been trying to find a language that can be used to capture the essence of what these neurons do and how they communicate – and how those communications create thoughts, perceptions and actions. The language they were looking for was mathematics, and we would not be able to understand the brain as we do today without it. In Models of the Mind, author and computational neuroscientist Grace Lindsay explains how mathematical models have allowed scientists to understand and describe many of the brain's processes, including decision-making, sensory processing, quantifying memory, and more. She introduces readers to the most important concepts in modern neuroscience, and highlights the tensions that arise when bringing the abstract world of mathematical modelling into contact with the messy details of biology. Each chapter focuses on mathematical tools that have been applied in a particular area of neuroscience, progressing from the simplest building block of the brain – the individual neuron – through to circuits of interacting neurons, whole brain areas and even the behaviors that brains command. Throughout Grace will look at the history of the field, starting with experiments done on neurons in frog legs at the turn of the twentieth century and building to the large models of artificial neural networks that form the basis of modern artificial intelligence. She demonstrates the value of describing the machinery of neuroscience using the elegant language of mathematics, and reveals in full the remarkable fruits of this endeavor.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckrp0fnd2780692178fmnkuwza6",
        slug: "lost-in-math-j20lg",
        title: "Lost in Math",
        description:
          'Most physicists think of beauty as the royal road to discovery; a leading critic shows it is instead the road to nowhere Whether pondering black holes or predicting discoveries at CERN, physicists believe the best theories are beautiful, natural, and elegant, and this standard separates popular theories from disposable ones. This is why, Sabine Hossenfelder argues, we have not seen a major breakthrough in the foundations of physics for more than four decades. The belief in beauty has become so dogmatic that it now conflicts with scientific objectivity: observation has been unable to confirm mindboggling theories, like supersymmetry or grand unification, invented by physicists based on aesthetic criteria. Worse, these "too good to not be true" theories are actually untestable and they have left the field in a cul-de-sac. To escape, physicists must rethink their methods. Only by embracing reality as it is can science discover the truth.',
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cksal2cy112773bn98pq5z9tlx",
        slug: "genius-makers-ip0yj",
        title: "Genius Makers",
        description:
          "\"This colorful page-turner puts artificial intelligence into a human perspective. Through the lives of Geoff Hinton and other major players, Metz explains this transformative technology and makes the quest thrilling.\" --Walter Isaacson, author of The Code Breaker Recipient of starred reviews in both Kirkus and Library Journal THE UNTOLD TECH STORY OF OUR TIME What does it mean to be smart? To be human? What do we really want from life and the intelligence we have, or might create? With deep and exclusive reporting, across hundreds of interviews, New York Times Silicon Valley journalist Cade Metz brings you into the rooms where these questions are being answered. Where an extraordinarily powerful new artificial intelligence has been built into our biggest companies, our social discourse, and our daily lives, with few of us even noticing. Long dismissed as a technology of the distant future, artificial intelligence was a project consigned to the fringes of the scientific community. Then two researchers changed everything. One was a sixty-four-year-old computer science professor who didn't drive and didn't fly because he could no longer sit down--but still made his way across North America for the moment that would define a new age of technology. The other was a thirty-six-year-old neuroscientist and chess prodigy who laid claim to being the greatest game player of all time before vowing to build a machine that could do anything the human brain could do. They took two very different paths to that lofty goal, and they disagreed on how quickly it would arrive. But both were soon drawn into the heart of the tech industry. Their ideas drove a new kind of arms race, spanning Google, Microsoft, Facebook, and OpenAI, a new lab founded by Silicon Valley kingpin Elon Musk. But some believed that China would beat them all to the finish line. Genius Makers dramatically presents the fierce conflict between national interests, shareholder value, the pursuit of scientific knowledge, and the very human concerns about privacy, security, bias, and prejudice. Like a great Victorian novel, this world of eccentric, brilliant, often unimaginably yet suddenly wealthy characters draws you into the most profound moral questions we can ask. And like a great mystery, it presents the story and facts that lead to a core, vital question: How far will we let it go?",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckpsnnhc5162811rjmhav0xc6o",
        slug: "the-geography-of-thought-aekpx",
        title: "The Geography of Thought",
        description:
          "An award-winning professor of psychology examines the divergent ways in which eastern and western cultures view the world, offering suggestions about how today's interdependent global cultures may be bridged. Reprint. 15,000 first printing.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl5vbiu8k3650150hh0pj0coqwl",
        slug: "barbara-kingsolver-demon-copperhead-r1x7k",
        title: "Demon Copperhead",
        description:
          "Set in the mountains of southern Appalachia, Demon Copperhead is the story of a boy born to a teenaged single mother in a single-wide trailer, with no assets beyond his dead father’s good looks and copper-colored hair, a caustic wit, and a fierce talent for survival. Relayed in his own unsparing voice, Demon braves the modern perils of foster care, child labor, derelict schools, athletic success, addiction, disastrous loves, and crushing losses. Through all of it, he reckons with his own invisibility in a popular culture where even the superheroes have abandoned rural people in favor of cities.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckq0rfjgy06251riltmthdg12",
        slug: "the-sixth-extinction-85kwa",
        title: "The Sixth Extinction",
        description:
          "Draws on the work of geologists, botanists, marine biologists, and other researchers to discuss the five devastating mass extinctions on Earth and predicts the coming of a sixth.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckpq14r482712901giv5ge32c8m",
        slug: "animal-farm-30k4n",
        title: "Animal Farm",
        description:
          "When the downtrodden animals of Manor Farm overthrow their master Mr Jones and take over the farm themselves, they imagine it is the beginning of a life of freedom and equality. But gradually a cunning, ruthless elite among them, masterminded by the pigs Napoleon and Snowball, starts to take control.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckppt6ptz879421givm8w3ek9a",
        slug: "humble-pi-prfxc",
        title: "Humble Pi",
        description:
          "We would all be better off if everyone saw mathematics as a practical ally. Sadly, most of us fear maths and seek to avoid it. This is because mathematics doesn't have good 'people skills' - it never hesitates to bluntly point out when we are wrong. But it is only trying to help! Mathematics is a friend which can fill the gaps in what our brains can do naturally. Luckily, even though we don't like sharing our own mistakes, we love to read about what happens when maths errors make the everyday go horribly wrong. Matt Parker explores and explains near misses and mishaps with planes, bridges, the internet and big data as a way of showing us not only how important maths is, but how we can use it to our advantage. This comedy of errors is a brilliantly told series of disaster stories with a happy ending.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckp41kjdw13431gjs2n0gwpgc",
        slug: "six-easy-pieces-yi24x",
        title: "Six Easy Pieces",
        description:
          "The six easiest chapters from Feynman's celebrated lectures on physics, which the Nobel Prize-winning scientist delivered from 1961 to 1963 at the California Institute of Technology, have been reprinted in this volume.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckpq118332628421givsspzq362",
        slug: "on-earth-were-briefly-gorgeous-fvb2g",
        title: "On Earth We're Briefly Gorgeous",
        description:
          "\"Brilliant, heartbreaking, tender, and highly original - poet Ocean Vuong's debut novel is a sweeping and shattering portrait of a family, and a testament to the redemptive power of storytelling. On Earth We're Briefly Gorgeous is a letter from a son to a mother who cannot read. Written when the speaker, Little Dog, is in his late twenties, the letter unearths a family's history that began before he was born--a history whose epicenter is rooted in Vietnam--and serves as a doorway into parts of his life his mother has never known, all of it leading to an unforgettable revelation. At once a witness to the fraught yet undeniable love between a single mother and her son, it is also a brutally honest exploration of race, class, and masculinity\"--",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckli141rz606421ii32nexoytp",
        slug: "the-song-of-achilles-uwgco",
        title: "The Song of Achilles",
        description:
          "Greece in the age of Heroes. Patroclus, an awkward young prince, has been exiled to the kingdom of Phthia. Here he is nobody, just another unwanted boy living in the shadow of King Peleus and his golden son, Achilles. Achilles, 'best of all the Greeks', is everything Patroclus is not - strong, beautiful, the child of a goddess - and by all rights their paths should never cross. Yet one day, Achilles takes the shamed prince under his wing and soon their tentative companionship gives way to a steadfast friendship. As they grow into young men skilled in the arts of war and medicine, their bond blossoms into something far deeper - despite the displeasure of Achilles's mother Thetis, a cruel and deathly pale sea goddess with a hatred of mortals. Fate is never far from the heels of Achilles. When word comes that Helen of Sparta has been kidnapped, the men of Greece are called upon to lay siege to Troy in her name. Seduced by the promise of a glorious destiny, Achilles joins their cause, Torn between love and fear for his friend, Patroclus follows Achilles into war, little knowing that the years that follow will test everything they have learned, everything they hold dear. And that, before he is ready, he will be forced to surrender his friend to the hands of Fate. Profoundly moving and breathtakingly original, this rendering of the epic Trojan War is a dazzling feat of the imagination, a devastating love story, and an almighty battle between gods and kings, peace and glory, immortal fame and the human heart.",
      },
    },
    {
      status: ReadingStatus.IsReading,
      book: {
        id: "ckikds6gf01560zhfha1gtsvm",
        slug: "dune-2fou9",
        title: "Dune",
        description:
          "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for....\n\nWhen House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, he will bring to fruition humankind’s most ancient and unattainable dream. ",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "cl3wvlkuj3170180hfbwie98ksv",
        slug: "dick-hill-lee-child-a-wanted-man-ebd33",
        title: "A Wanted Man",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckrp10jaf930289178fl8umly42",
        slug: "origin-story-45yoy",
        title: "Origin Story",
        description:
          'A captivating history of the universe -- from before the dawn of time through the far reaches of the distant future. Most historians study the smallest slivers of time, emphasizing specific dates, individuals, and documents. But what would it look like to study the whole of history, from the big bang through the present day -- and even into the remote future? How would looking at the full span of time change the way we perceive the universe, the earth, and our very existence? These were the questions David Christian set out to answer when he created the field of "Big History," the most exciting new approach to understanding where we have been, where we are, and where we are going. In Origin Story, Christian takes readers on a wild ride through the entire 13.8 billion years we\'ve come to know as "history." By focusing on defining events (thresholds), major trends, and profound questions about our origins, Christian exposes the hidden threads that tie everything together -- from the creation of the planet to the advent of agriculture, nuclear war, and beyond. With stunning insights into the origin of the universe, the beginning of life, the emergence of humans, and what the future might bring, Origin Story boldly reframes our place in the cosmos.',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1uaxaj19ya01crc706iqb8",
        slug: "lee-childthe-hard-way-nobgl",
        title: "The hard way",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1vxhvs1roq01crlxbuaedz",
        slug: "without-fail-jack-reacher-yr3wl",
        title: "Without Fail (Jack Reacher)",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckpepv4hs59801rk9qm1ayynu",
        slug: "the-martian-4cp60",
        title: "The Martian",
        description:
          "Stranded on Mars by a dust storm that compromised his space suit and forced his crew to leave him behind, astronaut Watney struggles to survive in spite of minimal supplies and harsh environmental challenges that test his ingenuity in unique ways. A first novel.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "clbzynuni9031670ht9me75tenb",
        slug: "bill-mcguire-hothouse-earth-ahjkq",
        title: "Hothouse Earth",
        description:
          "We inhabit a planet in peril. Our once temperate world is locked on course to become a hothouse entirely of our own making. Hothouse Earth: an Inhabitant's Guide provides a post-COP26 perspective on the climate emergency, acknowledging that it is now practically impossible to keep this side of the 1.5°C dangerous climate change guardrail. The upshot is that we can no longer dodge the arrival of disastrous, all-pervasive climate breakdown that will come as a hammer blow to global society and economy. Bill McGuire, Professor of Geophysical and Climate Hazards, explains the science behind the climate crisis, painting a blunt but authentic picture of the sort of world our children will grow old in, and our grandchildren grow up in; a world that we catch only glimpses of in today's blistering heatwaves, calamitous wildfires and ruinous floods and droughts. Bleak though it is, the picture is one we must all face up to, if only to spur genuine action - even at this late stage - to stop a harrowing future becoming a truly cataclysmic one.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "cki5y0xdp803810c1su0oq752",
        slug: "the-book-thief-khp98",
        title: "The Book Thief",
        description:
          "The 10th-anniversary edition of the No. 1 international bestseller and modern classic beloved by millions of readers HERE IS A SMALL FACT - YOU ARE GOING TO DIE 1939. Nazi Germany. The country is holding its breath. Death has never been busier. Liesel, a nine-year-old girl, is living with a foster family on Himmel Street. Her parents have been taken away to a concentration camp. Liesel steals books. This is her story and the story of the inhabitants of her street when the bombs begin to fall. SOME IMPORTANT INFORMATION - THIS NOVEL IS NARRATED BY DEATH The 10th-anniversary edition features pages of bonus content, including marked-up manuscript pages, original sketches, and pages from the author's writing notebook.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "cluqm6ssa14504570habtt0ovxkq",
        slug: "gernot-starke-michael-simons-stefan-zorner-ralf-d-muller-arc42-by-example-3rrdz",
        title: "Arc42 by Example",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckl941odl251261i4lsv1w3vyv",
        slug: "ikigai-qy3fr",
        title: "Ikigai",
        description:
          "THE INTERNATIONAL BESTSELLER We all have an ikigai. It's the Japanese word for 'a reason to live' or 'a reason to jump out of bed in the morning'. It's the place where your needs, desires, ambitions, and satisfaction meet. A place of balance. Small wonder that finding your ikigai is closely linked to living longer. Finding your ikigai is easier than you might think. This book will help you work out what your own ikigai really is, and equip you to change your life. You have a purpose in this world: your skills, your interests, your desires and your history have made you the perfect candidate for something. All you have to do is find it. Do that, and you can make every single day of your life joyful and meaningful. ______________________________ 'I read it and it's bewitched me ever since. I'm spellbound.' Chris Evans 'Ikigai gently unlocks simple secrets we can all use to live long, meaningful, happy lives. Science-based studies weave beautifully into honest, straight-talking conversation you won't be able to put down. Warm, patient, and kind, this book pulls you gently along your own journey rather than pushing you from behind.' Neil Pasricha, bestselling author of The Happiness Equation",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1rjsni0gqa01creqwvulxj",
        slug: "matt-ridleygenome-if7z2",
        title: "Genome",
        description: "OCLC 70175575",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "cl01qs43b2426640jsu11dwpw7z",
        slug: "douglas-murray-the-war-on-the-west-g9k8g",
        title: "The War on the West",
        description:
          "It has become acceptable to discuss the flaws and crimes of Western culture, but celebrating their contributions is also called hate speech. Douglas Murray shows how many well-meaning people have been lured into protests and polarization by lies and hypocrisy. Ranging from an incisive takedown of foolish arguments and activism to a clarion call for the defense of enlightenment values, Murray carefully and methodically shows how far political discourse has strayed in Europe and America from its stated goals: justice and equality. Print run 75,000.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckp8doyeq4433761i8pty7ivbcv",
        slug: "a-brief-history-of-time-uurgp",
        title: "A Brief History of Time",
        description:
          "Was there a beginning of time? Could time run backwards? Is the universe infinite or does it have boundaries? These are just some of the questions considered in an internationally acclaimed masterpiece which begins by reviewing the great theories of the cosmos from Newton to Einstein, before delving into the secrets which still lie at the heart of space and time.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckpoav7yu763971gmzo3mktetj",
        slug: "the-seven-husbands-of-evelyn-hugo-0g2wv",
        title: "The Seven Husbands of Evelyn Hugo",
        description:
          '"Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one in the journalism community is more astounded than Monique herself. Why her? Why now?"',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1vcwfj1lig01crbzogyo8y",
        slug: "stephen-hawkingthe-theory-of-everything-hljmg",
        title: "The Theory Of Everything",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1q0z3u007e01crfvpkn6bc",
        slug: "chetan-bhagat2-states-qkqyg",
        title: "2 states",
        description: "Story about inter-community marriage in modern India.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckkqnh5hg78061i6eyet6q96j",
        slug: "we-were-liars-82o0l",
        title: "We Were Liars",
        description:
          "A New York Times Bestseller. A beautiful and distinguished family. A private island. A brilliant, damaged girl; a passionate, political boy. A group of four friends-the Liars-whose friendship turns destructive. A revolution. An accident. A secret. Lies upon lies. True love. The truth. We Were Liars is a modern, sophisticated suspense novel from New York Times bestselling author, National Book Award finalist, and Printz Award honouree E. Lockhart. Read it. And if anyone asks you how it ends, just LIE.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckmaukl7d72511ijaavn679o5",
        slug: "the-rosie-project-18ohz",
        title: "The Rosie Project",
        description:
          "A socially awkward genetics professor who has never been on a second date sets out to find the perfect wife, but instead finds Rosie Jarman, a fiercely independent barmaid who is on a quest to find her biological father.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckjo4tyml197321id148cuuoc0",
        slug: "the-psychology-of-money-81pxa",
        title: "The Psychology of Money",
        description:
          "Doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. Money—investing, personal finance, and business decisions—is typically taught as a math-based field, where data and formulas tell us exactly what to do. But in the real world people don’t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your own unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life’s most important topics.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1u83gy191z01crzoqgjk2a",
        slug: "the-girl-on-the-train-7d233",
        title: "The Girl On the Train",
        description:
          "Rachel catches the same commuter train every morning. She knows it will wait at the same signal each time, overlooking a row of back gardens. She’s even started to feel like she knows the people who live in one of the houses. “Jess and Jason,” she calls them. Their life—as she sees it—is perfect. If only Rachel could be that happy. And then she sees something shocking. It’s only a minute until the train moves on, but it’s enough. Now everything’s changed. Now Rachel has a chance to become a part of the lives she’s only watched from afar. Now they’ll see; she’s much more than just the girl on the train...",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckend9dzt2824jm0yibqn88an",
        slug: "mark-manson-the-subtle-art-of-not-giving-a-fck-c3rqp",
        title: "The Subtle Art of Not Giving a F*ck",
        description:
          '#1 New York Times Bestseller Over 1 million copies sold In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be "positive" all the time so that we can truly become better, happier people. For decades, we’ve been told that positive thinking is the key to a happy, rich life. "F**k positivity," Mark Manson says. "Let’s be honest, shit is f**ked and we have to live with it." In his wildly popular Internet blog, Manson doesn’t sugarcoat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, let’s-all-feel-good mindset that has infected American society and spoiled a generation, rewarding them with gold medals just for showing up. Manson makes the argument, backed both by academic research and well-timed poop jokes, that improving our lives hinges not on our ability to turn lemons into lemonade, but on learning to stomach lemons better. Human beings are flawed and limited—"not everybody can be extraordinary, there are winners and losers in society, and some of it is not fair or your fault." Manson advises us to get to know our limitations and accept them. Once we embrace our fears, faults, and uncertainties, once we stop running and avoiding and start confronting painful truths, we can begin to find the courage, perseverance, honesty, responsibility, curiosity, and forgiveness we seek. There are only so many things we can give a f**k about so we need to figure out which ones really matter, Manson makes clear. While money is nice, caring about what you do with your life is better, because true wealth is about experience. A much-needed grab-you-by-the-shoulders-and-look-you-in-the-eye moment of real-talk, filled with entertaining stories and profane, ruthless humor, The Subtle Art of Not Giving a F**k is a refreshing slap for a generation to help them lead contented, grounded lives.',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckhq877o414180zg1rd5alf3n",
        slug: "the-silent-patient-n3igb",
        title: "The Silent Patient",
        description:
          'The instant #1 New York Times bestseller "An unforgettable—and Hollywood-bound—new thriller... A mix of Hitchcockian suspense, Agatha Christie plotting, and Greek tragedy." —Entertainment Weekly The Silent Patient is a shocking psychological thriller of a woman’s act of violence against her husband—and of the therapist obsessed with uncovering her motive. Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer, she lives in a grand house with big windows overlooking a park in one of London’s most desirable areas. One evening her husband Gabriel returns home late from a fashion shoot, and Alicia shoots him five times in the face, and then never speaks another word. Alicia’s refusal to talk, or give any kind of explanation, turns a domestic tragedy into something far grander, a mystery that captures the public imagination and casts Alicia into notoriety. The price of her art skyrockets, and she, the silent patient, is hidden away from the tabloids and spotlight at the Grove, a secure forensic unit in North London. Theo Faber is a criminal psychotherapist who has waited a long time for the opportunity to work with Alicia. His determination to get her to talk and unravel the mystery of why she shot her husband takes him down a twisting path into his own motivations—a search for the truth that threatens to consume him....',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckgickd3i143790y8y2j0zr7a3",
        slug: "homo-deus-ny032",
        title: "Homo Deus",
        description:
          "**THE MILLION COPY BESTSELLER** Sapiens showed us where we came from. In uncertain times, Homo Deus shows us where we’re going. Yuval Noah Harari envisions a near future in which we face a new set of challenges. Homo Deus explores the projects, dreams and nightmares that will shape the twenty-first century and beyond – from overcoming death to creating artificial life. It asks the fundamental questions: how can we protect this fragile world from our own destructive power? And what does our future hold? 'Homo Deus will shock you. It will entertain you. It will make you think in ways you had not thought before’ Daniel Kahneman, bestselling author of Thinking, Fast and Slow",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "cketqjupl21366jm0ycwopwxq6",
        slug: "yuval-noah-harari-sapiens-ohhok",
        title: "Sapiens",
        description:
          "From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.”\n\nOne hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us?",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckkfh9hbc238671i7l24qafwjv",
        slug: "the-science-of-mom-3q1w9",
        title: "The Science of Mom",
        description:
          "It seems like every time a new mother turns on her computer, radio, or television, she is greeted with news of yet another scientific study about infancy. Ignoring good information isn’t the right course, but just how does one tell the difference between solid studies, preliminary results, and snake oil? In this friendly guide through the science of infancy, Science of Mom blogger and PhD scientist Alice Callahan explains how non-scientist mothers can learn the difference between hype and evidence. Readers of Alice’s blog have come to trust her balanced approach, which explains the science that lies behind headlines. The Science of Mom is a fascinating, eye-opening, and extremely informative exploration of the topics that generate discussion and debate in the media and among parents. From breastfeeding to vaccines to sleep, Alice’s advice will help you make smart choices so that you can relax and enjoy your baby.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckpoaq8t5584151gmzivxnqzya",
        slug: "parent-hacks-u09jv",
        title: "Parent Hacks",
        description:
          "Drawing from the award-winning website ParentHacks.com, here are 134 ingenious ideas for simplifying life with kids. A parent hack can be as simple as putting the ketchup under the hot dog, minimizing the mess. Or strapping baby into a forward-facing carrier when you need to trim his fingernails—it frees your hands while controlling the squirming. Or stashing a wallet in a disposable diaper at the beach—who would ever poke through what looks like a used Pamper? On every page, discover easy-to-do, boldly illustrated, unconventional solutions, arranged by category from Pregnancy & Postpartum through Sleep, Eating, Bath Time, Travel, and more.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "clghw9n0o14120030he3tvz7trsy",
        slug: "michel-cohen-the-new-basics-ohy2l",
        title: "The New Basics",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckhdjz0dv73331llgl2bu5vkk",
        slug: "talking-to-strangers-e99c4",
        title: "Talking to Strangers",
        description:
          "Malcolm Gladwell, host of the podcast Revisionist History and #1 bestselling author of The Tipping Point, Blink, Outliers, David and Goliath, and What the Dog Saw, offers a powerful examination of our interactions with strangers---and why they often go wrong. How did Fidel Castro fool the CIA for a generation? Why did Neville Chamberlain think he could trust Adolf Hitler? Why are campus sexual assaults on the rise? Do television sitcoms teach us something about the way we relate to each other that isn't true? Talking to Strangers is a classically Gladwellian intellectual adventure, a challenging and controversial excursion through history, psychology, and scandals taken straight from the news. He revisits the deceptions of Bernie Madoff, the trial of Amanda Knox, the suicide of Sylvia Plath, the Jerry Sandusky pedophilia scandal at Penn State University, and the death of Sandra Bland---throwing our understanding of these and other stories into doubt. Something is very wrong, Gladwell argues, with the tools and strategies we use to make sense of people we don't know. And because we don't know how to talk to strangers, we are inviting conflict and misunderstanding in ways that have a profound effect on our lives and our world. In his first book since his #1 bestseller, David and Goliath, Malcolm Gladwell has written a gripping guidebook for troubled times.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cks9l7uwr2958241k98vreh49jw",
        slug: "son-of-hamas-j7a0h",
        title: "Son of Hamas",
        description:
          "Describes the author's experiences as the son of one of the founders of Hamas, how he assisted his father in an important role in the organization, and how he came to renounce violence and Hamas and become a Christian.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckpptyif91257771givmfkfu4e9",
        slug: "youre-not-listening-dnuer",
        title: "You're Not Listening",
        description:
          'When was the last time you listened to someone, or someone really listened to you? "If you’re like most people, you don’t listen as often or as well as you’d like. There’s no one better qualified than a talented journalist to introduce you to the right mindset and skillset—and this book does it with science and humor." -Adam Grant, #1 New York Times bestselling author of Originals and Give and Take "An essential book for our times." -Lori Gottlieb, New York Times bestselling author of Maybe You Should Talk to Someone At work, we’re taught to lead the conversation. On social media, we shape our personal narratives. At parties, we talk over one another. So do our politicians. We’re not listening. And no one is listening to us. Despite living in a world where technology allows constant digital communication and opportunities to connect, it seems no one is really listening or even knows how. And it’s making us lonelier, more isolated, and less tolerant than ever before. A listener by trade, New York Times contributor Kate Murphy wanted to know how we got here. In this always illuminating and often humorous deep dive, Murphy explains why we’re not listening, what it’s doing to us, and how we can reverse the trend. She makes accessible the psychology, neuroscience, and sociology of listening while also introducing us to some of the best listeners out there (including a CIA agent, focus group moderator, bartender, radio producer, and top furniture salesman). Equal parts cultural observation, scientific exploration, and rousing call to action that\'s full of practical advice, You\'re Not Listening is to listening what Susan Cain\'s Quiet was to introversion. It’s time to stop talking and start listening.',
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cks9j8sgr2554211k98ix874bk3",
        slug: "how-to-avoid-a-climate-disaster-or0c6",
        title: "How to Avoid a Climate Disaster",
        description:
          'Bill Gates shares what he\'s learned in more than a decade of studying climate change and investing in innovations to address the problems, and sets out a vision for how the world can build the tools it needs to get to zero greenhouse gas emissions. Bill Gates explains why he cares so deeply about climate change and what makes him optimistic that the world can avoid the most dire effects of the climate crisis. Gates says, "We can work on a local, national, and global level to build the technologies, businesses, and industries to avoid the worst impacts of climate change." His interest in climate change is a natural outgrowth of the efforts by his foundation to reduce poverty and disease. Climate change, according to Gates, will have the biggest impact on the people who have done the least to cause it. As a technologist, he has seen firsthand how innovation can change the world. By investing in research, inventing new technologies, and by deploying them quickly at large scale, Gates believes climate change can be addressed in meaningful ways. According to Gates, "to prevent the worst effects of climate change, we have to get to net-zero emissions of greenhouse gases. This problem is urgent, and the debate is complex, but I believe we can come together to invent new carbon-zero technologies, deploy the ones we have, and ultimately avoid a climate catastrophe."',
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckqlenmm42564414uf5fr882l5",
        slug: "until-the-end-of-time-kcmkq",
        title: "Until the End of Time",
        description:
          "From the world-renowned physicist and bestselling author of The Elegant Universe and The Fabric of the Cosmos, a captivating exploration of deep time and humanity's search for purpose In both time and space, the cosmos is astoundingly vast, and yet is governed by simple, elegant, universal mathematical laws. On this cosmic timeline, our human era is spectacular but fleeting. Someday, we know, we will all die. And, we know, so too will the universe itself. Until the End of Time is Brian Greene's breathtaking new exploration of the cosmos and our quest to understand it. Greene takes us on a journey across time, from our most refined understanding of the universe's beginning, to the closest science can take us to the very end. He explores how life and mind emerged from the initial chaos, and how our minds, in coming to understand their own impermanence, seek in different ways to give meaning to experience: in story, myth, religion, creative expression, science, the quest for truth, and our longing for the timeless, or eternal. Through a series of nested stories that explain distinct but interwoven layers of reality-from the quantum mechanics to consciousness to black holes-Greene provides us with a clearer sense of how we came to be, a finer picture of where we are now, and a firmer understanding of where we are headed. Yet all this understanding, which arose with the emergence of life, will dissolve with its conclusion. Which leaves us with one realization: during our brief moment in the sun, we are tasked with the charge of finding our own meaning. Let us embark.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckl948ybl277041i4lckp1s7do",
        slug: "the-math-of-life-and-death-wfawr",
        title: "The Math of Life and Death",
        description:
          "A brilliant and entertaining mathematician illuminates seven mathematical principles that shape our lives. “Kit Yates shows how our private and social lives are suffused by mathematics. Ignorance may bring tragedy or farce. This is an exquisitely interesting book. It’s a deeply serious one too and, for those like me who have little math, it’s delightfully readable.” —Ian McEwan, author of Atonement “Kit Yates is a natural storyteller. Through fascinating stories and examples, he shows how maths is the beating heart of so much of modern life. An exciting new voice in the world of science communication.” —Marcus du Sautoy, author of The Music of the Primes From birthdays to birth rates to how we perceive the passing of time, mathematical patterns shape our lives. But for those of us who left math behind in high school, the numbers and figures hurled at us as we go about our days can sometimes leave us scratching our heads and feeling as if we’re fumbling through a mathematical minefield. In this eye-opening and extraordinarily accessible book, mathemati­cian Kit Yates illuminates hidden principles that can help us understand and navigate the chaotic and often opaque surfaces of our world. In The Math of Life and Death, Yates takes us on a fascinating tour of everyday situations and grand-scale applications of mathematical concepts, including exponential growth and decay, optimization, statistics and probability, and number systems. Along the way he reveals the mathematical undersides of controversies over DNA testing, medical screening results, and historical events such as the Chernobyl disaster and the Amanda Knox trial. Readers will finish this book with an enlightened perspective on the news, the law, medicine, and history, and will be better equipped to make personal decisions and solve problems with math in mind, whether it’s choosing the shortest checkout line at the grocery store or halting the spread of a deadly disease.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cksa7vvir6716111k987unc40v1",
        slug: "power-sex-suicide-02vv8",
        title: "Power, Sex, Suicide",
        description:
          "Mitochondria are tiny structures located inside our cells that carry out the essential task of producing energy for the cell. They are found in all complex living things, and in that sense, they are fundamental for driving complex life on the planet. But there is much more to them than that. Mitochondria have their own DNA, with their own small collection of genes, separate from those in the cell nucleus. It is thought that they were once bacteria living independent lives. Their enslavement within the larger cell was a turning point in the evolution of life, enabling the development of complex organisms and, closely related, the origin of two sexes. Unlike the DNA in the nucleus, mitochondrial DNA is passed down exclusively (or almost exclusively) via the female line. That's why it has been used by some researchers to trace human ancestry daughter-to-mother, to 'Mitochondrial Eve'. Mitochondria give us important information about our evolutionary history. And that's not all. Mitochondrial genes mutate much faster than those in the nucleus because of the free radicals produced in their energy-generating role. This high mutation rate lies behind our ageing and certain congenital diseases. The latest research suggests that mitochondria play a key role in degenerative diseases such as cancer, through their involvement in precipitating cell suicide. Mitochondria, then, are pivotal in power, sex, and suicide. In this fascinating and thought-provoking book, Nick Lane brings together the latest research findings in this exciting field to show how our growing understanding of mitochondria is shedding light on how complex life evolved, why sex arose (why don't we just bud?), and why we age and die. This understanding is of fundamental importance, both in understanding how we and all other complex life came to be, but also in order to be able to control our own illnesses, and delay our degeneration and death. 'An extraordinary account of groundbreaking modern science... The book abounds with interesting and important ideas.' Mark Ridley, Department of Zoology, University of Oxford",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cku72b0z82625621evd6t2yxdfh",
        slug: "david-jackson-the-rule-5gbqm",
        title: "The Rule",
        description:
          "'Horrific, hilarious and often rather moving' THE TIMES 'The master of razor-sharp one liners. An absolute belter' - MANDASUE HELLER 'Brilliant. This is British crime writing at its best' - MARK EDWARDS ________________________________________ MY DAD SAYS BAD THINGS HAPPEN WHEN I BREAK IT... Daniel is looking forward to his birthday. He wants pie and chips, a big chocolate cake, and a comic book starring his favourite superhero. And as long as he follows The Rule, nothing bad will happen. Daniel will be twenty-three next week. And he has no idea that he's about to kill a stranger. Daniel's parents know that their beloved and vulnerable son will be taken away. They know that Daniel didn't mean to hurt anyone, he just doesn't know his own strength. They dispose of the body. Isn't that what any loving parent would do? But as forces on both sides of the law begin to close in on them, they realise they have no option but to finish what they started. Even if it means that others will have to die... Because they'll do anything to protect Daniel. Even murder. ________________________________________ 'Excellent as always. Grimy and heartbreaking in equal measure' - WILL CARVER 'A pacy, smart and darkly funny heartbreaker of a crime novel' - SUSI HOLLIDAY 'A stupendous piece of literary engineering' - JENNY O'BRIEN 'An intense and compelling read. Highly recommended' - LISA HALL 'David Jackson has done it again. The Rule is incredible' - NOELLE HOLTEN",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cklb0drov04181ieatyaj27oj",
        slug: "the-little-book-of-market-wizards-xd4cl",
        title: "The Little Book of Market Wizards",
        description:
          "An accessible look at the art of investing and how to adopt the practices of top professionals What differentiates the highly successful market practitioners—the Market Wizards—from ordinary traders? What traits do they share? What lessons can the average trader learn from those who achieved superior returns for decades while still maintaining strict risk control? Jack Schwager has spent the past 25 years interviewing the market legends in search of the answers—a quest chronicled in four prior Market Wizards volumes totaling nearly 2,000 pages. In The Little Book of Market Wizards, Jack Schwager seeks to distill what he considers the essential lessons he learned in conducting nearly four dozen interviews with some of the world's best traders. The book delves into the mindset and processes of highly successful traders, providing insights that all traders should find helpful in improving their trading skills and results. Each chapter focuses on a specific theme essential to market success Describes how all market participants can benefit by incorporating the related traits, behaviors, and philosophies of the Market Wizards in their own trading Filled with compelling anecdotes that bring the trading messages to life, and direct quotes from the market greats that resonate with the wisdom born of experience and skill Stepping clearly outside the narrow confines of most investment books, The Little Book of Market Wizards focuses on the value of understanding one's self within the context of successful investing.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cketqj27f20809jm0yiewajzkv",
        slug: "ray-bradbury-schriftsteller-fahrenheit-451-k4qok",
        title: "Fahrenheit 451",
        description:
          "Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television “family.” But when he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckpo92qg8131351gmzta3u2a1k",
        slug: "dark-matter-3a2uq",
        title: "Dark Matter",
        description:
          "A science-fiction thriller in which an ordinary man is kidnapped, knocked unconscious, and awakens in a world inexplicably different from the reality he thought he knew.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cluqm70vc14554460habth0pqc0l",
        slug: "john-van-reenen-ufuk-akcigit-emmanuel-macron-economics-of-creative-destruction-qqvo9",
        title: "Economics of Creative Destruction",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cle6ha8yt11581210iha7zxjajil",
        slug: "emily-jane-on-earth-as-it-is-on-television-g2vgp",
        title: "On Earth As It Is on Television",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cktldrs12167406st7a061qqef0",
        slug: "damon-tweedy-black-man-in-a-white-coat-50ell",
        title: "Black Man in a White Coat",
        description:
          '"When Damon Tweedy first enters the halls of Duke University Medical School on a full scholarship, he envisions a bright future where his segregated, working class background will become largely irrelevant. Instead, he finds that he has joined a new world where race is front and center. When one of his first professors mistakes him for a maintenance worker, it is a moment that crystallizes the challenges he will face throughout his early career. Making matters worse, in lecture after lecture the common refrain for numerous diseases resounds: "more common in blacks than whites." [This book] examines the complex ways in which both black doctors and patients must navigate the difficult and often contradictory terrain of race and medicine"--',
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl6pw8jav16487960hdmytexkevh",
        slug: "siddharth-kara-cobalt-red-4p26m",
        title: "Cobalt Red",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckvdp7k7p57227q08bpydcstu0",
        slug: "frank-close-antimatter-3mdoe",
        title: "Antimatter",
        description:
          "Antimatter explores a strange mirror world, where particles have identical yet opposite properties to those that make up the familiar matter we encounter everyday; where left becomes right, positive becomes negative; and where, should matter and antimatter meet, the two annihilate in a blinding flash of energy that makes even thermonuclear explosions look feeble by comparison. It is an idea long beloved of science-fiction stories - but here, renowned science writer Frank Close shows that the reality of antimatter is even more fascinating than the fiction itself. We know that once, antimatter and matter existed in perfect counterbalance, and that antimatter then perpetrated a vanishing act on a cosmic scale that remains one of the greatest mysteries of the universe. Today, antimatter does not exist normally, at least on Earth, but we know that it is real for scientists are now able to make small pieces of it in particle accelerators, such as that at CERN in Geneva. Looking at the remarkable prediction of antimatter and how it grew from the meeting point of relativity and quantum theory in the early 20th century, at the discovery of the first antiparticles, at cosmic rays, annihilation, antimatter bombs, and antiworlds, Close separates the facts from the fiction about antimatter, and explains how its existence can give us profound clues about the origins and structure of the universe.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1u3w6l17qw01cr78pc5b4n",
        slug: "james-d-watsonthe-double-helix-42n28",
        title: "The Double Helix",
        description:
          "By identifying the structure of DNA, the molecule of life, Francis Crick and James Watson revolutionized biochemistry & won themselves a Nobel Prize. At the time, Watson was only 24, a young scientist hungry to make his mark. His uncompromisingly honest account of the heady days of their thrilling sprint against other world-class researchers to solve one of science's greatest mysteries gives a dazzlingly clear picture of a world of brilliant scientists with great gifts, very human ambitions & bitter rivalries. With humility unspoiled by false modesty, Watson relates his & Crick's desperate efforts to beat Linus Pauling to the Holy Grail of life sciences, the identification of the basic building block of life. Never has a scientist been so truthful in capturing in words the flavor of his work.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "cluqm6r7614489250hab6aud9yo1",
        slug: "michael-d-watkins-six-disciplines-of-strategic-thinking-rpgc4",
        title: "Six Disciplines of Strategic Thinking",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1sug1x0u7001cr4rcqsn2z",
        slug: "lee-childone-shot-enfb9",
        title: "One shot",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1vomeo1p4j01crorato1vm",
        slug: "tripwire-grcdf",
        title: "Tripwire",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "cl1j5rkap12154720ittmr4vmvg8",
        slug: "mattias-desmet-the-psychology-of-totalitarianism-xh1g0",
        title: "The Psychology of Totalitarianism",
        description:
          'The world is in the grips of mass formation--a dangerous, collective type of hypnosis--as we bear witness to loneliness, free-floating anxiety, and fear giving way to censorship, loss of privacy, and surrendered freedoms. It is all spurred by a singular, focused crisis narrative that forbids dissident views and relies on destructive groupthink. Desmet\'s work on mass formation theory was brought to the world\'s attention on The Joe Rogan Experience and in major alternative news outlets around the globe. Read this book to get beyond the sound bites! "[Desmet] is waking a lot of people up to the dangerous place we are now with a brilliant distillation of how we ended up here."--Robert F. Kennedy, Jr. Totalitarianism is not a coincidence and does not form in a vacuum. It arises from a collective psychosis that has followed a predictable script throughout history, its formation gaining strength and speed with each generation--from the Jacobins to the Nazis and Stalinists--as technology advances. Governments, mass media, and other mechanized forces use fear, loneliness, and isolation to demoralize populations and exert control, persuading large groups of people to act against their own interests, always with destructive results. In The Psychology of Totalitarianism, world-renowned Professor of Clinical Psychology Mattias Desmet deconstructs the societal conditions that allow this collective psychosis to take hold. By looking at our current situation and identifying the phenomenon of "mass formation"--a type of collective hypnosis--he clearly illustrates how close we are to surrendering to totalitarian regimes. With detailed analyses, examples, and results from years of research, Desmet lays out the steps that lead toward mass formation, including: An overall sense of loneliness and lack of social connections and bonds A lack of meaning--unsatisfying "bullsh*t jobs" that don\'t offer purpose Free-floating anxiety and discontent that arise from loneliness and lack of meaning Manifestation of frustration and aggression from anxiety Emergence of a consistent narrative from government officials, mass media, etc., that exploits and channels frustration and anxiety In addition to clear psychological analysis--and building on Hannah Arendt\'s essential work on totalitarianism, The Origins of Totalitarianism--Desmet offers a sharp critique of the cultural "groupthink" that existed prior to the pandemic and advanced during the COVID crisis. He cautions against the dangers of our current societal landscape, media consumption, and reliance on manipulative technologies and then offers simple solutions--both individual and collective--to prevent the willing sacrifice of our freedoms. "We can honor the right to freedom of expression and the right to self-determination without feeling threatened by each other," Desmet writes. "But there is a point where we must stop losing ourselves in the crowd to experience meaning and connection. That is the point where the winter of totalitarianism gives way to a spring of life." "Desmet has an . . . important take on everything that\'s happening in the world right now."--Aubrey Marcus, podcast host "Mattias Desmet\'s [theory of mass formation] is great. . . . Once I started to look for it, I saw it everywhere. . . . And I felt really motivated, musically."--Eric Clapton',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckjlyrkdu23275107y0b0a677e",
        slug: "the-gene-peoi3",
        title: "The Gene",
        description:
          "Selected as a Book of the Year by The New York Times, The Economist, Independent, Observer and Mail on Sunday THE NEW YORK TIMES NUMBER ONE BESTSELLER SHORTLISTED FOR THE WELLCOME BOOK PRIZE 2017 ‘Dramatic and precise... [A] thrilling and comprehensive account of what seems certain to be the most radical, controversial and, to borrow from the subtitle, intimate science of our time... He is a natural storyteller... A page-turner... Read this book and steel yourself for what comes next’ Bryan Appleyard, Sunday Times The Gene is the story of one of the most powerful and dangerous ideas in our history, from bestselling, prize-winning author Siddhartha Mukherjee. Spanning the globe and several centuries, The Gene is the story of the quest to decipher the master-code that makes and defines humans, that governs our form and function. This is an epic, moving history of a scientific idea coming to life, by the author of The Emperor of All Maladies. But woven through The Gene, like a red line, is also an intimate history – the story of Mukherjee’s own family and its recurring pattern of mental illness, reminding us that genetics is vitally relevant to everyday lives. These concerns reverberate even more urgently today as we learn to “read” and “write” the human genome – unleashing the potential to change the fates and identities of our children. The story of the gene begins in an obscure Augustinian abbey in Moravia in 1856 where a monk stumbles on the idea of a ‘unit of heredity’. It intersects with Darwin’s theory of evolution, and collides with the horrors of Nazi eugenics in the 1940s. The gene transforms post-war biology. It reorganizes our understanding of sexuality, temperament, choice and free will. This is a story driven by human ingenuity and obsessive minds – from Charles Darwin and Gregor Mendel to Francis Crick, James Watson and Rosalind Franklin, and the thousands of scientists still working to understand the code of codes. Majestic in its ambition, and unflinching in its honesty, The Gene gives us a definitive account of the fundamental unit of heredity – and a vision of both humanity’s past and future.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "clmhypaeq2689730hhynx951k8a",
        slug: "eric-jorgenson-the-almanack-of-naval-ravikant-9gnax",
        title: "The Almanack Of Naval Ravikant",
        description: null,
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckr1upmgg1e9s01cr2yo7s6gj",
        slug: "lee-childthe-midnight-line-8yzjg",
        title: "The midnight line",
        description:
          '"#1 New York Times bestselling author Lee Child returns with a gripping new powerhouse thriller featuring Jack Reacher, "one of this century\'s most original, tantalizing pop-fiction heroes" (The Washington Post). Reacher takes a stroll through a small Wisconsin town and sees a class ring in a pawn shop window: West Point 2005.A tough year to graduate: Iraq, then Afghanistan. The ring is tiny, for a woman, and it has her initials engraved on the inside. Reacher wonders what unlucky circumstance made her give up something she earned over four hard years. He decides to find out. And find the woman. And return her ring. Why not? So begins a harrowing journey that takes Reacher through the upper Midwest, from a lowlife bar on the sad side of small town to a dirt-blown crossroads in the middle of nowhere, encountering bikers, cops, crooks, muscle, and a missing persons PI who wears a suit and a tie in the Wyoming wilderness. The deeper Reacher digs, and the more he learns, the more dangerous the terrain becomes. Turns out the ring was just a small link in a far darker chain. Powerful forces are guarding a vast criminal enterprise. Some lines should never be crossed. But then, neither should Reacher. Praise for #1 bestselling author Lee Child and his Jack Reacher series "There\'s a reason why Child is considered the best of the best in the thriller genre."--Associated Press "Jack Reacher is today\'s James Bond."--Ken Follett"--\n\n"Reacher rides the bus north from Milwaukee. At a comfort stop in Wisconsin dairy country he takes a stroll. Among the cheap junk in a pawn shop window he notices a West Point class ring for sale. It\'s tiny. A woman cadet\'s ring. Why would she pawn it? Reacher knows what Serena Sanderson must have gone through to get it. He fights through a biker gang and a South Dakota gangster, following the trail of the ring to the emptiness of Wyoming, in search of Major Sanderson. Is she OK?"--',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckjpzsjzi06590zm4sct5hwqc",
        slug: "the-lovers-dictionary-8og58",
        title: "The Lover's Dictionary",
        description:
          "A modern love story told through a series of dictionary-style entries is a sequence of intimate windows into the large and small events that shape the course of a romantic relationship. By the co-author of the best-selling Nick & Norah's Infinite Playlist.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckp8i38gk4961121i8pi8z1kmuh",
        slug: "project-hail-mary-y3ycg",
        title: "Project Hail Mary",
        description:
          "The sole survivor on a desperate, last-chance mission to save both humanity and the earth, Ryland Grace is hurtled into the depths of space when he must conquer an extinction-level threat to our species. ",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckgcfx1lj38200zb83xf6i806",
        slug: "the-immortals-of-meluha-e43g2",
        title: "The Immortals of Meluha",
        description:
          "1900 BC: the once-proud Suryavanshi rulers of the Meluha Empire are in dire peril. The empire's primary river, the Saraswathi, is slowly drying up. There are devastating terrorist attacks from the east, the land of the Chandravanshis - and to make matters worse, the Chandravanshis appear to have allied with the Nagas, an ostracised race of deformed humans with astonishing martial skills. The only hope for the Suryavanshis is an ancient prophecy: when evil reaches epic proportions and all seems lost, a hero will emerge...",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckppt8e5m954251giv40tkkavw",
        slug: "numbers-dont-lie-wunqn",
        title: "Numbers Don't Lie",
        description:
          "'There is no author whose books I look forward to more than Vaclav Smil' Bill Gates Is flying dangerous? How much do the world's cows weigh? And what makes people happy? From earth's nations and inhabitants, through the fuels and foods that energize them, to the transportation and inventions of our modern world - and how all of this affects the planet itself - in Numbers Don't Lie, Professor Vaclav Smil takes us on a fact-finding adventure, using surprising statistics and illuminating graphs to challenge lazy thinking. Packed with 'Well-I-never-knew-that' information and with fascinating and unusual examples throughout, we find out how many people it took to build the Great Pyramid, that vaccination yields the best return on investment, and why electric cars aren't as great as we think (yet). There's a wonderful mix of science, history and wit, all in bite-sized chapters on a broad range of topics. Urgent and essential, Numbers Don't Lie inspires readers to interrogate what they take to be true in these significant times. Smil is on a mission to make facts matter, because after all, numbers may not lie, but which truth do they convey? 'The best book to read to better understand our world. Once in a while a book comes along that helps us see our planet more clearly. By showing us numbers about science, health, green technology and more, Smil's book does just that. It should be on every bookshelf!' Linda Yueh, author of The Great Economists 'He is rigorously numeric, using data to illuminate every topic he writes about. The word \"polymath\" was invented to describe people like him' Bill Gates 'Important' Mark Zuckerberg, on Energy 'One of the world's foremost thinkers on development history and a master of statistical analysis . . . The nerd's nerd' Guardian 'There is perhaps no other academic who paints pictures with numbers like Smil' Guardian 'In a world of specialized intellectuals, Smil is an ambitious and astonishing polymath who swings for fences . . . They're among the most data-heavy books you'll find, with a remarkable way of framing basic facts' Wired 'He's a slayer of bullshit' David Keith, Gordon McKay Professor of Applied Physics & Professor of Public Policy, Harvard University Vaclav Smil is Distinguished Professor Emeritus at the University of Manitoba. He is the author of over forty books on topics including energy, environmental and population change, food production and nutrition, technical innovation, risk assessment and public policy. No other living scientist has had more books (on a wide variety of topics) reviewed in Nature. A Fellow of the Royal Society of Canada, in 2010 he was named by Foreign Policy as one of the Top 100 Global Thinkers. This is his first book for a more general readership.",
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckmauizpu25391ija0r096nwa",
        slug: "the-rosie-effect-fj3fy",
        title: "The Rosie Effect",
        description:
          '"The highly anticipated sequel to the New York Times bestselling novel The Rosie Project, starring the same extraordinary couple now living in New York and unexpectedly expecting their first child. Get ready to fall in love all over again. Don Tillman and Rosie Jarman are back. The Wife Project is complete, and Don and Rosie are happily married and living in New York. But they\'re about to face a new challenge because-- surprise!--Rosie is pregnant. Don sets about learning the protocols of becoming a father, but his unusual research style gets him into trouble with the law. Fortunately his best friend Gene is on hand to offer advice: he\'s left Claudia and moved in with Don and Rosie. As Don tries to schedule time for pregnancy research, getting Gene and Claudia to reconcile, servicing the industrial refrigeration unit that occupies half his apartment, helping Dave the Baseball Fan save his business, and staying on the right side of Lydia the social worker, he almost misses the biggest problem of all: he might lose Rosie when she needs him the most. Graeme Simsion first introduced these unforgettable characters in The Rosie Project, which NPR called "sparkling entertainment along the lines of Where\'d You Go Bernadette and When Harry Met Sally." The SanFrancisco Chronicle said, "sometimes you just need a smart love story that will make anyone, man or woman, laugh out loud." If you were swept away by the book that\'s captivated a million readers worldwide, you will love The Rosie Effect"--',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckpqgdtjq215211givpxim6swo",
        slug: "the-code-breaker-998u9",
        title: "The Code Breaker",
        description:
          '"A gripping account of how the pioneering scientist Jennifer Doudna, along with her colleagues and rivals, launched a revolution that will allow us to cure diseases, fend off viruses, and enhance our children"--',
      },
    },
    {
      status: ReadingStatus.Finished,
      book: {
        id: "ckebdq1nj0066bh0y2udulxyt",
        slug: "matthew-walker-why-we-sleep-0vlj1",
        title: "Why We Sleep",
        description:
          '"Sleep is one of the most important but least understood aspects of our life, wellness, and longevity ... An explosion of scientific discoveries in the last twenty years has shed new light on this fundamental aspect of our lives. Now ... neuroscientist and sleep expert Matthew Walker gives us a new understanding of the vital importance of sleep and dreaming"--Amazon.com.',
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckrdhbphg099401suhmae1iu9",
        slug: "anne-lamottoperating-instructions-clbrx",
        title: "Operating instructions",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckrp991te2566251czql8uzdjwu",
        slug: "home-game-an-accidental-guide-to-fatherhood-lby2w",
        title: "Home Game: An Accidental Guide to Fatherhood",
        description:
          "An unsparing observation about the disparity between social expectation and the actual experiences of new fathers shares stories from the author's life after the births of his three children.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cksy021dg1090571j8gfwvp68xj",
        slug: "what-to-expect-the-first-year-1ijwo",
        title: "What to Expect the First Year",
        description:
          "Describes each stage of child development, answers questions about child care, and includes information on common childhood ailments.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckrdi3izs0jqy01sugybc244r",
        slug: "heidi-murkoffwhat-to-expect-when-you-re-expecting-gb6ly",
        title: "What to expect when you're expecting",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "clivycfm72458810hpsd1y6s0pe",
        slug: "walter-isaacson-elon-musk-y6ocw",
        title: "Elon Musk",
        description:
          "From the author of Steve Jobs and other bestselling biographies, this is the astonishingly intimate story of the most fascinating and controversial innovator of our era—a rule-breaking visionary who helped to lead the world into the era of electric vehicles, private space exploration, and artificial intelligence. Oh, and took over Twitter. When Elon Musk was a kid in South Africa, he was regularly beaten by bullies. One day a group pushed him down some concrete steps and kicked him until his face was a swollen ball of flesh. He was in the hospital for a week. But the physical scars were minor compared to the emotional ones inflicted by his father, an engineer, rogue, and charismatic fantasist. His father’s impact on his psyche would linger. He developed into a tough yet vulnerable man-child, prone to abrupt Jekyll-and-Hyde mood swings, with an exceedingly high tolerance for risk, a craving for drama, an epic sense of mission, and a maniacal intensity that was callous and at times destructive. At the beginning of 2022—after a year marked by SpaceX launching thirty-one rockets into orbit, Tesla selling a million cars, and him becoming the richest man on earth—Musk spoke ruefully about his compulsion to stir up dramas. “I need to shift my mindset away from being in crisis mode, which it has been for about fourteen years now, or arguably most of my life,” he said. It was a wistful comment, not a New Year’s resolution. Even as he said it, he was secretly buying up shares of Twitter, the world’s ultimate playground. Over the years, whenever he was in a dark place, his mind went back to being bullied on the playground. Now he had the chance to own the playground. For two years, Isaacson shadowed Musk, attended his meetings, walked his factories with him, and spent hours interviewing him, his family, friends, coworkers, and adversaries. The result is the revealing inside story, filled with amazing tales of triumphs and turmoil, that addresses the question: are the demons that drive Musk also what it takes to drive innovation and progress?",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckkyfiysw98941i99de6mnjnp",
        slug: "the-overstory-h9wd1",
        title: "The Overstory",
        description:
          "The Overstory, winner of the 2019 Pulitzer Prize in Fiction, is a sweeping, impassioned work of activism and resistance that is also a stunning evocation of--and paean to--the natural world. From the roots to the crown and back to the seeds, Richard Powers's twelfth novel unfolds in concentric rings of interlocking fables that range from antebellum New York to the late twentieth-century Timber Wars of the Pacific Northwest and beyond. There is a world alongside ours--vast, slow, interconnected, resourceful, magnificently inventive, and almost invisible to us. This is the story of a handful of people who learn how to see that world and who are drawn up into its unfolding catastrophe.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "clmbd21fi3344540iih6lnwer3u",
        slug: "adam-grant-hidden-potential-ay82n",
        title: "Hidden Potential",
        description:
          "“This brilliant book will shatter your assumptions about what it takes to improve and succeed. I wish I could go back in time and gift it to my younger self. It would’ve helped me find a more joyful path to progress.” —Serena Williams, 23-time Grand Slam singles tennis champion The #1 New York Times bestselling author of Think Again illuminates how we can elevate ourselves and others to unexpected heights. We live in a world that’s obsessed with talent. We celebrate gifted students in school, natural athletes in sports, and child prodigies in music. But admiring people who start out with innate advantages leads us to overlook the distance we ourselves can travel. We underestimate the range of skills that we can learn and how good we can become. We can all improve at improving. And when opportunity doesn’t knock, there are ways to build a door. Hidden Potential offers a new framework for raising aspirations and exceeding expectations. Adam Grant weaves together groundbreaking evidence, surprising insights, and vivid storytelling that takes us from the classroom to the boardroom, the playground to the Olympics, and underground to outer space. He shows that progress depends less on how hard you work than how well you learn. Growth is not about the genius you possess—it’s about the character you develop. Grant explores how to build the character skills and motivational structures to realize our own potential, and how to design systems that create opportunities for those who have been underrated and overlooked. Many writers have chronicled the habits of superstars who accomplish great things. This book reveals how anyone can rise to achieve greater things. The true measure of your potential is not the height of the peak you’ve reached, but how far you’ve climbed to get there.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckhchz7bo10620z3aco9cwiho",
        slug: "the-black-swan-mg7ze",
        title: "The Black Swan",
        description:
          "In the author's point of view, a black swan is an improbable event with three principal characteristics - It is unpredictable; it carries a massive impact; and, after the fact, we concoct an explanation that makes it appear less random, and more predictable, than it was. Why do we not acknowledge the phenomenon of black swans until after they occur? Part of the answer, according to Taleb, is that humans are hardwired to learn specifics when they should be focused on generalities. We concentrate on things we already know and time and time again fail to take into consideration what we don't know. We are, therefore, unable to truly estimate opportunities, too vulnerable to the impulse to simplify, narrate, and categorize, and not open enough to rewarding those who can imagine the 'impossible'.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl0vsnuoi13140070ig6gu1q0313",
        slug: "matthew-perry-untitled-flatiron-nonfiction-november-2022-9781250866448-2fc7j",
        title: "Friends, Lovers, and the Big Terrible Thing",
        description:
          "The beloved star of Friends takes us behind the scenes of the hit sitcom and his struggles with addiction in this candid, funny, and revelatory memoir that delivers a powerful message of hope and persistence.\n\n“Hi, my name is Matthew, although you may know me by another name. My friends call me Matty. And I should be dead.”\n\nSo begins the riveting story of acclaimed actor Matthew Perry, taking us along on his journey from childhood ambition to fame to addiction and recovery in the aftermath of a life-threatening health scare. Before the frequent hospital visits and stints in rehab, there was five-year-old Matthew, who traveled from Montreal to Los Angeles, shuffling between his separated parents; fourteen-year-old Matthew, who was a nationally ranked tennis star in Canada; twenty-four-year-old Matthew, who nabbed a coveted role as a lead cast member on the talked-about pilot then called Friends Like Us. . . and so much more.\n\nIn an extraordinary story that only he could tell—and in the heartfelt, hilarious, and warmly familiar way only he could tell it—Matthew Perry lays bare the fractured family that raised him (and also left him to his own devices), the desire for recognition that drove him to fame, and the void inside him that could not be filled even by his greatest dreams coming true. But he also details the peace he’s found in sobriety and how he feels about the ubiquity of Friends, sharing stories about his castmates and other stars he met along the way. Frank, self-aware, and with his trademark humor, Perry vividly depicts his lifelong battle with addiction and what fueled it despite seemingly having it all. \n\nFriends, Lovers, and the Big Terrible Thing is an unforgettable memoir that is both intimate and eye-opening—as well as a hand extended to anyone struggling with sobriety. Unflinchingly honest, moving, and uproariously funny, this is the book fans have been waiting for.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckrampk3o1310821jb2t1f2wjri",
        slug: "the-premonition-82iev",
        title: "The Premonition",
        description:
          "For those who could read between the lines, the censored news out of China was terrifying. But the president insisted there was nothing to worry about.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cktjnw3861007700a57alh51zb9s",
        slug: "howard-gardner-out-of-print-frames-of-mind-6odxb",
        title: "Frames Of Mind",
        description:
          "A revolutionary challenge to the widely held notion that intelligence is a single general capacity possessed by every individual to a greater or lesser extent.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "clgh0wdy810280150he3w932vxmq",
        slug: "roy-a-meals-muscle-1kv8k",
        title: "Muscle",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckng787ci503211i9sduodnlrq",
        slug: "the-enemy-7i78i",
        title: "The Enemy",
        description:
          "Former army cop Jack Reacher finds himself questioning the instincts that made him an elite soldier when his latest case forces him to choose between obeying the law and becoming a renegade. By the author of Persuader. Reissue.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckgeacsx1303500zb8b1dlswho",
        slug: "ai-superpowers-k1vjb",
        title: "AI Superpowers",
        description:
          "Introduction -- China's Sputnik moment -- Copycats in the Coliseum -- China's alternate Internet universe -- A tale of two countries -- The four waves of AI -- Utopia, dystopia, and the real AI crisis -- The wisdom of cancer -- A blueprint for human co-existence with AI -- Our global AI story",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "clsl1b19p352480hvkl9z5qtgk",
        slug: "pulak-prasad-what-i-learned-about-investing-from-darwin-qw2fz",
        title: "What I Learned About Investing from Darwin",
        description:
          "The investment profession is in a state of crisis. The vast majority of equity fund managers are unable to beat the market over the long term, which has led to massive outflows from active funds to passive funds. Where should investors turn in search of a new approach? Pulak Prasad offers a philosophy of patient long-term investing based on an unexpected source: evolutionary biology. He draws key lessons from core Darwinian concepts, mixing vivid examples from the natural world with compelling stories of good and bad investing decisions—including his own. How can bumblebees’ survival strategies help us accept that we might miss out on Tesla? What does an experiment in breeding tame foxes reveal about the traits of successful businesses? Why might a small frog’s mimicry of the croak of a larger rival shed light on the signs of corporate dishonesty? Informed by successful evolutionary strategies, Prasad outlines his counterintuitive principles for long-term gain. He provides three mantras of investing: Avoid big risks; buy high quality at a fair price; and don’t be lazy—be very lazy. Prasad makes a persuasive case for a strategy that rules out the vast majority of investment opportunities and advocates permanently owning high-quality businesses. Combining punchy prose and practical insight, What I Learned About Investing from Darwin reveals why evolutionary biology can help fund managers become better at their craft.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl8kh3ei91158040ieuavbhjamz",
        slug: "j-d-salinger-the-catcher-in-the-rye-fh59d",
        title: "The catcher in the rye",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckpqo04e9260711givto7mjo73",
        slug: "anomaly-i9iig",
        title: "Anomaly",
        description:
          "Anomaly examines the prospect of an alien intelligence discovering life on Earth. The technological gulf between mankind and the alien species is measured in terms of millions of years. The only way to communicate is using science, but not everyone is so patient. Mankind's first contact with an alien intelligence is far more radical than anyone has ever dared imagine. With a technological gap of millions of years, mankind is barely able to recognise the arrival of an alien space craft outside the gates of the United Nations in New York. Thank you for supporting independent writing.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckhdjxsin45931llge871ugxf",
        slug: "shoe-dog-iraoz",
        title: "Shoe Dog",
        description:
          "In this candid and riveting memoir, for the first time ever, Nike founder and CEO Phil Knight shares the inside story of the company’s early days as an intrepid start-up and its evolution into one of the world’s most iconic, game-changing, and profitable brands. In 1962, fresh out of business school, Phil Knight borrowed $50 from his father and created a company with a simple mission: import high-quality, low-cost athletic shoes from Japan. Selling the shoes from the trunk of his lime green Plymouth Valiant, Knight grossed $8,000 his first year. Today, Nike’s annual sales top $30 billion. In an age of startups, Nike is the ne plus ultra of all startups, and the swoosh has become a revolutionary, globe-spanning icon, one of the most ubiquitous and recognizable symbols in the world today. But Knight, the man behind the swoosh, has always remained a mystery. Now, for the first time, in a memoir that is candid, humble, gutsy, and wry, he tells his story, beginning with his crossroads moment. At 24, after backpacking around the world, he decided to take the unconventional path, to start his own business—a business that would be dynamic, different. Knight details the many risks and daunting setbacks that stood between him and his dream—along with his early triumphs. Above all, he recalls the formative relationships with his first partners and employees, a ragtag group of misfits and seekers who became a tight-knit band of brothers. Together, harnessing the transcendent power of a shared mission, and a deep belief in the spirit of sport, they built a brand that changed everything.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cluqm70bc14552290hab78s8sawt",
        slug: "michael-sheridan-gate-to-china-w17o0",
        title: "Gate to China",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl6pw1zfz15453570hdmls4126y8",
        slug: "dipo-faloyin-africa-is-not-a-country-ddi3n",
        title: "Africa Is Not a Country",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl15jribd2600750hfbyrudyqjz",
        slug: "howard-w-french-born-in-blackness-5uafx",
        title: "Born in Blackness",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cltbxpufw9773060habj0yakq7q",
        slug: "owen-matthews-overreach-zjhhh",
        title: "Overreach",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl66ypfmq11401250ib7ovjzz41v",
        slug: "greta-thunberg-the-climate-book-cuv7q",
        title: "The Climate Book",
        description:
          "Greta Thunberg’s speeches shook the world. With The Climate Book, she has created an essential tool for everyone who wants to help save it. It seems like an impossible task: secure a safe future for life on Earth, at a scale and speed that the world has never seen, in the face of vast and powerful forces—not just oil tycoons and governments, but the changing climate system itself. The odds are against us, and we are running out of time. But it doesn’t have to be this way. Around the world, geophysicists and mathematicians, oceanographers and meteorologists, engineers, economists, psychologists and philosophers have been using their expertise to develop a deep understanding of the crises we face. Greta Thunberg has created The Climate Book in partnership with over one hundred of these experts in order to equip us all with this knowledge. Alongside them, Greta shares her own stories of learning, demonstrating, and uncovering greenwashing around the world, revealing the extent to which we have been kept in the dark. This is one of our biggest problems, she shows, but also our greatest source of hope. Once we are given the full picture, we will be able to act—and if a schoolchild’s strike could ignite a global protest, what could we do collectively if we tried? The Climate Book shows that we all have the responsibility of being alive at the most decisive time in the history of humanity, and that, together, we can do the seemingly impossible. But it has to be us, and it has to be now.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl6ud1ozb9317200hi2bsoji2aa",
        slug: "nana-kwame-adjei-brenyah-chain-gang-all-stars-yc482",
        title: "Chain-Gang All-Stars",
        description:
          "The explosive, hotly-anticipated debut novel from the New York Times-bestselling author of Friday Black, about two top women gladiators fighting for their freedom within a depraved private prison system not so far-removed from America's own. Loretta Thurwar and Hamara \"Hurricane Staxxx\" Stacker are the stars of Chain-Gang All-Stars, the cornerstone of CAPE, or Criminal Action Penal Entertainment, a highly-popular, highly-controversial, profit-raising program in America's increasingly dominant private prison industry. It's the return of the gladiators and prisoners are competing for the ultimate prize: their freedom. In CAPE, prisoners travel as Links in Chain-Gangs, competing in death-matches for packed arenas with righteous protestors at the gates. Thurwar and Staxxx, both teammates and lovers, are the fan favorites. And if all goes well, Thurwar will be free in just a few matches, a fact she carries as heavily as her lethal hammer. As she prepares to leave her fellow Links, she considers how she might help preserve their humanity, in defiance of these so-called games, but CAPE's corporate owners will stop at nothing to protect their status quo and the obstacles they lay in Thurwar's path have devastating consequences. Moving from the Links in the field to the protestors to the CAPE employees and beyond, Chain-Gang All-Stars is a kaleidoscopic, excoriating look at the American prison system's unholy alliance of systemic racism, unchecked capitalism, and mass incarceration, and a clear-eyed reckoning with what freedom in this country really means from a \"new and necessary American voice\" (Tommy Orange, The New York Times Book Review).",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "clcxd3ibj6644400hbmxv4b9unf",
        slug: "michael-malice-the-white-pill-g297g",
        title: "The White Pill",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckgead5kd308620zb8lddi4mtb",
        slug: "our-final-warning-six-degrees-of-climate-emergency-bwqfn",
        title: "Our Final Warning: Six Degrees of Climate Emergency",
        description:
          "This book must not be ignored. It really is our final warning. Mark Lynas delivers a vital account of the future of our earth, and our civilisation, if current rates of global warming persist. And it’s only looking worse.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckrkpdkf7106276183s9sb8j0nf",
        slug: "how-we-learn-nx3q2",
        title: "How We Learn",
        description:
          '"In today\'s technological society, with an unprecedented amount of information at our fingertips, learning plays a more central role than ever. In How We Learn, Stanislas Dehaene decodes its biological mechanisms, delving into the neuronal, synaptic, and molecular processes taking place in the brain. He explains why youth is such a sensitive period, during which brain plasticity is maximal, but also assures us that our abilities continue into adulthood, and that we can enhance our learning and memory at any age. We can all "learn to learn" by taking maximal advantage of the four pillars of the brain\'s learning algorithm: attention, active engagement, error feedback, and consolidation. The human brain is an extraordinary machine. Its ability to process information and adapt to circumstances by reprogramming itself is unparalleled, and it remains the best source of inspiration for recent developments in artificial intelligence. The exciting advancements in A.I. of the last twenty years reveal just as much about our remarkable abilities as they do about the potential of machines. How We Learn finds the boundary of computer science, neurobiology, and cognitive psychology to explain how learning really works and how to make the best use of the brain\'s learning algorithms, in our schools and universities as well as in everyday life"--',
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cktjxeela9846m97asvmu715n",
        slug: "steven-farmer-strange-chemistry-7mlb1",
        title: "Strange Chemistry",
        description:
          "This book opens the audience’s eyes to the extraordinary scientific secrets hiding in everyday objects. Helping readers increase chemistry knowledge in a fun and entertaining way, the book is perfect as a supplementary textbook or gift to curious professionals and novices. • Appeals to a modern audience of science lovers by discussing multiple examples of chemistry in everyday life • Addresses compounds that affect everyone in one way or another: poisons, pharmaceuticals, foods, and illicit drugs; thereby evoking a powerful emotional response which increases interest in the topic at hand • Focuses on edgy types of stories that chemists generally tend to avoid so as not to paint chemistry in a bad light; however, these are the stories that people find interesting • Provides detailed and sophisticated stories that increase the reader’s fundamental scientific knowledge • Discusses complex topics in an engaging and accessible manner, providing the “how” and “why” that takes readers deeper into the stories",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cket3fer710009jm0yehxy1jo2",
        slug: "tara-westover-educated-zf8vm",
        title: "Educated",
        description:
          "Tara Westover was seventeen the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her “head-for-the-hills” bag. In the summer she stewed herbs for her mother, a midwife and healer, and in the winter she salvaged metal in her father’s junkyard.\n\nHer father distrusted the medical establishment, so Tara never saw a doctor or nurse. Gashes and concussions, even burns from explosions, were all treated at home with herbalism. The family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when an older brother became violent.\n\nWhen another brother got himself into college and came back with news of the world beyond the mountain, Tara decided to try a new kind of life. She taught herself enough mathematics, grammar, and science to take the ACT and was admitted to Brigham Young University. There, she studied psychology, politics, philosophy, and history, learning for the first time about pivotal world events like the Holocaust and the Civil Rights Movement. Her quest for knowledge transformed her, taking her over oceans and across continents, to Harvard and to Cambridge University. Only then would she wonder if she’d traveled too far, if there was still a way home.\n\nEducated is an account of the struggle for self-invention. It is a tale of fierce family loyalty, and of the grief that comes from severing one’s closest ties. With the acute insight that distinguishes all great writers, Westover has crafted a universal coming-of-age story that gets to the heart of what an education is and what it offers: the perspective to see one’s life through new eyes, and the will to change it.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cksx994c8812226e8g8ukv6l1c",
        slug: "the-once-and-future-world-zh19n",
        title: "The Once and Future World",
        description:
          "A look at how the natural world has changed because of the impact of humans and what we should be doing to help restore it for future generations.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckr1swvoj0ut201crhce5m4hg",
        slug: "malcolm-gladwelloutliers-k1ovf",
        title: "Outliers",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckrmla1i241502178fls888i24",
        slug: "crying-in-h-mart-ww645",
        title: "Crying in H Mart",
        description:
          "An unflinching, powerful memoir about growing up Korean American, losing her mother, and forging her own identity.\n\nIn this exquisite story of family, food, grief, and endurance, Michelle Zauner proves herself far more than a dazzling singer, songwriter, and guitarist. With humor and heart, she tells of growing up one of the few Asian American kids at her school in Eugene, Oregon; of struggling with her mother's particular, high expectations of her; of a painful adolescence; of treasured months spent in her grandmother's tiny apartment in Seoul, where she and her mother would bond, late at night, over heaping plates of food.\n\nAs she grew up, moving to the East Coast for college, finding work in the restaurant industry, and performing gigs with her fledgling band--and meeting the man who would become her husband--her Koreanness began to feel ever more distant, even as she found the life she wanted to live. It was her mother's diagnosis of terminal cancer, when Michelle was twenty-five, that forced a reckoning with her identity and brought her to reclaim the gifts of taste, language, and history her mother had given her.\n\nVivacious and plainspoken, lyrical and honest, Zauner's voice is as radiantly alive on the page as it is onstage. Rich with intimate anecdotes that will resonate widely, and complete with family photos, Crying in H Mart is a book to cherish, share, and reread.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cla49ryu51113540hd6qukzjs5q",
        slug: "stieg-larsson-the-girl-with-the-dragon-tattoo-uego5",
        title: "The Girl with the Dragon Tattoo",
        description:
          "Journalist Mikael Blomkvist and hacker Lisbeth Salander investigate the disappearance of Harriet Vanger which took place forty years ago.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckx9zb07d1925750ivpsf2t8dp7",
        slug: "lydia-kang-nate-pedersen-patient-zero-5abdg",
        title: "Patient Zero",
        description:
          "A very timely history of disease outbreaks, from the authors of Quackery: stories of outbreaks (and their patient zeros), plus chapters on the science, culture, and cures for different types of epidemics and pandemics. Popular reading on a timely topic.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl7lp93t515199520ijero1a6dai",
        slug: "nick-lane-transformer-the-deep-chemistry-of-life-and-death-8c4cj",
        title: "Transformer - the Deep Chemistry of Life and Death",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "clce296388469970huqwqduw4wu",
        slug: "daron-acemoglu-simon-johnson-power-and-progress-6bccz",
        title: "Power and Progress",
        description:
          "Two bestselling authors overturn conventional wisdom about how economies work--revealing the untold story of who wins and who loses the rewards of prosperity--in a work that fundamentally transforms how we look at and understand the world. Throughout history, technological change — whether it takes the form of agricultural improvements in the Middle Ages, the Industrial Revolution, or today’s artificial intelligence — has been viewed as a main driver of prosperity, working in the public interest. The reality, though, is that technology is shaped by what powerful people want and believe, generating riches, social respect, cultural prominence, and further political voice for those already powerful. For most of the rest of us, there is the illusion of progress. Daron Acemoglu (Why Nations Fail) and Simon Johnson (13 Bankers) debunk modern techno-optimism through a dazzling, original account of how technological choices have changed the course of history. From vivid stories of how the economic surplus of the Middle Ages was appropriated by an ecclesiastical elite to build cathedrals while the peasants starved, to the making of vast fortunes from digital technologies today as millions are pushed towards poverty, we see how the path of technology is determined and who influences its trajectory. To achieve the true potential of innovation, we need to ensure technology is creating new jobs and opportunities rather than marginalizing most people, through automated work and political passivity. We need to use the tremendous digital advances of the last half century to create useful and empowering tools, and seize back control from a small elite of hubristic, messianic tech leaders pursuing their own interests. With their breakthrough economic theory and manifesto for building a better society, Acemoglu and Johnson provide the understanding and vision to reimagine and reshape the path of technology and create true shared prosperity.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckr1q0pcp004m01crnqap3uej",
        slug: "nineteen-eighty-four-3r5eu",
        title: "Nineteen eighty-four",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cks6iz33z10802914r7cywpf2u7",
        slug: "burnings-h2qdd",
        title: "Burnings",
        description:
          'Poetry. Asian American Studies. LGBT Studies. The poems of BURNINGS explore refugee culture, be the speaker a literal refugee from a torn homeland, or a refugee from his own skin, burning with the heat of awakening eroticism. In this world, we\'re all refugees from something. As two-time National Slam Champion Roger Bonair-Agard says: "Ocean manages to imbue the desperation of his being alive—with a savage beauty. It is not just that Ocean can render pain as a kind of loveliness, but that his poetic line will not let you forget the hurt or the garish brilliance of your triumph; will not let you look away. These poems shatter us detail by detail because Ocean leaves nothing unturned, because every lived thing in his poems demands to be fed by you; to nourish you in turn. You will not leave these poems dissatisfied. They will fill you utterly."',
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl6pw6x9916153560hdmkh0hzi2z",
        slug: "robert-jensen-wes-jackson-inconvenient-apocalypse-h59rl",
        title: "Inconvenient Apocalypse",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "clkqg2rny10954160hhuhap4wo33",
        slug: "robin-dunbar-how-religion-evolved-w9fcy",
        title: "How Religion Evolved",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckv5utpo9598362rd8boirszi0b",
        slug: "philipp-dettmer-immune-4vn22",
        title: "Immune",
        description:
          "Second only to the human brain in its complexity, the human immune system is one of the oldest and most critical facets of life on Earth. Philipp Dettmer takes readers on a journey through the fortress of the human body and its defenses. Each chapter - with engaging full-colour graphics and immersive descriptions - delves into an element of the immune system, including defenses like antibodies and inflammation as well as threats like bacteria, allergies and cancer. Print run 75,000.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl12f6rzl2384480irjwamvefcw",
        slug: "sabine-hossenfelder-existential-physics-2pmgk",
        title: "Existential Physics",
        description:
          "A contrarian scientist wrestles with the big questions that modern physics raises, and what physics says about the human condition Not only can we not currently explain the origin of the universe, it is questionable we will ever be able to explain it. The notion that there are universes within particles, or that particles are conscious, is ascientific, as is the hypothesis that our universe is a computer simulation. On the other hand, the idea that the universe itself is conscious is difficult to rule out entirely. According to Sabine Hossenfelder, it is not a coincidence that quantum entanglement and vacuum energy have become the go-to explanations of alternative healers, or that people believe their deceased grandmother is still alive because of quantum mechanics. Science and religion have the same roots, and they still tackle some of the same questions: Where do we come from? Where do we go to? How much can we know? The area of science that is closest to answering these questions is physics. Over the last century, physicists have learned a lot about which spiritual ideas are still compatible with the laws of nature. Not always, though, have they stayed on the scientific side of the debate. In this lively, thought-provoking book, Hossenfelder takes on the biggest questions in physics: Does the past still exist? Do particles think? Was the universe made for us? Has physics ruled out free will? Will we ever have a theory of everything? She lays out how far physicists are on the way to answering these questions, where the current limits are, and what questions might well remain unanswerable forever. Her book offers a no-nonsense yet entertaining take on some of the toughest riddles in existence, and will give the reader a solid grasp on what we know—and what we don’t know.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckz600v0n640030is0el1n2qnz",
        slug: "ezekiel-j-emanuel-which-country-has-the-worlds-best-health-care-2zeul",
        title: "Which Country Has the World's Best Health Care?",
        description:
          "The preeminent doctor and bioethicist Ezekiel Emanuel is repeatedly asked one question: Which country has the best healthcare? He set off to find an answer. The US spends more than any other nation, nearly $4 trillion, on healthcare. Yet, for all that expense, the US is not ranked #1 -- not even close. In Which Country Has the World's Best Healthcare? Ezekiel Emanuel profiles eleven of the world's healthcare systems in pursuit of the best or at least where excellence can be found. Using a unique comparative structure, the book allows healthcare professionals, patients, and policymakers alike to know which systems perform well, and why, and which face endemic problems. From Taiwan to Germany, Australia to Switzerland, the most inventive healthcare providers tackle a global set of challenges -- in pursuit of the best healthcare in the world.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cks8y3k7a10311781k98w9pyrh9i",
        slug: "the-new-map-38jd2",
        title: "The New Map",
        description:
          "The 'shale revolution' in oil and gas made possible by fracking technology, but not without controversy, has transformed the American economy, giving the United States unprecedented leverage in the world while putting an end to the 'era of shortage'. Almost overnight, and without many Americans realising it, the United States has become the world's number one energy powerhouse. Yergin brilliantly reveals and explains the 'new map' to show the great energy and geopolitical transformations looming for Americans and the world -- at the very moment they influence the 2020 U.S. presidential election.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckq0rfiz805741ril43v6losq",
        slug: "under-a-white-sky-kx1kf",
        title: "Under a White Sky",
        description:
          'The Pulitzer Prize-winning author of The Sixth Extinction returns to humanity\'s transformative impact on the environment, now asking: After doing so much damage, can we change nature, this time to save it? "A superb and honest reflection of our extraordinary time."--Nature That man should have dominion "over all the earth, and over every creeping thing that creepeth upon the earth" is a prophecy that has hardened into fact. So pervasive are human impacts on the planet that it\'s said we live in a new geological epoch: the Anthropocene. In Under a White Sky, Elizabeth Kolbert takes a hard look at the new world we are creating. Along the way, she meets biologists who are trying to preserve the world\'s rarest fish, which lives in a single tiny pool in the middle of the Mojave; engineers who are turning carbon emissions to stone in Iceland; Australian researchers who are trying to develop a super coral that can survive on a hotter globe; and physicists who are contemplating shooting tiny diamonds into the stratosphere to cool the earth. One way to look at human civilization, says Kolbert, is as a ten-thousand-year exercise in defying nature. In The Sixth Extinction, she explored the ways in which our capacity for destruction has reshaped the natural world. Now she examines how the very sorts of interventions that have imperiled our planet are increasingly seen as the only hope for its salvation. By turns inspiring, terrifying, and darkly comic, Under a White Sky is an utterly original examination of the challenges we face.',
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckptkhjzc3145831i4thiqjncn4",
        slug: "an-elegant-defense-dikeh",
        title: "An Elegant Defense",
        description:
          "National Bestseller “One of those rare nonfiction books that transcends the genre. ... Extraordinary.” —Douglas Preston, New York Times bestselling author of The Lost City of the Monkey God A grand tour of the human immune system and the secrets of health, by the Pulitzer Prize–winning New York Times journalist A terminal cancer patient rises from the grave. A medical marvel defies HIV. Two women with autoimmunity discover their own bodies have turned against them. Matt Richtel's An Elegant Defense uniquely entwines these intimate stories with science’s centuries-long quest to unlock the mysteries of sickness and health, and illuminates the immune system as never before. The immune system is our body’s essential defense network, a guardian vigilantly fighting illness, healing wounds, maintaining order and balance, and keeping us alive. Its legion of microscopic foot soldiers—from T cells to “natural killers”—patrols our body, linked by a nearly instantaneous communications grid. It has been honed by evolution over millennia to face an almost infinite array of threats. For all its astonishing complexity, however, the immune system can be easily compromised by fatigue, stress, toxins, advanced age, and poor nutrition—hallmarks of modern life—and even by excessive hygiene. Paradoxically, it is a fragile wonder weapon that can turn on our own bodies with startling results, leading today to epidemic levels of autoimmune disorders. Richtel effortlessly guides readers on a scientific detective tale winding from the Black Plague to twentieth-century breakthroughs in vaccination and antibiotics, to the cutting-edge laboratories that are revolutionizing immunology—perhaps the most extraordinary and consequential medical story of our time. The foundation that Richtel builds makes accessible revelations about cancer immunotherapy, the microbiome, and autoimmune treatments that are changing millions of lives. An Elegant Defense also captures in vivid detail how these powerful therapies, along with our behavior and environment, interact with the immune system, often for the good but always on a razor’s edge that can throw this remarkable system out of balance. Drawing on his groundbreaking reporting for the New York Times and based on extensive new interviews with dozens of world-renowned scientists, Matt Richtel has produced a landmark book, equally an investigation into the deepest riddles of survival and a profoundly human tale that is movingly brought to life through the eyes of his four main characters, each of whom illuminates an essential facet of our “elegant defense.”",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cldqjr3wi14022210hhar6e1u0hg",
        slug: "nouriel-roubini-megathreats-n5r9e",
        title: "MegaThreats",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckgico0rg168250y8y38l1ubfe",
        slug: "the-etymologicon-r9ewu",
        title: "The Etymologicon",
        description:
          "THE SUNDAY TIMES NUMBER ONE BESTSELLER. 'Witty and erudite ... stuffed with the kind of arcane information that nobody strictly needs to know, but which is a pleasure to learn nonetheless.' Nick Duerden, Independent. 'Particularly good ... Forsyth takes words and draws us into their, and our, murky history.' William Leith, Evening Standard. The Etymologicon is an occasionally ribald, frequently witty and unerringly erudite guided tour of the secret labyrinth that lurks beneath the English language. What is the actual connection between disgruntled and gruntled? What links church organs to organised crime, California to the Caliphate, or brackets to codpieces? Mark Forsyth's riotous celebration of the idiosyncratic and sometimes absurd connections between words is a classic of its kind: a mine of fascinating information and a must-read for word-lovers everywhere. 'Highly recommended' Spectator.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cluqm765h14575010habe95m68rd",
        slug: "spencer-klavan-how-to-save-the-west-4gxcg",
        title: "How to Save the West",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckpr4mw2x28861gjyfj7tvihg",
        slug: "leonardo-da-vinci-u0w9m",
        title: "Leonardo Da Vinci",
        description:
          "\"He was history's most creative genius. What secrets can he teach us? The [bestselling biographer] brings Leonardo da Vinci to life in this exciting new biography. Drawing on thousands of pages from Leonardo's astonishing notebooks and new discoveries about his life and work, Walter Isaacson weaves a narrative that connects his art to his science. He shows how Leonardo's genius was based on skills we can improve in ourselves, such as passionate curiosity, careful observation, and an imagination so playful that it flirted with fantasy. His creativity, like that of other great innovators, came from standing at the intersection of the humanities and technology. He peeled flesh off the faces of cadavers, drew the muscles that move the lips, and then painted history's most memorable smile on the Mona Lisa. He explored the math of optics, showed how light rays strike the cornea, and produced illusions of changing perspectives in The Last Supper. Isaacson also describes how Leonardo's lifelong enthusiasm for staging theatrical productions informed his paintings and inventions. His ability to combine art and science, made iconic by his drawing of what may be himself inside a circle and a square, remains the enduring recipe for innovation. His life should remind us of the importance of instilling, both in ourselves and our children, not just received knowledge but a willingness to question it; to be imaginative and, like talented misfits and rebels in any era, to think different.\"--Jacket.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl5t22i246937080icd479qomfp",
        slug: "siddhartha-mukherjee-song-of-the-cell-jp7iy",
        title: "The Song of the Cell",
        description:
          "From the author of “The Emperor of All Maladies”, winner of the Pulitzer Prize, and The Gene, a #1 New York Times bestseller, comes his most spectacular book yet, an exploration of medicine and our radical new ability to manipulate cells. Rich with Mukherjee’s revelatory and exhilarating stories of scientists, doctors, and the patients whose lives may be saved by their work, “The Song of the Cell” is the third book in this extraordinary writer’s exploration of what it means to be human.\n\nMukherjee begins this magnificent story in the late 1600s, when a distinguished English polymath, Robert Hooke, and an eccentric Dutch cloth-merchant, Antonie van Leeuwenhoek looked down their handmade microscopes. What they saw introduced a radical concept that swept through biology and medicine, touching virtually every aspect of the two sciences, and altering both forever. It was the fact that complex living organisms are assemblages of tiny, self-contained, self-regulating units. Our organs, our physiology, our selves—hearts, blood, brains—are built from these compartments. Hooke christened them “cells”.\n\nThe discovery of cells—and the reframing of the human body as a cellular ecosystem—announced the birth of a new kind of medicine based on the therapeutic manipulations of cells. A hip fracture, a cardiac arrest, Alzheimer’s dementia, AIDS, pneumonia, lung cancer, kidney failure, arthritis, COVID pneumonia—all could be reconceived as the results of cells, or systems of cells, functioning abnormally. And all could be perceived as loci of cellular therapies.\n\nIn “The Song of the Cell”, Mukherjee tells the story of how scientists discovered cells, began to understand them, and are now using that knowledge to create new humans. He seduces you with writing so vivid, lucid, and suspenseful that complex science becomes thrilling. Told in six parts, laced with Mukherjee’s own experience as a researcher, a doctor, and a prolific reader, The Song of the Cell is both panoramic and intimate—a masterpiece.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckhdjxair26091llg3maog7m8",
        slug: "thinking-fast-and-slow-wwuk4",
        title: "Thinking, Fast and Slow",
        description:
          'A psychologist draws on years of research to introduce his "machinery of the mind" model on human decision making to reveal the faults and capabilities of intuitive versus logical thinking.',
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckp43dijj265061gjssp6gn9v4",
        slug: "think-again-xjd47",
        title: "Think Again",
        description:
          "Examines the critical art of rethinking: learning to question your beliefs and to know what you don't know, which can position you for success at work and happiness at home. It is a book about the benefit of doubt, and about how we can get better at embracing the unknown and the joy of being wrong",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckvfdsxnx10307691fsh8dotze4l",
        slug: "gabrielle-zevin-tomorrow-and-tomorrow-and-tomorrow-z6bkc",
        title: "Tomorrow, and Tomorrow, and Tomorrow",
        description:
          '"A modern love story about two childhood friends, Sam, raised by an actress mother in LA\'s Koreatown, and Sadie, from the wealthy Jewish enclave of Beverly Hills, who reunite as adults to create video games, finding an intimacy in digital worlds that eludes them in their real lives, from the New York Times best-selling author of The Storied Life of A.J. Fikry"--',
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckiuf846k041010kygj4og8ix",
        slug: "21-lessons-for-the-21st-century-vzjow",
        title: "21 Lessons for the 21st Century",
        description:
          "In Sapiens, he explored our past. In Homo Deus, he looked to our future. Now, one of the most innovative thinkers on the planet turns to the present to make sense of today's most pressing issues. How do computers and robots change the meaning of being human? How do we deal with the epidemic of fake news? Are nations and religions still relevant? What should we teach our children? Yuval Noah Harari's 21 Lessons for the 21st Century is a probing and visionary investigation into today's most urgent issues as we move into the uncharted territory of the future. As technology advances faster than our understanding of it, hacking becomes a tactic of war, and the world feels more polarized than ever, Harari addresses the challenge of navigating life in the face of constant and disorienting change and raises the important questions we need to ask ourselves in order to survive. In twenty-one accessible chapters that are both provocative and profound, Harari builds on the ideas explored in his previous books, untangling political, technological, social, and existential issues and offering advice on how to prepare for a very different future from the world we now live in: How can we retain freedom of choice when Big Data is watching us? What will the future workforce look like, and how should we ready ourselves for it? How should we deal with the threat of terrorism? Why is liberal democracy in crisis? Harari's unique ability to make sense of where we have come from and where we are going has captured the imaginations of millions of readers. Here he invites us to consider values, meaning, and personal engagement in a world full of noise and uncertainty. When we are deluged with irrelevant information, clarity is power. Presenting complex contemporary challenges clearly and accessibly, 21 Lessons for the 21st Century is essential reading.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cketre3ej30699jm0ydhd11wrq",
        slug: "james-clear-atomic-habits-q5py4",
        title: "Atomic Habits",
        description:
          "James Clear presents strategies to form good habits, break bad ones, and master the tiny behaviors that help lead to an improved life.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckrp90e9a1912251czqcbrb8rfd",
        slug: "the-drunken-botanist-k88au",
        title: "The Drunken Botanist",
        description:
          "The Essential, New York Times–Bestselling Guide to Botany and Booze “A book that makes familiar drinks seem new again . . . Through this horticultural lens, a mixed drink becomes a cornucopia of plants.”—NPR's Morning Edition “Amy Stewart has a way of making gardening seem exciting, even a little dangerous.” —The New York Times Sake began with a grain of rice. Scotch emerged from barley, tequila from agave, rum from sugarcane, bourbon from corn. Thirsty yet? In The Drunken Botanist, Amy Stewart explores the dizzying array of herbs, flowers, trees, fruits, and fungi that humans have, through ingenuity, inspiration, and sheer desperation, contrived to transform into alcohol over the centuries. Of all the extraordinary and obscure plants that have been fermented and distilled, a few are dangerous, some are downright bizarre, and one is as ancient as dinosaurs—but each represents a unique cultural contribution to our global drinking traditions and our history. This fascinating concoction of biology, chemistry, history, etymology, and mixology—with more than fifty drink recipes and growing tips for gardeners—will make you the most popular guest at any cocktail party.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckpoav8xa765191gmzswaywll3",
        slug: "interpreter-of-maladies-iican",
        title: "Interpreter of Maladies",
        description:
          "In nine stories imbued with the sensual details of Indian culture, Lahiri charts the emotional journeys of characters seeking love beyond the barriers of nations and generations.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cko9zs1tm51061i9vq9fkntli",
        slug: "breath-from-salt-gbb26",
        title: "Breath from Salt",
        description:
          "Recommended by Bill Gates and included in GatesNotes Longlisted for the PEN/E.O. Wilson Literary Science Writing Award \"Elaborating on the science as well as the business behind the fight against cystic fibrosis, Trivedi captures the emotions of the families, doctors, and scientists involved in the clinical trials and their 'weeping with joy' as new drugs are approved, and shows how cystic fibrosis, once a 'death sentence,' became, for many, a manageable condition. This is a rewarding and challenging work.\" —Publishers Weekly Cystic fibrosis was once a mysterious disease that killed infants and children. Now it could be the key to healing millions with genetic diseases of every type—from Alzheimer’s and Parkinson’s to diabetes and sickle cell anemia. In 1974, Joey O’Donnell was born with strange symptoms. His insatiable appetite, incessant vomiting, and a relentless cough—which shook his tiny, fragile body and made it difficult to draw breath—confounded doctors and caused his parents agonizing, sleepless nights. After six sickly months, his salty skin provided the critical clue: he was one of thousands of Americans with cystic fibrosis, an inherited lung disorder that would most likely kill him before his first birthday. The gene and mutation responsible for CF were found in 1989—discoveries that promised to lead to a cure for kids like Joey. But treatments unexpectedly failed and CF was deemed incurable. It was only after the Cystic Fibrosis Foundation, a grassroots organization founded by parents, formed an unprecedented partnership with a fledgling biotech company that transformative leaps in drug development were harnessed to produce groundbreaking new treatments: pills that could fix the crippled protein at the root of this deadly disease. From science writer Bijal P. Trivedi, Breath from Salt chronicles the riveting saga of cystic fibrosis, from its ancient origins to its identification in the dank autopsy room of a hospital basement, and from the CF gene’s celebrated status as one of the first human disease genes ever discovered to the groundbreaking targeted genetic therapies that now promise to cure it. Told from the perspectives of the patients, families, physicians, scientists, and philanthropists fighting on the front lines, Breath from Salt is a remarkable story of unlikely scientific and medical firsts, of setbacks and successes, and of people who refused to give up hope—and a fascinating peek into the future of genetics and medicine.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl026dws45404740iue4b9bmswi",
        slug: "david-ellis-look-closer-n1jhh",
        title: "Look Closer",
        description:
          "From the bestselling and award-winning author comes a wickedly clever and fast-paced novel of greed, revenge, obsession—and quite possibly the perfect murder. Simon and Vicky couldn’t seem more normal: a wealthy Chicago couple, he a respected law professor, she an advocate for domestic violence victims. A stable, if unexciting marriage. But one thing’s for sure … absolutely nothing is what it seems. The pair are far from normal, and one of them just may be a killer. When the body of a beautiful socialite is found hanging in a mansion in a nearby suburb, Simon and Vicky’s secrets begin to unravel. A secret whirlwind affair. A twenty-million-dollar trust fund about to come due. A decades-long grudge and obsession with revenge. These are just a few of the lies that make up the complex web...and they will have devastating consequences. And while both Vicky and Simon are liars, just who exactly is conning who? Part Gone Girl, part Strangers on a Train, Look Closer is a wild rollercoaster of a read that will have you questioning everything you think you know.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckrorz52c2016431eruyz5as4l4",
        slug: "i-see-satan-fall-like-lightning-wynw2",
        title: "I See Satan Fall Like Lightning",
        description:
          "The author of Violence and the Sacred looks at the gospels as a map of human behavior and sees striking parallels with modern human behavior. Original.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cl6w9ojak16228340ii22b42hpyu",
        slug: "i-live-here-rla3c",
        title: "I live here",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckp7mjs0s55011rl9nnpprh80",
        slug: "the-anthropocene-reviewed-signed-edition-v0hey",
        title: "The Anthropocene Reviewed (Signed Edition)",
        description:
          'The Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity. In this ... symphony of essays adapted and expanded from his ... podcast, bestselling author John Green reviews different facets of the human-centered planet on a five-star scale--from the QWERTY keyboard and sunsets to Canada geese and Penguins of Madagascar"',
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckrlmg1wr759751183sdwabwaqj",
        slug: "the-day-the-world-stops-shopping-fkhxf",
        title: "The Day the World Stops Shopping",
        description:
          "Consuming less is our best strategy for saving the planet--but can we do it? In this thoughtful and surprisingly optimistic book, journalist J. B. MacKinnon investigates how we may achieve a world without shopping. We can't stop shopping. And yet we must. This is the consumer dilemma. The economy says we must always consume more: even the slightest drop in spending leads to widespread unemployment, bankruptcy, and home foreclosure. The planet says we consume too much: in America, we burn the earth's resources at a rate five times faster than it can regenerate. And despite efforts to \"green\" our consumption--by recycling, increasing energy efficiency, or using solar power--we have yet to see a decline in global carbon emissions. Addressing this paradox head-on, acclaimed journalist J. B. MacKinnon asks, What would really happen if we simply stopped shopping? Is there a way to reduce our consumption to earth-saving levels without triggering economic collapse? At first this question took him around the world, seeking answers from America's big-box stores to the hunter-gatherer cultures of Namibia to communities in Ecuador that consume at an exactly sustainable rate. Then the thought experiment came shockingly true: the coronavirus brought shopping to a halt, and MacKinnon's ideas were tested in real time. Drawing from experts in fields ranging from climate change to economics, MacKinnon investigates how living with less would change our planet, our society, and ourselves. Along the way, he reveals just how much we stand to gain: An investment in our physical and emotional wellness. The pleasure of caring for our possessions. Closer relationships with our natural world and one another. Imaginative and inspiring, The Day the World Stops Shopping will embolden you to envision another way.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckrxui4g23618331798dh6x97xu",
        slug: "your-inner-fish-2c9if",
        title: "Your Inner Fish",
        description:
          "A fascinating chronicle of the evolution of humankind traces the genetic history of the organs of the human body, offering a revealing correlation between the distant past and present-day human anatomy and physiology, behavior, illness, and DNA. 50,000 first printing.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckhdifqx002040zkh0lj4ed2n",
        slug: "einstein-dei4n",
        title: "Einstein",
        description:
          "The first full biography of Albert Einstein since all of his papers have become available shows how his scientific imagination sprang from the rebellious nature of his personality. Biographer Isaacson explores how an imaginative, impertinent patent clerk-",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckps8nn1a56151gjy85ep463w",
        slug: "a-mind-for-numbers-aq3zu",
        title: "A Mind for Numbers",
        description:
          "An engineering professor who started out doing poorly in mathematical and technical subjects in school offers tools, tips and techniques to learning the creative and analytical thought processes that will lead to achievement in math and science. Original.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "clc7vty681773710hd0gglainxm",
        slug: "dina-nayeri-who-gets-believed-rqol8",
        title: "Who Gets Believed?",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckvln1ohv3359401i7d9gmbe0xx",
        slug: "vaclav-smil-how-the-world-really-works-xw1w3",
        title: "How the World Really Works",
        description: null,
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "ckhnaru1j13040znpp4lq6ayz",
        slug: "moonwalking-with-einstein-wgvud",
        title: "Moonwalking with Einstein",
        description:
          "Citing costly memory-related inconveniences suffered by average individuals, a science journalist chronicles his own struggles with chronic forgetfulness and his life-changing year in memory training, in a guide that shares historical lore and ancient memory techniques.",
      },
    },
    {
      status: ReadingStatus.WantsToRead,
      book: {
        id: "cketr9umq30121jm0yz45dfkvx",
        slug: "john-carreyrou-bad-blood-655j0",
        title: "Bad Blood",
        description:
          "NEW YORK TIMES BEST SELLER • NAMED ONE OF THE BEST BOOKS OF THE YEAR BY: NPR, The New York Times Book Review, Time, Wall Street Journal, Washington Post • The McKinsey Business Book of the Year The full inside story of the breathtaking rise and shocking collapse of Theranos, the one-time multibillion-dollar biotech startup founded by Elizabeth Holmes—now the subject of the HBO documentary The Inventor—by the prize-winning journalist who first broke the story and pursued it to the end. “The story is even crazier than I expected, and I found myself unable to put it down once I started. This book has everything: elaborate scams, corporate intrigue, magazine cover stories, ruined family relationships, and the demise of a company once valued at nearly $10 billion.” —Bill Gates In 2014, Theranos founder and CEO Elizabeth Holmes was widely seen as the female Steve Jobs: a brilliant Stanford dropout whose startup “unicorn” promised to revolutionize the medical industry with a machine that would make blood testing significantly faster and easier. Backed by investors such as Larry Ellison and Tim Draper, Theranos sold shares in a fundraising round that valued the company at more than $9 billion, putting Holmes’s worth at an estimated $4.7 billion. There was just one problem: The technology didn’t work. A riveting story of the biggest corporate fraud since Enron, a tale of ambition and hubris set amid the bold promises of Silicon Valley.",
      },
    },
  ],
};

const UserLogin = {
  login: {
    token: crypto.randomUUID(),
    email: "rohit.khanduri@proton.me",
    languages: ["en"],
    profile: {
      id: "cluqm5sdm6447490hwegbmbip3f",
      handle: "johnnydrama",
      name: "Rohit Khanduri",
      bio: "I’m a Mathematician interested in AI/ML, Software Architecture, Java, Python, and all things JS! I love to read, write, and code. In my free time, I write articles and review books that I've read, work on side projects, and contribute to open-source.",
      image:
        "https://assets.literal.club/user/avatar/cluqm66wj00sj0i36cb4o23ug.jpg",
    },
  },
};

const typeDefs = readFileSync("./graphql/schema.graphql", "utf8");

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers: Resolvers = {
  Query: {
    basics: () => RESUME.basics,
    work: () => RESUME.work,
    volunteer: () => RESUME.volunteer,
    education: () => RESUME.education,
    awards: () => RESUME.awards,
    publications: () => RESUME.publications,
    languages: () => RESUME.languages,
    myReadingStates: () => ReadingStates.myReadingStates,
  },
  Mutation: {
    login: () => UserLogin.login,
  },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
