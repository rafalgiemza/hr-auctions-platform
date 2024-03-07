import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { candidateProfiles } from "~/server/db/schema";

export const candidateProfileRouter = createTRPCRouter({
  getMyProfiles: publicProcedure.query(({ ctx }) => {
    const userId = ctx.session?.user.id ?? "";
    return ctx.db.query.users.findFirst({
      where: (users, { eq }) => eq(users.id, userId),
      with: {
        candidateProfiles: true,
      },
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.candidateProfiles.findMany({});
  }),

  create: protectedProcedure
    .input(
      z.object({
        headline: z.string(),
        description: z.string().min(8),
        keyWords: z.string(),
        minSalary: z.string(),
        minSalaryUnit: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(candidateProfiles).values({
        userId: ctx.session.user.id,
        headline: input.headline,
        description: input.description,
        keyWords: input.keyWords,
        minSalary: input.minSalary,
        minSalaryUnit: input.minSalaryUnit,
      });
    }),
});
