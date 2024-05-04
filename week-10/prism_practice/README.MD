# How to setup files

-   Initialize an empty Node.js project

    ```js
    npm init -y
    ```

-   Add dependencies
    ```js
    npm install prisma typescript ts-node @types/node --save-dev
    ```
-   Initialize typescript
    ```js
    npx tsc --init
    Change `rootDit` to `src`
    Change `outDir` to `dist`
    ```
-   Initialize a fresh prisma project

    ```
    npx prisma init
    ```

# How to use Prisma in 3 steps

-   create your Table Schema in schema.prisma files
-   Generate the Migration
    ```js
    npx prisma migrate dev --name Initialize the schema
    ```
-   Your DB should now have the updated schema.
    ```
    Read migration.sql files
    ```
-   How to generate the client?
    ```js
    npx prisma generate
    ```

[Prisma 100xDevs](https://projects.100xdevs.com/tracks/gZf9uBBNSbBR7UCqyyqT/prisma-1)
