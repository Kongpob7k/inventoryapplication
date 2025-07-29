require("dotenv").config();
const pool = require("./pool");


async function getallname(){
    const { rows } = await pool.query("SELECT * FROM keyboardnames");
    console.log(rows);
    return rows;
}

async function getallbrand(){
    const { rows } = await pool.query("SELECT DISTINCT brand FROM keyboardnames");
    console.log(rows);
    return rows;
}

async function getallswitch(){
    const { rows } = await pool.query("SELECT DISTINCT switch FROM keyboardnames");
    console.log(rows);
    return rows;
}

async function insertkeyboard(name,brand,sw){
    await pool.query(
        'INSERT INTO keyboardnames (name, brand, "switch") VALUES ($1, $2, $3) RETURNING *',
        [name, brand, sw]
    );
}

getallbrand();

module.exports = {
    getallname,
    getallbrand,
    getallswitch,
    insertkeyboard
}

