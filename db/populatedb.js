require("dotenv").config();
const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS keyboardnames (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name varchar (255),
        brand varchar (255),
        switch varchar (255)
    );

    INSERT INTO keyboardnames (name,brand,switch) 
    VALUES ('BlackwidowV3','Razer','Green'),('G PRO TKL','Logitech','Blue');

`

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:5432/inventory`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();