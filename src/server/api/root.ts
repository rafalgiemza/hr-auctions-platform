import { createTRPCRouter } from "~/server/api/trpc";
import { postRouter } from "~/server/api/routers/post";
import { candidateProfileRouter } from "./routers/candidateProfile";
import { recruiterProfileRouter } from "./routers/recruiterProfile";
import { auctionRouter } from "./routers/auction";
import { offerRouter } from "./routers/offer";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  candidateProfile: candidateProfileRouter,
  recruiterProfile: recruiterProfileRouter,
  auction: auctionRouter,
  offer: offerRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
