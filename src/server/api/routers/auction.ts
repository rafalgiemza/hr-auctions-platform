import { eq } from "drizzle-orm";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { auctions } from "~/server/db/schema";

export const auctionRouter = createTRPCRouter({
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.auctions.findFirst({
      orderBy: (auctions, { desc }) => [desc(auctions.createdAt)],
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.auctions.findMany({
      orderBy: (auctions, { desc }) => [desc(auctions.createdAt)],
    });
  }),

  auctionById: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const id = parseInt(input);
      const auction = await ctx.db
        .select()
        .from(auctions)
        .where(eq(auctions.id, id));
      return auction.at(0);
    }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(auctions).values({
        title: input.title,
        description: input.description,
        authorId: ctx.session.user.id,
      });
    }),
});
