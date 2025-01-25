import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = mysql2.createPool({
  user: process.env.DB_USER,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  connectionLimit: process.env.CONNECTION_LIMIT,
  host: process.env.HOST,
});

dbConnection.execute("select 'test' ", (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});

export default dbConnection.promise();
