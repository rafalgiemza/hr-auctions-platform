import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { candidateProfiles } from "~/server/db/schema";

export const candidateProfileRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.candidateProfiles.findMany({})
  }),

  create: protectedProcedure
  .input(z.object({ description: z.string() }))
  .mutation(async ({ ctx, input }) => {
    // simulate a slow db call
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    await ctx.db.insert(candidateProfiles).values({
      description: input.description,
      userId: ctx.session.user.id,
    });
  }),
})