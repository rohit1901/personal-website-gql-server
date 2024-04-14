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
│   └── example.test.ts
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

## Flow

The Client should first call the getToken mutation to get a token with the app secret in the variables and should then call the getReadingStates
mutation with the token from the getToken mutation in the variables to get the reading states of the user.
NOTE: The token should also be in the Authorization header as a Bearer token.

## getToken

```js
/*
variables
this is a secret that is passed to the server to get a token from the Literal Club API.
NOTE: This is the secret shared between the server and the client comsuming this GraphQL API.
{
    "appSecret": "some secret"
}
*/
gql`mutation getToken($appSecret: String!) {
    getToken(appSecret: $appSecret) {
        token
        createdOn
        expiresOn
    }
}`
```

## getReadingStates

```js
/*
variables
this is a token that is passed to the server to get the reading states of the user. 
NOTE: This token should be the token returned from the getToken mutation
{
    "token": "some token"
}
*/
gql`mutation getReadingStates($token: String!) {
    getReadingStates(token: $token) {
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
}`
```


