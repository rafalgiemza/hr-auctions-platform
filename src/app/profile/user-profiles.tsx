import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { api } from "~/trpc/server";
import { CandidateProfile } from "./candidate-profile";
import { HeadhunterProfile } from "./headhunter-profile";

export const UserProfiles = async () => {
  const specialist = await api.candidateProfile.getMyProfiles.query();
  const headhunter = await api.recruiterProfile.getMyProfiles.query();

  return (
    <>
      <Tabs defaultValue="specialist" className="h-full space-y-6">
        <div className="space-between flex items-center">
          <TabsList>
            <TabsTrigger value="specialist" className="relative">
              Specialist
            </TabsTrigger>
            <TabsTrigger value="headhunter">Headhunter</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="specialist"
          className="border-none p-0 outline-none"
        >
          <CandidateProfile data={specialist} />
        </TabsContent>
        <TabsContent
          value="headhunter"
          className="border-none p-0 outline-none"
        >
          <HeadhunterProfile data={headhunter} />
        </TabsContent>
      </Tabs>
    </>
  );
};
