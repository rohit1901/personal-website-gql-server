// Interface for custom class ApiError
export interface ApiError extends Error {
    success: boolean;
    message: string;
    statusCode: number;
    data: [] | {};
}

// Example User interface
export interface User {
    name: string;
}

export interface AppContext {
    authorized?: boolean;
    xLiteralToken?: string;
    isTokenExpired?: boolean;
}

/**
 * @see https://jsonresume.org/schema/
 * JSON Resume Schema types
 */
export interface Location {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
}

export interface Profile {
    network: string;
    username?: string;
    url: string;

    [k: string]: any;
}

export interface Basics {
    name: string;
    label: string;
    image: string;
    email: string;
    phone?: string;
    url: string;
    summary: string;
    location: Location;
    profiles: Profile[];
}

export interface Work {
    name: string;
    location: string;
    description: string;
    image: string;
    position: string;
    url: string;
    startDate: string;
    endDate?: string;
    summary: string;
    highlights: string[];
}

export interface Volunteer {
    organization: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

export interface Education {
    institution: string;
    url?: string;
    location: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score?: string;
    courses?: string[];
}

export interface Award {
    title: string;
    date: string;
    awarder: string;
    summary: string;
    url?: string;
}

export interface Certificate {
    name: string;
    date: string;
    issuer: string;
    url?: string;
    image?: string;
}

export interface Publication {
    name: string;
    publisher: string;
    releaseDate: string;
    url: string;
    summary: string;
}

export interface Skill {
    name: string;
    level: string;
    keywords: string[];
}

export interface Language {
    language: string;
    fluency: string;
}

export interface Interest {
    name: string;
    keywords: string[];
}

export interface Reference {
    name: string;
    reference: string;
}

export interface Project {
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    highlights: string[];
    url: string;
}

export interface ResumeSchema {
    basics: Basics;
    work: Work[];
    volunteer: Volunteer[];
    education: Education[];
    awards: Award[];
    certificates: Certificate[];
    publications: Publication[];
    skills?: Skill[];
    languages: Language[];
    interests?: Interest[];
    references?: Reference[];
    projects?: Project[];

    [key: string]: any;
}