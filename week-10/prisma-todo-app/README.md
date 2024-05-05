# How to setup

Initialize an empty Node.js project

```js
npm init -y
```

Add dependencies

```js
npm install prisma typescript express ts-node @types/node @types/express --save-dev
```

Initialize typescript

```js
npx tsc --init
Change `rootDit` to `src`
Change `outDir` to `dist`
```

Initialize a fresh prisma project

```js
npx prisma init
```

# Watching file changes

```
npm i -D nodemon ts-node
```

update the scripts in the `package.json` file as follows:

```js
{
  "scripts": {
    "build": "npx tsc",
    "start": "node dist/index.js",
    "dev": "nodemon src/index.ts"
  }
}
```

Finally, return to the terminal and execute `npm run dev` to initiate the development server.

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
