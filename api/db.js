import mysql from "mysql";

export const db = mysql.createConnection({
  host: "containers-us-west-120.railway.app",
  user: "root",
  password: "M0B25CpqaBKZLeT2j5je",
  database: "railway",
  port: 5849,
});
console.log("started");
