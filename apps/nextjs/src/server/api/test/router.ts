import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";


export const testRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.string())
    .query(async ({ input: name }) => `Hello ${name}`),
  
});
