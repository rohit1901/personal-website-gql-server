import {GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig} from 'graphql';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string; }
    String: { input: string; output: string; }
    Boolean: { input: boolean; output: boolean; }
    Int: { input: number; output: number; }
    Float: { input: number; output: number; }
    GQLDate: { input: any; output: any; }
};

export type AppTokenResponse = {
    __typename?: 'AppTokenResponse';
    createdOn: Scalars['GQLDate']['output'];
    expiresOn: Scalars['GQLDate']['output'];
    token: Scalars['String']['output'];
};

export type Author = {
    __typename?: 'Author';
    name: Scalars['String']['output'];
};

export type Award = {
    __typename?: 'Award';
    awarder?: Maybe<Scalars['String']['output']>;
    date?: Maybe<Scalars['String']['output']>;
    summary?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};

export type Basics = {
    __typename?: 'Basics';
    email?: Maybe<Scalars['String']['output']>;
    image?: Maybe<Scalars['String']['output']>;
    label?: Maybe<Scalars['String']['output']>;
    location?: Maybe<Location>;
    name?: Maybe<Scalars['String']['output']>;
    phone?: Maybe<Scalars['String']['output']>;
    profiles?: Maybe<Array<Maybe<Profile>>>;
    summary?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};

export type Book = {
    __typename?: 'Book';
    authors?: Maybe<Array<Author>>;
    cover: Scalars['String']['output'];
    description?: Maybe<Scalars['String']['output']>;
    id: Scalars['ID']['output'];
    slug: Scalars['String']['output'];
    title: Scalars['String']['output'];
};

export type Certificate = {
    __typename?: 'Certificate';
    date?: Maybe<Scalars['String']['output']>;
    issuer?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};

export type Education = {
    __typename?: 'Education';
    area?: Maybe<Scalars['String']['output']>;
    courses?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    endDate?: Maybe<Scalars['String']['output']>;
    institution?: Maybe<Scalars['String']['output']>;
    score?: Maybe<Scalars['String']['output']>;
    startDate?: Maybe<Scalars['String']['output']>;
    studyType?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};

export type GitHubOwner = {
    __typename?: 'GitHubOwner';
    avatar_url?: Maybe<Scalars['String']['output']>;
    html_url?: Maybe<Scalars['String']['output']>;
    login?: Maybe<Scalars['String']['output']>;
};

export type GitHubRepo = {
    __typename?: 'GitHubRepo';
    avatar_url?: Maybe<Scalars['String']['output']>;
    description?: Maybe<Scalars['String']['output']>;
    html_url?: Maybe<Scalars['String']['output']>;
    icon?: Maybe<Scalars['String']['output']>;
    image?: Maybe<Scalars['String']['output']>;
    login?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};

export type Interest = {
    __typename?: 'Interest';
    keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    name?: Maybe<Scalars['String']['output']>;
};

export type Language = {
    __typename?: 'Language';
    fluency?: Maybe<Scalars['String']['output']>;
    language?: Maybe<Scalars['String']['output']>;
};

export type Location = {
    __typename?: 'Location';
    address?: Maybe<Scalars['String']['output']>;
    city?: Maybe<Scalars['String']['output']>;
    countryCode?: Maybe<Scalars['String']['output']>;
    postalCode?: Maybe<Scalars['String']['output']>;
    region?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    login: UserLoginResponse;
};


export type MutationLoginArgs = {
    email: Scalars['String']['input'];
    password: Scalars['String']['input'];
};

export type Profile = {
    __typename?: 'Profile';
    network?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
    username?: Maybe<Scalars['String']['output']>;
};

export type Project = {
    __typename?: 'Project';
    description?: Maybe<Scalars['String']['output']>;
    endDate?: Maybe<Scalars['String']['output']>;
    highlights?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    name?: Maybe<Scalars['String']['output']>;
    startDate?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};

export type Publication = {
    __typename?: 'Publication';
    name?: Maybe<Scalars['String']['output']>;
    publisher?: Maybe<Scalars['String']['output']>;
    releaseDate?: Maybe<Scalars['String']['output']>;
    summary?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};

export type Query = {
    __typename?: 'Query';
    awards?: Maybe<Array<Maybe<Award>>>;
    basics?: Maybe<Basics>;
    certificates?: Maybe<Array<Maybe<Certificate>>>;
    education?: Maybe<Array<Maybe<Education>>>;
    getLiteralToken?: Maybe<AppTokenResponse>;
    getReadingStates: Array<ReadingState>;
    gitHubRepos?: Maybe<Array<Maybe<GitHubRepo>>>;
    interests?: Maybe<Array<Maybe<Interest>>>;
    languages?: Maybe<Array<Maybe<Language>>>;
    projects?: Maybe<Array<Maybe<Project>>>;
    publications?: Maybe<Array<Maybe<Publication>>>;
    references?: Maybe<Array<Maybe<Reference>>>;
    skills?: Maybe<Array<Maybe<Skill>>>;
    volunteer?: Maybe<Array<Maybe<Volunteer>>>;
    work?: Maybe<Array<Maybe<Work>>>;
};

export type ReadingState = {
    __typename?: 'ReadingState';
    book: Book;
    status: ReadingStatus;
};

export enum ReadingStatus {
    Dropped = 'DROPPED',
    Finished = 'FINISHED',
    IsReading = 'IS_READING',
    None = 'NONE',
    WantsToRead = 'WANTS_TO_READ'
}

export type Reference = {
    __typename?: 'Reference';
    name?: Maybe<Scalars['String']['output']>;
    reference?: Maybe<Scalars['String']['output']>;
};

export type Skill = {
    __typename?: 'Skill';
    keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    level?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};

export type UserLoginResponse = {
    __typename?: 'UserLoginResponse';
    email: Scalars['String']['output'];
    languages: Array<Scalars['String']['output']>;
    profile: UserProfile;
    token: Scalars['String']['output'];
};

export type UserProfile = {
    __typename?: 'UserProfile';
    bio: Scalars['String']['output'];
    handle: Scalars['String']['output'];
    id: Scalars['ID']['output'];
    image: Scalars['String']['output'];
    name: Scalars['String']['output'];
};

export type Volunteer = {
    __typename?: 'Volunteer';
    endDate?: Maybe<Scalars['String']['output']>;
    highlights?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    organization?: Maybe<Scalars['String']['output']>;
    position?: Maybe<Scalars['String']['output']>;
    startDate?: Maybe<Scalars['String']['output']>;
    summary?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};

export type Work = {
    __typename?: 'Work';
    endDate?: Maybe<Scalars['String']['output']>;
    highlights?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    image?: Maybe<Scalars['String']['output']>;
    name?: Maybe<Scalars['String']['output']>;
    position?: Maybe<Scalars['String']['output']>;
    startDate?: Maybe<Scalars['String']['output']>;
    summary?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    ResolverFn<TResult, TParent, TContext, TArgs>
    | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
    | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    AppTokenResponse: ResolverTypeWrapper<AppTokenResponse>;
    Author: ResolverTypeWrapper<Author>;
    Award: ResolverTypeWrapper<Award>;
    Basics: ResolverTypeWrapper<Basics>;
    Book: ResolverTypeWrapper<Book>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
    Certificate: ResolverTypeWrapper<Certificate>;
    Education: ResolverTypeWrapper<Education>;
    GQLDate: ResolverTypeWrapper<Scalars['GQLDate']['output']>;
    GitHubOwner: ResolverTypeWrapper<GitHubOwner>;
    GitHubRepo: ResolverTypeWrapper<GitHubRepo>;
    ID: ResolverTypeWrapper<Scalars['ID']['output']>;
    Interest: ResolverTypeWrapper<Interest>;
    Language: ResolverTypeWrapper<Language>;
    Location: ResolverTypeWrapper<Location>;
    Mutation: ResolverTypeWrapper<{}>;
    Profile: ResolverTypeWrapper<Profile>;
    Project: ResolverTypeWrapper<Project>;
    Publication: ResolverTypeWrapper<Publication>;
    Query: ResolverTypeWrapper<{}>;
    ReadingState: ResolverTypeWrapper<ReadingState>;
    ReadingStatus: ReadingStatus;
    Reference: ResolverTypeWrapper<Reference>;
    Skill: ResolverTypeWrapper<Skill>;
    String: ResolverTypeWrapper<Scalars['String']['output']>;
    UserLoginResponse: ResolverTypeWrapper<UserLoginResponse>;
    UserProfile: ResolverTypeWrapper<UserProfile>;
    Volunteer: ResolverTypeWrapper<Volunteer>;
    Work: ResolverTypeWrapper<Work>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    AppTokenResponse: AppTokenResponse;
    Author: Author;
    Award: Award;
    Basics: Basics;
    Book: Book;
    Boolean: Scalars['Boolean']['output'];
    Certificate: Certificate;
    Education: Education;
    GQLDate: Scalars['GQLDate']['output'];
    GitHubOwner: GitHubOwner;
    GitHubRepo: GitHubRepo;
    ID: Scalars['ID']['output'];
    Interest: Interest;
    Language: Language;
    Location: Location;
    Mutation: {};
    Profile: Profile;
    Project: Project;
    Publication: Publication;
    Query: {};
    ReadingState: ReadingState;
    Reference: Reference;
    Skill: Skill;
    String: Scalars['String']['output'];
    UserLoginResponse: UserLoginResponse;
    UserProfile: UserProfile;
    Volunteer: Volunteer;
    Work: Work;
}>;

export type AppTokenResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppTokenResponse'] = ResolversParentTypes['AppTokenResponse']> = ResolversObject<{
    createdOn?: Resolver<ResolversTypes['GQLDate'], ParentType, ContextType>;
    expiresOn?: Resolver<ResolversTypes['GQLDate'], ParentType, ContextType>;
    token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = ResolversObject<{
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AwardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Award'] = ResolversParentTypes['Award']> = ResolversObject<{
    awarder?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BasicsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Basics'] = ResolversParentTypes['Basics']> = ResolversObject<{
    email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    profiles?: Resolver<Maybe<Array<Maybe<ResolversTypes['Profile']>>>, ParentType, ContextType>;
    summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
    authors?: Resolver<Maybe<Array<ResolversTypes['Author']>>, ParentType, ContextType>;
    cover?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CertificateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Certificate'] = ResolversParentTypes['Certificate']> = ResolversObject<{
    date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    issuer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EducationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Education'] = ResolversParentTypes['Education']> = ResolversObject<{
    area?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    courses?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    institution?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    score?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    studyType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GqlDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GQLDate'], any> {
    name: 'GQLDate';
}

export type GitHubOwnerResolvers<ContextType = any, ParentType extends ResolversParentTypes['GitHubOwner'] = ResolversParentTypes['GitHubOwner']> = ResolversObject<{
    avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    html_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GitHubRepoResolvers<ContextType = any, ParentType extends ResolversParentTypes['GitHubRepo'] = ResolversParentTypes['GitHubRepo']> = ResolversObject<{
    avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    html_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type InterestResolvers<ContextType = any, ParentType extends ResolversParentTypes['Interest'] = ResolversParentTypes['Interest']> = ResolversObject<{
    keywords?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = ResolversObject<{
    fluency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = ResolversObject<{
    address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    postalCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
    login?: Resolver<ResolversTypes['UserLoginResponse'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
}>;

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = ResolversObject<{
    network?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = ResolversObject<{
    description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    highlights?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Publication'] = ResolversParentTypes['Publication']> = ResolversObject<{
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    releaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    awards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Award']>>>, ParentType, ContextType>;
    basics?: Resolver<Maybe<ResolversTypes['Basics']>, ParentType, ContextType>;
    certificates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Certificate']>>>, ParentType, ContextType>;
    education?: Resolver<Maybe<Array<Maybe<ResolversTypes['Education']>>>, ParentType, ContextType>;
    getLiteralToken?: Resolver<Maybe<ResolversTypes['AppTokenResponse']>, ParentType, ContextType>;
    getReadingStates?: Resolver<Array<ResolversTypes['ReadingState']>, ParentType, ContextType>;
    gitHubRepos?: Resolver<Maybe<Array<Maybe<ResolversTypes['GitHubRepo']>>>, ParentType, ContextType>;
    interests?: Resolver<Maybe<Array<Maybe<ResolversTypes['Interest']>>>, ParentType, ContextType>;
    languages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Language']>>>, ParentType, ContextType>;
    projects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>;
    publications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Publication']>>>, ParentType, ContextType>;
    references?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reference']>>>, ParentType, ContextType>;
    skills?: Resolver<Maybe<Array<Maybe<ResolversTypes['Skill']>>>, ParentType, ContextType>;
    volunteer?: Resolver<Maybe<Array<Maybe<ResolversTypes['Volunteer']>>>, ParentType, ContextType>;
    work?: Resolver<Maybe<Array<Maybe<ResolversTypes['Work']>>>, ParentType, ContextType>;
}>;

export type ReadingStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReadingState'] = ResolversParentTypes['ReadingState']> = ResolversObject<{
    book?: Resolver<ResolversTypes['Book'], ParentType, ContextType>;
    status?: Resolver<ResolversTypes['ReadingStatus'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReferenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reference'] = ResolversParentTypes['Reference']> = ResolversObject<{
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['Skill'] = ResolversParentTypes['Skill']> = ResolversObject<{
    keywords?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserLoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserLoginResponse'] = ResolversParentTypes['UserLoginResponse']> = ResolversObject<{
    email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    languages?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
    profile?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType>;
    token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserProfile'] = ResolversParentTypes['UserProfile']> = ResolversObject<{
    bio?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    handle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VolunteerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Volunteer'] = ResolversParentTypes['Volunteer']> = ResolversObject<{
    endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    highlights?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    organization?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Work'] = ResolversParentTypes['Work']> = ResolversObject<{
    endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    highlights?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    position?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
    AppTokenResponse?: AppTokenResponseResolvers<ContextType>;
    Author?: AuthorResolvers<ContextType>;
    Award?: AwardResolvers<ContextType>;
    Basics?: BasicsResolvers<ContextType>;
    Book?: BookResolvers<ContextType>;
    Certificate?: CertificateResolvers<ContextType>;
    Education?: EducationResolvers<ContextType>;
    GQLDate?: GraphQLScalarType;
    GitHubOwner?: GitHubOwnerResolvers<ContextType>;
    GitHubRepo?: GitHubRepoResolvers<ContextType>;
    Interest?: InterestResolvers<ContextType>;
    Language?: LanguageResolvers<ContextType>;
    Location?: LocationResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    Profile?: ProfileResolvers<ContextType>;
    Project?: ProjectResolvers<ContextType>;
    Publication?: PublicationResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    ReadingState?: ReadingStateResolvers<ContextType>;
    Reference?: ReferenceResolvers<ContextType>;
    Skill?: SkillResolvers<ContextType>;
    UserLoginResponse?: UserLoginResponseResolvers<ContextType>;
    UserProfile?: UserProfileResolvers<ContextType>;
    Volunteer?: VolunteerResolvers<ContextType>;
    Work?: WorkResolvers<ContextType>;
}>;

