import { LiteralSecrets } from '@/types/types/types.common';
import {
  Certificate,
  ResumeSchema,
} from '@/types/interfaces/interfaces.common';

export const CERTIFICATIONS: Certificate[] = [
  {
    name: 'iSAQB® Certified Professional for Software Architecture - Advanced Level (CPSA-A)',
    date: '19.01.2024',
    issuer: 'International Software Architecture Qualification Board',
  },
  {
    name: 'iSAQB® Certified Professional for Software Architecture - Foundation Level (CPSA-F)',
    date: '13.03.2023',
    issuer: 'International Software Architecture Qualification Board',
    url: 'https://app.skillsclub.com/credential/28340-f57d08ae92c30e28a0c2850516e8fec9616ac7473feba42e7c4a2e62585c44c0?locale=en&badge=true',
  },
  {
    name: 'Apollo Certified Graph Developer Professional',
    date: '05.12.2023',
    issuer: 'Apollo Graph Inc.',
    url: 'https://www.apollographql.com/tutorials/certifications/d5356f71-0760-4701-ae67-8b56c425c89a',
  },
  {
    name: 'Apollo Certified Graph Developer Associate',
    date: '04.12.2023',
    issuer: 'Apollo Graph Inc.',
    url: 'https://www.apollographql.com/tutorials/certifications/3ad7e4dd-4b29-46f2-8e65-6e5706e0c067',
  },
  {
    name: 'Git Certified Specialist by GitKraken',
    date: '11.10.2022',
    issuer: 'Axosoft, LLC DBA GitKraken',
    url: 'https://learn.gitkraken.com/certificates/ftg223t7si',
  },
];
export const RESUME: ResumeSchema = {
  basics: {
    name: 'Rohit Khanduri',
    label: 'Software Architect',
    image: '/portfolio/about.pic.jpg',
    email: 'rohit.khanduri@hotmail.com',
    url: 'https://www.rohit.khanduri.de',
    summary: `As a seasoned software architect with over a decade of experience in software development, 
    I bring a wealth of expertise in crafting innovative solutions that bridge the gap between technical and creative aspects of software design. 
    With a strong foundation in mathematics and a proven track record of successful project delivery, 
    I am well-versed in agile methodologies and have honed my skills in leading diverse software teams across international borders. 
    My passion for problem-solving and creativity has allowed me to excel in my career, 
    and I am always eager to take on new challenges and collaborate with like-minded professionals. 
    When I'm not working on the latest software solution, you can find me reading, doodling math problems or moving my body. 
    Let's connect and explore how we can work together to drive the evolution of the tech landscape!`,
    location: {
      address: 'Frankfurt am Main, Germany',
      postalCode: '60326',
      city: 'Frankfurt am Main',
      countryCode: 'DE',
      region: 'Hessen',
    },
    profiles: [
      {
        network: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rohit-khanduri-9098b84a/',
      },
      {
        network: 'Github',
        url: 'https://github.com/rohit1901',
      },
      {
        network: 'Twitter',
        url: 'https://twitter.com/JohnnyD78310768',
      },
      {
        network: 'Instagram',
        url: 'https://www.instagram.com/johnny.drama.chase/',
      },
      {
        network: 'Substack',
        url: 'https://rohitkhanduri.substack.com/',
      },
    ],
  },
  work: [
    {
      name: 'Adesso SE',
      location: 'Frankfurt am Main, Germany',
      position: 'Software Architect',
      url: 'https://www.adesso.de/',
      description:
        'Adesso SE is a German IT service provider with more than 10,000 employees.',
      startDate: '08-2020',
      summary: `As a Software Architect and a Consultant, I am responsible for the design and implementation of Software Solutions for our clients. I am also responsible for the technical leadership of the development team and occassionally review the architecture of the existing systems.`,
      highlights: [
        'A part of  the Adesso Talent Pool as a high potential employee',
        'Successfully led the development of new microservice architectures for clients',
        'Mentored junior developers and interns',
        'Conducted workshops and training sessions for the various teams',
      ],
      image: '/portfolio/assets/adesso.png',
    },
    {
      name: 'Finatix GmbH',
      location: 'Leipzig, Germany',
      position: 'Software Engineer (Working Student)',
      url: 'https://www.finatix.de/',
      description: 'Finatix GmbH is a German IT service provider.',
      startDate: '09-2019',
      endDate: '07-2020',
      summary: `As a Software Engineer, I was responsible for the development of new features for the existing software solutions. I was also responsible for the maintenance of the existing software solutions.`,
      highlights: [
        'Developed new features for the existing software solutions',
        'Maintained the existing software solutions',
      ],
      image: '/portfolio/assets/finatix.png',
    },
    {
      name: 'Peak Performance Apps GmbH',
      location: 'Leipzig, Germany',
      position: 'Software Engineer (Working Student)',
      url: 'https://appsfactory.de/',
      description:
        'Peak Performance Apps GmbH (Subsidiary of Appsfactory GmbH) is a German IT service provider.',
      startDate: '05-2019',
      endDate: '08-2019',
      summary: `As a Software Engineer, I was responsible for the development of new features for the existing software solutions. I was also responsible for the maintenance of the existing software solutions.`,
      highlights: [
        'Developed new features for the existing software solutions',
        'Maintained the existing software solutions',
      ],
      image: '/portfolio/assets/ppa.png',
    },
    {
      name: 'Appsfactory GmbH',
      location: 'Leipzig, Germany',
      position: 'Software Engineer (Working Student)',
      url: 'https://appsfactory.de/',
      description: 'Appsfactory GmbH is a German IT service provider.',
      startDate: '12-2017',
      endDate: '04-2019',
      summary: `As a Software Engineer, I was responsible for the development of new features for the existing software solutions. I was also responsible for the maintenance of the existing software solutions.`,
      highlights: [
        'Developed new features for the existing software solutions',
        'Maintained the existing software solutions',
      ],
      image: '/portfolio/assets/appsfactory.ico',
    },
    {
      name: 'Iris Software Inc.',
      location: 'Noida, India',
      position: 'Team Lead/ Software Engineer',
      url: 'https://www.ssa-infosystems.com/',
      description: 'Iris Software Inc. is a multinational IT service provider.',
      startDate: '09-2016',
      endDate: '10-2017',
      summary: `As a Team Lead, I was responsible for the development of new features for the existing software solutions, mentoring junior developers and interns, conducting workshops and training sessions for the various teams. Conducted code reviews and was responsible for the technical leadership of the development team.`,
      highlights: [
        'Frontend (UI) Team Lead for 11 frontend developers',
        'Making technical decisions',
        'Responsible for developing new features',
        'Responsible for upgrading Angular version from 1 to 2',
        'Conducting code reviews and quality checks',
        'Regular and direct customer communication',
      ],
      image: '/portfolio/assets/iris.jpeg',
    },
    {
      name: 'Virtusa Corp.',
      location: 'Noida, India',
      position: 'Business Analyst/ Software Engineer',
      url: 'https://www.virtusa.com/',
      description: 'Virtusa Corp. is multinational IT service provider.',
      startDate: '02-2015',
      endDate: '08-2016',
      summary: `As a Business Analyst, I was responsible for the requirement gathering, preparing the requirement documents, preparing the wireframes, preparing the user stories, preparing the acceptance criteria and conducting the UAT. As a Software Engineer, I was responsible for the development of new features for the existing software solutions.`,
      highlights: [
        'Planning and execution of business and requirement analyses',
        'Software development of new functionalities',
        'Developing complete functionalities from Java REST endpoints to fully functional AngularJS components.',
      ],
      image: '/portfolio/assets/virtusa.jpeg',
    },
    {
      name: 'Genpact',
      location: 'Noida, India',
      position: 'Software Engineer',
      url: 'https://www.genpact.com/',
      description:
        'Genpact Headstrong Capital Markets is a multinational IT service provider.',
      startDate: '11-2013',
      endDate: '01-2015',
      summary: `As a Software Engineer, I was responsible for the development of new features for the existing software solutions.`,
      highlights: [
        'Developing new features for the existing software solutions',
        'Developing new functionalities in Calypso',
      ],
      image: '/portfolio/assets/genpact.jpeg',
    },
    {
      name: 'NEC',
      location: 'Noida, India',
      position: 'L3 Support Engineer/ Software Engineer',
      url: 'https://in.nec.com/',
      description:
        'NEC Technologies India Pvt. Ltd. is a multinational IT service provider.',
      startDate: '08-2012',
      endDate: '10-2013',
      summary: `As a L3 Support Engineer, I was responsible for the support of the existing software solutions. As a Software Engineer, I was responsible for the development of new features for the existing software solutions.`,
      highlights: [
        'Supporting the existing software solutions',
        'Developing new features for the existing software solutions',
      ],
      image: '/portfolio/assets/nec.png',
    },
  ],
  volunteer: [
    {
      organization: 'Robin Hood Army',
      position: 'Volunteer',
      url: 'https://robinhoodarmy.com/',
      startDate: '08-2014',
      endDate: '07-2017',
      summary: `As a Volunteer, I was responsible for the distribution of food to the needy people.`,
      highlights: [
        'Distributed food to the needy people',
        'Conducted food distribution drives',
      ],
    },
  ],
  education: [
    {
      institution: 'Hochschule Mittweida | University of Applied Sciences',
      location: 'Mittweida, Germany',
      area: 'Applied Mathematics for Network and Data Science',
      studyType: 'Master',
      startDate: '10-2017',
      endDate: '09-2019',
      url: 'https://www.hs-mittweida.de/',
    },
    {
      institution: 'Gautam Buddh Technical University',
      location: 'Noida, India',
      area: 'Computer Science',
      studyType: 'Bachelor',
      startDate: '08-2008',
      endDate: '06-2012',
      url: 'https://aktu.ac.in/',
    },
  ],
  awards: [
    {
      title: 'Adesso Talent Pool',
      date: '08-2020',
      awarder: 'Adesso SE',
      summary: `Adesso Talent Pool is an exclusive program designed to recognize and reward employees
                for their exceptional work performance and strong work ethics.
                This exclusive promotion initiative aimed to identify and appreciate individuals with
                the potential to propel the company forward, offering unique opportunities for networking and professional growth within adesso.`,
    },
    {
      title: 'Certificate of Appreciation',
      date: '07-2017',
      awarder: 'SSA Infosystems Pvt. Ltd.',
      summary: `Certificate of Appreciation is an award that is granted to employees
                who've worked exceptionally well and have won accolades from the client.`,
    },
    {
      title: 'Round of Applause',
      date: '07-2017',
      awarder: 'SSA Infosystems Pvt. Ltd.',
      summary:
        "Round of Applause is an award that is granted to employees who've worked exceptionally well in a particular month.",
    },
    {
      title: 'Top Talent',
      date: '08-2015',
      awarder: 'Virtusa Corp.',
      summary: 'Top Talent for the successful completion of the project.',
    },
  ],
  publications: [
    {
      name: 'Fraud Detection using Machine Learning',
      publisher: 'Hochschule Mittweida',
      releaseDate: '12-2018',
      url: 'https://monami.hs-mittweida.de/frontdoor/index/index/year/2023/docId/13759',
      summary: `Fraud detection is a critical issue in the financial sector.
                This paper presents a machine learning approach to detect fraud in the financial sector.`,
    },
  ],
  languages: [
    {
      language: 'English',
      fluency: 'Professional working proficiency',
    },
    {
      language: 'German',
      fluency: 'Elementary proficiency',
    },
    {
      language: 'Hindi',
      fluency: 'Native proficiency',
    },
  ],
  certificates: CERTIFICATIONS,
  meta: [
    {
      canonical: 'https://www.rohit.khanduri.de',
      version: '1.0.0',
      lastModified: '2021-08-06',
    },
  ],
};
export const GITHUB_REPOS = [
  {
    id: 762145544,
    node_id: 'R_kgDOLW1rCA',
    name: 'admin-little-fern',
    full_name: 'rohit1901/admin-little-fern',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/admin-little-fern',
    description: 'Administration nextjs app for the little-fern website (CMS)',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/admin-little-fern',
    forks_url: 'https://api.github.com/repos/rohit1901/admin-little-fern/forks',
    keys_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/admin-little-fern/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/admin-little-fern/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/admin-little-fern/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/admin-little-fern/deployments',
    created_at: '2024-02-23T07:11:28Z',
    updated_at: '2024-04-03T17:08:39Z',
    pushed_at: '2024-04-06T21:01:18Z',
    git_url: 'git://github.com/rohit1901/admin-little-fern.git',
    ssh_url: 'git@github.com:rohit1901/admin-little-fern.git',
    clone_url: 'https://github.com/rohit1901/admin-little-fern.git',
    svn_url: 'https://github.com/rohit1901/admin-little-fern',
    homepage: 'https://www.admin.littlefern.in',
    size: 636,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      'auth0',
      'aws',
      'cloudfront',
      'cognito',
      'flowbite',
      'heroku',
      'mongoclient',
      'mongodb',
      'next-auth',
      'nextjs',
      'nodejs',
      'okta-oidc',
      's3',
      'tailwindcss',
      'typescript',
      'zustand',
    ],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 660114529,
    node_id: 'R_kgDOJ1iMYQ',
    name: 'angular-form-util',
    full_name: 'rohit1901/angular-form-util',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/angular-form-util',
    description:
      'This Repo contains a Boilerplate Angular application with Jasmine Tests for a utility function',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/angular-form-util',
    forks_url: 'https://api.github.com/repos/rohit1901/angular-form-util/forks',
    keys_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/angular-form-util/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/angular-form-util/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/angular-form-util/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/angular-form-util/deployments',
    created_at: '2023-06-29T09:22:05Z',
    updated_at: '2023-06-29T20:20:06Z',
    pushed_at: '2023-06-29T09:55:15Z',
    git_url: 'git://github.com/rohit1901/angular-form-util.git',
    ssh_url: 'git@github.com:rohit1901/angular-form-util.git',
    clone_url: 'https://github.com/rohit1901/angular-form-util.git',
    svn_url: 'https://github.com/rohit1901/angular-form-util',
    homepage: '',
    size: 127,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['angular', 'jasmine', 'karma', 'typescript'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'main',
  },
  {
    id: 622876134,
    node_id: 'R_kgDOJSBV5g',
    name: 'appointify',
    full_name: 'rohit1901/appointify',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/appointify',
    description: 'Appointify - Calendar Application',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/appointify',
    forks_url: 'https://api.github.com/repos/rohit1901/appointify/forks',
    keys_url: 'https://api.github.com/repos/rohit1901/appointify/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/appointify/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/appointify/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/appointify/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/appointify/issues/events{/number}',
    events_url: 'https://api.github.com/repos/rohit1901/appointify/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/appointify/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/appointify/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/appointify/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/appointify/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/appointify/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/appointify/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/appointify/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/appointify/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/appointify/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/appointify/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/appointify/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/appointify/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/appointify/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/appointify/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/appointify/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/appointify/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/appointify/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/appointify/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/appointify/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/rohit1901/appointify/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/appointify/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/appointify/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/appointify/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/appointify/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/appointify/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/appointify/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/appointify/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/appointify/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/appointify/deployments',
    created_at: '2023-04-03T08:41:20Z',
    updated_at: '2023-04-03T20:53:36Z',
    pushed_at: '2023-04-05T14:00:15Z',
    git_url: 'git://github.com/rohit1901/appointify.git',
    ssh_url: 'git@github.com:rohit1901/appointify.git',
    clone_url: 'https://github.com/rohit1901/appointify.git',
    svn_url: 'https://github.com/rohit1901/appointify',
    homepage: '',
    size: 84,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Java',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['java', 'spring-boot'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 624298226,
    node_id: 'R_kgDOJTYI8g',
    name: 'appointify-mask',
    full_name: 'rohit1901/appointify-mask',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/appointify-mask',
    description: 'NEXT.js Frontend for the appointify application',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/appointify-mask',
    forks_url: 'https://api.github.com/repos/rohit1901/appointify-mask/forks',
    keys_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/appointify-mask/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/appointify-mask/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/issues/events{/number}',
    events_url: 'https://api.github.com/repos/rohit1901/appointify-mask/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/appointify-mask/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/rohit1901/appointify-mask/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/appointify-mask/deployments',
    created_at: '2023-04-06T06:57:12Z',
    updated_at: '2023-04-06T06:57:12Z',
    pushed_at: '2023-04-06T12:12:54Z',
    git_url: 'git://github.com/rohit1901/appointify-mask.git',
    ssh_url: 'git@github.com:rohit1901/appointify-mask.git',
    clone_url: 'https://github.com/rohit1901/appointify-mask.git',
    svn_url: 'https://github.com/rohit1901/appointify-mask',
    homepage: null,
    size: 22,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 559978175,
    node_id: 'R_kgDOIWCWvw',
    name: 'ast-shaking',
    full_name: 'rohit1901/ast-shaking',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/ast-shaking',
    description: 'Abstract Syntax Trees and a shaking implementation ',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/ast-shaking',
    forks_url: 'https://api.github.com/repos/rohit1901/ast-shaking/forks',
    keys_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/ast-shaking/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/ast-shaking/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/issues/events{/number}',
    events_url: 'https://api.github.com/repos/rohit1901/ast-shaking/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/ast-shaking/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/rohit1901/ast-shaking/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/ast-shaking/deployments',
    created_at: '2022-10-31T13:51:15Z',
    updated_at: '2022-10-31T13:55:41Z',
    pushed_at: '2022-11-01T15:43:57Z',
    git_url: 'git://github.com/rohit1901/ast-shaking.git',
    ssh_url: 'git@github.com:rohit1901/ast-shaking.git',
    clone_url: 'https://github.com/rohit1901/ast-shaking.git',
    svn_url: 'https://github.com/rohit1901/ast-shaking',
    homepage: null,
    size: 13,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'JavaScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master',
  },
  {
    id: 738498325,
    node_id: 'R_kgDOLASXFQ',
    name: 'crawlee-playground',
    full_name: 'rohit1901/crawlee-playground',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/crawlee-playground',
    description:
      'A Crawlee playground for web crawling functionalities, managing the crawling parameters, and handling different types of rules for web scraping.',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/crawlee-playground',
    forks_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/forks',
    keys_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/teams',
    hooks_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/crawlee-playground/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/crawlee-playground/deployments',
    created_at: '2024-01-03T11:14:39Z',
    updated_at: '2024-01-04T12:49:15Z',
    pushed_at: '2024-01-04T17:44:10Z',
    git_url: 'git://github.com/rohit1901/crawlee-playground.git',
    ssh_url: 'git@github.com:rohit1901/crawlee-playground.git',
    clone_url: 'https://github.com/rohit1901/crawlee-playground.git',
    svn_url: 'https://github.com/rohit1901/crawlee-playground',
    homepage: '',
    size: 67,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 729814092,
    node_id: 'R_kgDOK4AUTA',
    name: 'docker-basics',
    full_name: 'rohit1901/docker-basics',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/docker-basics',
    description: 'A simple Docker Repo for beginners',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/docker-basics',
    forks_url: 'https://api.github.com/repos/rohit1901/docker-basics/forks',
    keys_url:
      'https://api.github.com/repos/rohit1901/docker-basics/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/docker-basics/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/docker-basics/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/docker-basics/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/docker-basics/issues/events{/number}',
    events_url: 'https://api.github.com/repos/rohit1901/docker-basics/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/docker-basics/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/docker-basics/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/docker-basics/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/docker-basics/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/docker-basics/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/docker-basics/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/docker-basics/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/docker-basics/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/docker-basics/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/docker-basics/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/docker-basics/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/docker-basics/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/docker-basics/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/docker-basics/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/docker-basics/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/docker-basics/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/docker-basics/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/docker-basics/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/docker-basics/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/rohit1901/docker-basics/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/docker-basics/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/docker-basics/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/docker-basics/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/docker-basics/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/docker-basics/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/docker-basics/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/docker-basics/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/docker-basics/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/docker-basics/deployments',
    created_at: '2023-12-10T12:51:34Z',
    updated_at: '2023-12-10T14:10:14Z',
    pushed_at: '2023-12-11T05:59:17Z',
    git_url: 'git://github.com/rohit1901/docker-basics.git',
    ssh_url: 'git@github.com:rohit1901/docker-basics.git',
    clone_url: 'https://github.com/rohit1901/docker-basics.git',
    svn_url: 'https://github.com/rohit1901/docker-basics',
    homepage: null,
    size: 23,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Dockerfile',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 627861407,
    node_id: 'R_kgDOJWxnnw',
    name: 'e-paper',
    full_name: 'rohit1901/e-paper',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/e-paper',
    description:
      'An e-paper micropython example for displaying custom messages on Waveshare 3.7 e-ink e-paper module using a Raspberry Pi Pico W',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/e-paper',
    forks_url: 'https://api.github.com/repos/rohit1901/e-paper/forks',
    keys_url: 'https://api.github.com/repos/rohit1901/e-paper/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/e-paper/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/e-paper/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/e-paper/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/e-paper/issues/events{/number}',
    events_url: 'https://api.github.com/repos/rohit1901/e-paper/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/e-paper/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/e-paper/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/e-paper/tags',
    blobs_url: 'https://api.github.com/repos/rohit1901/e-paper/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/e-paper/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/e-paper/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/rohit1901/e-paper/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/e-paper/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/rohit1901/e-paper/languages',
    stargazers_url: 'https://api.github.com/repos/rohit1901/e-paper/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/e-paper/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/e-paper/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/e-paper/subscription',
    commits_url: 'https://api.github.com/repos/rohit1901/e-paper/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/e-paper/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/e-paper/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/e-paper/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/e-paper/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/e-paper/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/rohit1901/e-paper/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/e-paper/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/rohit1901/e-paper/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/e-paper/issues{/number}',
    pulls_url: 'https://api.github.com/repos/rohit1901/e-paper/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/e-paper/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/e-paper/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/rohit1901/e-paper/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/e-paper/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/e-paper/deployments',
    created_at: '2023-04-14T11:12:18Z',
    updated_at: '2024-04-09T15:17:19Z',
    pushed_at: '2023-04-14T12:13:35Z',
    git_url: 'git://github.com/rohit1901/e-paper.git',
    ssh_url: 'git@github.com:rohit1901/e-paper.git',
    clone_url: 'https://github.com/rohit1901/e-paper.git',
    svn_url: 'https://github.com/rohit1901/e-paper',
    homepage: null,
    size: 23,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'main',
  },
  {
    id: 775141539,
    node_id: 'R_kgDOLjO4ow',
    name: 'little-fern-party',
    full_name: 'rohit1901/little-fern-party',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/little-fern-party',
    description: 'Little Fern PartyKit Server',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/little-fern-party',
    forks_url: 'https://api.github.com/repos/rohit1901/little-fern-party/forks',
    keys_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/little-fern-party/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/little-fern-party/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/little-fern-party/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/little-fern-party/deployments',
    created_at: '2024-03-20T20:47:39Z',
    updated_at: '2024-04-03T17:07:30Z',
    pushed_at: '2024-04-05T11:11:50Z',
    git_url: 'git://github.com/rohit1901/little-fern-party.git',
    ssh_url: 'git@github.com:rohit1901/little-fern-party.git',
    clone_url: 'https://github.com/rohit1901/little-fern-party.git',
    svn_url: 'https://github.com/rohit1901/little-fern-party',
    homepage: 'https://little-fern-party.rohit1901.partykit.dev/',
    size: 106,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'HTML',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['css', 'html', 'partykit'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 680783688,
    node_id: 'R_kgDOKJPvSA',
    name: 'mockable',
    full_name: 'rohit1901/mockable',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/mockable',
    description:
      'Mockable automates the mock generation process while maintaining type safety and ease of use.',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/mockable',
    forks_url: 'https://api.github.com/repos/rohit1901/mockable/forks',
    keys_url: 'https://api.github.com/repos/rohit1901/mockable/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/mockable/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/mockable/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/mockable/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/mockable/issues/events{/number}',
    events_url: 'https://api.github.com/repos/rohit1901/mockable/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/mockable/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/mockable/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/mockable/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/mockable/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/mockable/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/mockable/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/mockable/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/mockable/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/rohit1901/mockable/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/mockable/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/mockable/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/mockable/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/mockable/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/mockable/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/mockable/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/mockable/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/mockable/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/mockable/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/mockable/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/rohit1901/mockable/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/mockable/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/rohit1901/mockable/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/mockable/issues{/number}',
    pulls_url: 'https://api.github.com/repos/rohit1901/mockable/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/mockable/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/mockable/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/rohit1901/mockable/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/mockable/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/mockable/deployments',
    created_at: '2023-08-20T11:49:38Z',
    updated_at: '2023-09-17T12:10:59Z',
    pushed_at: '2023-09-05T10:56:47Z',
    git_url: 'git://github.com/rohit1901/mockable.git',
    ssh_url: 'git@github.com:rohit1901/mockable.git',
    clone_url: 'https://github.com/rohit1901/mockable.git',
    svn_url: 'https://github.com/rohit1901/mockable',
    homepage: '',
    size: 111,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['ast', 'generator', 'mocks', 'testing', 'typescript'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 783240483,
    node_id: 'R_kgDOLq9NIw',
    name: 'personal-website',
    full_name: 'rohit1901/personal-website',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/personal-website',
    description: 'My Personal Website',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/personal-website',
    forks_url: 'https://api.github.com/repos/rohit1901/personal-website/forks',
    keys_url:
      'https://api.github.com/repos/rohit1901/personal-website/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/personal-website/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/personal-website/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/personal-website/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/personal-website/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/rohit1901/personal-website/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/personal-website/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/personal-website/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/personal-website/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/personal-website/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/personal-website/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/personal-website/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/personal-website/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/personal-website/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/personal-website/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/personal-website/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/personal-website/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/personal-website/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/personal-website/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/personal-website/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/personal-website/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/personal-website/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/personal-website/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/personal-website/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/personal-website/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/rohit1901/personal-website/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/personal-website/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/personal-website/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/personal-website/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/personal-website/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/personal-website/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/personal-website/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/personal-website/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/personal-website/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/personal-website/deployments',
    created_at: '2024-04-07T10:35:24Z',
    updated_at: '2024-04-07T13:12:20Z',
    pushed_at: '2024-04-14T13:05:22Z',
    git_url: 'git://github.com/rohit1901/personal-website.git',
    ssh_url: 'git@github.com:rohit1901/personal-website.git',
    clone_url: 'https://github.com/rohit1901/personal-website.git',
    svn_url: 'https://github.com/rohit1901/personal-website',
    homepage: null,
    size: 1196,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 784421844,
    node_id: 'R_kgDOLsFT1A',
    name: 'personal-website-gql-server',
    full_name: 'rohit1901/personal-website-gql-server',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/personal-website-gql-server',
    description: 'A GQL Server for my website',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/personal-website-gql-server',
    forks_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/forks',
    keys_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/teams',
    hooks_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/personal-website-gql-server/deployments',
    created_at: '2024-04-09T20:23:06Z',
    updated_at: '2024-04-10T10:30:31Z',
    pushed_at: '2024-04-14T14:12:27Z',
    git_url: 'git://github.com/rohit1901/personal-website-gql-server.git',
    ssh_url: 'git@github.com:rohit1901/personal-website-gql-server.git',
    clone_url: 'https://github.com/rohit1901/personal-website-gql-server.git',
    svn_url: 'https://github.com/rohit1901/personal-website-gql-server',
    homepage: null,
    size: 1226,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: true,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 692059466,
    node_id: 'R_kgDOKT_9Sg',
    name: 'py-cluster',
    full_name: 'rohit1901/py-cluster',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/py-cluster',
    description: 'Classifier and Cluster Analysis in Data Science',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/py-cluster',
    forks_url: 'https://api.github.com/repos/rohit1901/py-cluster/forks',
    keys_url: 'https://api.github.com/repos/rohit1901/py-cluster/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/py-cluster/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/py-cluster/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/py-cluster/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/py-cluster/issues/events{/number}',
    events_url: 'https://api.github.com/repos/rohit1901/py-cluster/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/py-cluster/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/py-cluster/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/py-cluster/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/py-cluster/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/py-cluster/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/py-cluster/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/py-cluster/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/py-cluster/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/py-cluster/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/py-cluster/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/py-cluster/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/py-cluster/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/py-cluster/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/py-cluster/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/py-cluster/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/py-cluster/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/py-cluster/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/py-cluster/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/py-cluster/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/rohit1901/py-cluster/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/py-cluster/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/py-cluster/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/py-cluster/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/py-cluster/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/py-cluster/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/py-cluster/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/py-cluster/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/py-cluster/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/py-cluster/deployments',
    created_at: '2023-09-15T13:21:58Z',
    updated_at: '2023-09-17T11:58:04Z',
    pushed_at: '2023-09-17T11:56:37Z',
    git_url: 'git://github.com/rohit1901/py-cluster.git',
    ssh_url: 'git@github.com:rohit1901/py-cluster.git',
    clone_url: 'https://github.com/rohit1901/py-cluster.git',
    svn_url: 'https://github.com/rohit1901/py-cluster',
    homepage: '',
    size: 126,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'Python',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      'classification',
      'clustering',
      'data-science',
      'k-means-clustering',
      'machine-learning',
      'pytest',
      'python',
      'python3',
      'ruff',
      'scikit-learn',
    ],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 560025678,
    node_id: 'R_kgDOIWFQTg',
    name: 'rohit1901',
    full_name: 'rohit1901/rohit1901',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/rohit1901',
    description: 'Config files for my GitHub profile.',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/rohit1901',
    forks_url: 'https://api.github.com/repos/rohit1901/rohit1901/forks',
    keys_url: 'https://api.github.com/repos/rohit1901/rohit1901/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/rohit1901/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/rohit1901/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/rohit1901/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/rohit1901/issues/events{/number}',
    events_url: 'https://api.github.com/repos/rohit1901/rohit1901/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/rohit1901/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/rohit1901/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/rohit1901/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/rohit1901/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/rohit1901/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/rohit1901/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/rohit1901/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/rohit1901/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/rohit1901/rohit1901/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/rohit1901/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/rohit1901/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/rohit1901/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/rohit1901/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/rohit1901/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/rohit1901/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/rohit1901/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/rohit1901/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/rohit1901/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/rohit1901/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/rohit1901/rohit1901/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/rohit1901/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/rohit1901/rohit1901/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/rohit1901/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/rohit1901/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/rohit1901/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/rohit1901/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/rohit1901/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/rohit1901/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/rohit1901/deployments',
    created_at: '2022-10-31T15:30:57Z',
    updated_at: '2022-10-31T15:30:57Z',
    pushed_at: '2024-04-01T22:18:34Z',
    git_url: 'git://github.com/rohit1901/rohit1901.git',
    ssh_url: 'git@github.com:rohit1901/rohit1901.git',
    clone_url: 'https://github.com/rohit1901/rohit1901.git',
    svn_url: 'https://github.com/rohit1901/rohit1901',
    homepage: 'https://github.com/rohit1901',
    size: 25,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['config', 'github-config'],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'main',
  },
  {
    id: 560813535,
    node_id: 'R_kgDOIW1V3w',
    name: 'starter-schematics',
    full_name: 'rohit1901/starter-schematics',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/starter-schematics',
    description: 'A collection of angular schematics',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/starter-schematics',
    forks_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/forks',
    keys_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/teams',
    hooks_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/starter-schematics/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/starter-schematics/deployments',
    created_at: '2022-11-02T10:25:06Z',
    updated_at: '2022-11-06T23:10:01Z',
    pushed_at: '2022-11-08T14:45:18Z',
    git_url: 'git://github.com/rohit1901/starter-schematics.git',
    ssh_url: 'git@github.com:rohit1901/starter-schematics.git',
    clone_url: 'https://github.com/rohit1901/starter-schematics.git',
    svn_url: 'https://github.com/rohit1901/starter-schematics',
    homepage: null,
    size: 58,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: 'main',
  },
  {
    id: 664820593,
    node_id: 'R_kgDOJ6BbcQ',
    name: 'ts-gen-typeguards',
    full_name: 'rohit1901/ts-gen-typeguards',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/ts-gen-typeguards',
    description: 'A Typescript Library which generates type guard functions',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/ts-gen-typeguards',
    forks_url: 'https://api.github.com/repos/rohit1901/ts-gen-typeguards/forks',
    keys_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/ts-gen-typeguards/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/ts-gen-typeguards/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/ts-gen-typeguards/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/ts-gen-typeguards/deployments',
    created_at: '2023-07-10T20:29:45Z',
    updated_at: '2024-01-14T23:36:42Z',
    pushed_at: '2023-09-04T14:28:51Z',
    git_url: 'git://github.com/rohit1901/ts-gen-typeguards.git',
    ssh_url: 'git@github.com:rohit1901/ts-gen-typeguards.git',
    clone_url: 'https://github.com/rohit1901/ts-gen-typeguards.git',
    svn_url: 'https://github.com/rohit1901/ts-gen-typeguards',
    homepage: '',
    size: 834,
    stargazers_count: 2,
    watchers_count: 2,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['jest', 'library', 'nodejs', 'npm', 'typescript'],
    visibility: 'public',
    forks: 0,
    open_issues: 2,
    watchers: 2,
    default_branch: 'main',
  },
  {
    id: 660198829,
    node_id: 'R_kgDOJ1nVrQ',
    name: 'ts-raw-utils',
    full_name: 'rohit1901/ts-raw-utils',
    private: false,
    owner: {
      login: 'rohit1901',
      id: 7346344,
      node_id: 'MDQ6VXNlcjczNDYzNDQ=',
      avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/rohit1901',
      html_url: 'https://github.com/rohit1901',
      followers_url: 'https://api.github.com/users/rohit1901/followers',
      following_url:
        'https://api.github.com/users/rohit1901/following{/other_user}',
      gists_url: 'https://api.github.com/users/rohit1901/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/rohit1901/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/rohit1901/subscriptions',
      organizations_url: 'https://api.github.com/users/rohit1901/orgs',
      repos_url: 'https://api.github.com/users/rohit1901/repos',
      events_url: 'https://api.github.com/users/rohit1901/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/rohit1901/received_events',
      type: 'User',
      site_admin: false,
    },
    html_url: 'https://github.com/rohit1901/ts-raw-utils',
    description: 'A set of utils for ts projects',
    fork: false,
    url: 'https://api.github.com/repos/rohit1901/ts-raw-utils',
    forks_url: 'https://api.github.com/repos/rohit1901/ts-raw-utils/forks',
    keys_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/rohit1901/ts-raw-utils/teams',
    hooks_url: 'https://api.github.com/repos/rohit1901/ts-raw-utils/hooks',
    issue_events_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/issues/events{/number}',
    events_url: 'https://api.github.com/repos/rohit1901/ts-raw-utils/events',
    assignees_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/branches{/branch}',
    tags_url: 'https://api.github.com/repos/rohit1901/ts-raw-utils/tags',
    blobs_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/languages',
    stargazers_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/stargazers',
    contributors_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/contributors',
    subscribers_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/subscribers',
    subscription_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/subscription',
    commits_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/rohit1901/ts-raw-utils/merges',
    archive_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/downloads',
    issues_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/labels{/name}',
    releases_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/rohit1901/ts-raw-utils/deployments',
    created_at: '2023-06-29T13:16:10Z',
    updated_at: '2023-08-09T20:34:00Z',
    pushed_at: '2023-09-05T12:37:45Z',
    git_url: 'git://github.com/rohit1901/ts-raw-utils.git',
    ssh_url: 'git@github.com:rohit1901/ts-raw-utils.git',
    clone_url: 'https://github.com/rohit1901/ts-raw-utils.git',
    svn_url: 'https://github.com/rohit1901/ts-raw-utils',
    homepage: '',
    size: 278,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: {
      key: 'mit',
      name: 'MIT License',
      spdx_id: 'MIT',
      url: 'https://api.github.com/licenses/mit',
      node_id: 'MDc6TGljZW5zZTEz',
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ['typescript', 'utilities'],
    visibility: 'public',
    forks: 0,
    open_issues: 1,
    watchers: 0,
    default_branch: 'main',
  },
];
