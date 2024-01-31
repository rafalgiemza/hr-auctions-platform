import { eq } from "drizzle-orm";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { offers } from "~/server/db/schema";

export const offerRouter = createTRPCRouter({
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.offers.findFirst({
      orderBy: (offers, { desc }) => [desc(offers.createdAt)],
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.offers.findMany({
      orderBy: (offers, { desc }) => [desc(offers.createdAt)],
    });
  }),

  getAllOffersForAuction: publicProcedure
    .input(z.string())
    .query(async ({ctx, input}) => { 
      const auctionId = input;
      const res = await ctx.db.select().from(offers).where(eq(offers.auctionId, auctionId));
      return res
    }),

  offerById: publicProcedure
    .input(z.string())
    .query(async ({ctx, input}) => { 
      const id = parseInt(input);
      const offer = await ctx.db.select().from(offers).where(eq(offers.id, id));
      return offer.at(0)
    }),

  create: protectedProcedure
    .input(z.object({ 
      auctionId: z.string(),
      title: z.string().min(1),
      description: z.string().min(1) 
    }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 500));

      await ctx.db.insert(offers).values({
        authorId: ctx.session.user.id,
        auctionId: input.auctionId,
        title: input.title,
        description: input.description,
      });
    }),
});
