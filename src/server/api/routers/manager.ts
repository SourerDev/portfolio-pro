import { z } from "zod";

import { protectedProcedure,publicProcedure, createTRPCRouter } from "~/server/api/trpc";

export const managerRouter = createTRPCRouter({
  signIn: publicProcedure.input(z.object({
    username: z.string(),
    password: z.string()
  })).mutation(({ input }) => {
    return true
  }
  )
})