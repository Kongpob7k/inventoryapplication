require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS keyboardnames (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255),
    brand VARCHAR(255),
    switch VARCHAR(255)
);

INSERT INTO keyboardnames (name, brand, switch) 
VALUES 
  ('BlackwidowV3', 'Razer', 'Green'),
  ('G PRO TKL', 'Logitech', 'Blue')
ON CONFLICT DO NOTHING;  -- ป้องกัน insert ซ้ำ (ถ้าใช้ unique constraint)
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  await client.connect();
  try {
    await client.query(SQL);
  } catch (err) {
    console.error("Error running query:", err);
  }
  await client.end();
  console.log("done");
}

main();