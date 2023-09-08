import pg from "pg";

const { Pool } = pg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "PetList",
  password: "Funiak-11",
  port: 3333,
});
