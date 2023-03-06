import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  request.headers.set("Access-Control-Allow-Origin", "*");
  return Response.json({ hello: "world" });
};
