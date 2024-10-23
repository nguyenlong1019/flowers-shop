import mysql from "mysql2";

const db = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '@D1019cpu170502',
    database: 'flowers_shop'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

export default db;
