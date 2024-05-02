const { getClient } = require("./db.js");

async function sayHello() {
    const client = await getClient();
    const res = await client.query("SELECT $1::text as message", [
        "Hello world!",
    ]);
    console.log(res.rows[0].message); // Hello world!
    await client.end();
}
// sayHello();

async function createTable() {
    const client = await getClient();
    try {
        const createTestTable = `
            CREATE TABLE Test (
                id SERIAL PRIMARY KEY,
                name VARCHAR(50), 
                age INTEGER
            );
        `;
        const res = await client.query(createTestTable);
        console.log("Table Created!");
    } catch (error) {
        console.log(error.message);
    } finally {
        await client.end();
    }
}

async function insertValue() {
    const client = await getClient();
    try {
        const createTestTable = `
            INSERT INTO Test (name,age)
            VALUES ('Jayesh',22);
        `;
        const res = await client.query(createTestTable);
        console.log("Value Inserted Successful!");
    } catch (error) {
        console.log(error.message);
    } finally {
        await client.end();
    }
}

async function deleteTable() {
    const client = await getClient();
    try {
        const deleteTestTable = `
            DROP TABLE Test 
        `;
        const res = await client.query(deleteTestTable);
        console.log("Table Deleted Successful!");
    } catch (error) {
        console.log(error.message);
    } finally {
        await client.end();
    }
}
// createTable();
// insertValue();
deleteTable();
