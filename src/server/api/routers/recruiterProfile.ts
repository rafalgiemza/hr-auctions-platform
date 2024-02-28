import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { recruiterProfiles } from "~/server/db/schema";

export const recruiterProfileRouter = createTRPCRouter({
  getMyProfiles: publicProcedure.query(({ ctx }) => {
    const userId = ctx.session?.user.id ?? "";
    return ctx.db.query.users.findMany({
      where: (users, { eq }) => eq(users.id, userId),
      with: {
        recruiterProfiles: true,
      },
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.recruiterProfiles.findMany({});
  }),

  create: protectedProcedure
    .input(
      z.object({
        headline: z.string(),
        description: z.string(),
        company: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(recruiterProfiles).values({
        userId: ctx.session.user.id,
        headline: input.headline,
        description: input.description,
        company: input.company,
        verified: false,
      });
    }),
});
