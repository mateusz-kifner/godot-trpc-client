import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const test2Router = createTRPCRouter({
  hello: publicProcedure
    .query(async ({}) => `Hello test2`),
  
});

export const testRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.string())
    .query(async ({ input: name }) => `Hello ${name}`),
    test:test2Router,
  
});

