//
// backend/server.ts
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
