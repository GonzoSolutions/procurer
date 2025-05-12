//
// backend/server.ts
//

import { Database } from "bun:sqlite";

//
//

var db: Database = undefined;
db = new Database("env/db.sqlite", { create: true, strict: true });

//
//

var query: any = undefined;
var result: any = undefined;

//
//

query = await db.query("CREATE TABLE IF NOT EXISTS vendors (id INTEGER PRIMARY KEY, name TEXT NOT NULL)");
result = await query.run();

query = await db.query("CREATE TABLE IF NOT EXISTS emails (id INTEGER PRIMARY KEY, name TEXT NOT NULL)");
result = await query.run();

//
//

const server = Bun.serve(
  {
    port: 8192, 
    routes: {
      "/": new Response("root"), 
      "/alpha": new Response("alpha"), 
      "/beta": new Response("beta"), 
    },

    error(message) {
      console.error(message);
    }
  }
);

//
//
