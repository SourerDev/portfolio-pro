import { z } from "zod";

import { protectedProcedure, publicProcedure, createTRPCRouter } from '~/server/api/trpc'

export const projectRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }): Promise<Project[]> => {
    return await ctx.prisma.project.findMany()
  }),
  create: protectedProcedure.input(z.object({
    name: z.string(), description: z.string(),
    images: z.array(z.string()),
    state: z.enum(['PENDING', 'COMPLETED']),
    goals: z.string().array(),
    github: z.string(),
    deploy: z.string().optional()

  })).mutation(async ({ input: { name, description, state, images, goals, github, deploy }, ctx }) => {
    const project = await ctx.prisma.project.create({ data: { name, images, description, state, goals, github, deploy } })
    return project
  })
})

interface Project {
  id: string
  name: string
  description: string
  images: string[]
  goals: string[]
  state: string
}