## Simple Lambda app

The goal is to build the backend of a `Blogging Platform`.
It NEEDS to work in a serverless environment (preferably use cloudflare workers / Lambda)

### User Management Endpoints:

-   POST /users/signup - User registration.
    Inputs: username, email, password
    Actions: Create a new user account. Perform validations and return a success message or error messages (e.g., email already in use, password requirements not met).

-   POST /users/signin - User login.
    Inputs: email, password
    Actions: Authenticate the user. Return a token (JWT) for authorization in subsequent requests if successful, or an error message if authentication fails.
    Blog Platform Endpoints:

-   GET /posts - Retrieve all blog posts.
    Actions: Fetch a list of all blog posts. Can be public or user-specific based on authentication.

-   POST /posts - Create a new blog post.
    Inputs: title, body
    Actions: Create a new blog post associated with the authenticated user. Require authentication.

-   GET /posts/:id - Retrieve a single blog post by ID.
    Actions: Fetch details of a specific blog post. Can be public or have additional details/edit capabilities for the owner.

-   PUT /posts/:id - Update a blog post by ID.
    Inputs: title, body
    Actions: Update the specified blog post if the authenticated user is the owner. Require authentication.

-   DELETE /posts/:id - Delete a blog post by ID.
    Actions: Delete the specified blog post if the authenticated user is the owner. Require authentication.

## Database

Try using `prisma` as the ORM and Postgres as the provider.

## How to start

```terminal
npm install -g serverless
```

Go to terminal run cmd

```terminal
serverless
```

It will give bunch of option select `AWS - Node.js - Express API`

```terminal
Creating a new serverless project

? What do you want to make? (Use arrow keys)
> AWS - Node.js - Starter
  AWS - Node.js - HTTP API
  AWS - Node.js - Scheduled Task
  AWS - Node.js - SQS Worker
  AWS - Node.js - Express API
  AWS - Node.js - Express API with DynamoDB
  AWS - Python - Starter
  AWS - Python - HTTP API
  AWS - Python - Scheduled Task
  AWS - Python - SQS Worker
  AWS - Python - Flask API
  AWS - Python - Flask API with DynamoDB
  Other
```

Ask you the name of project , go with default by hit enter or provide name.

```terminal
? What do you want to call this project? (aws-node-express-api-project)
```

It will automatically download the setup

```terminal
✔ Project successfully created in aws-node-express-api-project folder
```

Now ask u to login or not with serverless framework , i choose no and went to next step.

```terminal
? Register or Login to Serverless Framework (Y/n) : n
```

It will ask u to deploy now , i go with no. I will do this after i make changes in code.

```terminal
? Do you want to deploy now? (Y/n) : n
```

Done ✅

## Local development

It is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

# How to setup prisma

Add dependencies

```js
npm install prisma --save-dev
```

Initialize a fresh prisma project

```js
npx prisma init
```

# Prisma

we have to perform this step whenever we do changes in schema of prisma

Migration

```js
npx prisma migrate dev --name relationship
```

Generate Client

```js
npx prisma generate
```

