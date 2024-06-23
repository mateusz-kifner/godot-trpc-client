import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";


export const testRouter = createTRPCRouter({
  test1: publicProcedure
    .input( z.string() )
    .query(({ input }) => {
      return {
        greeting: input
      };
    }),

  test2: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
     
      return {
        input 
      }
    }),

  test: publicProcedure.query(({ ctx }) => {
    return "TESTSTRING";
  }),
  testNum: publicProcedure.query(({ ctx }) => {
    return 115;
  }),
});
