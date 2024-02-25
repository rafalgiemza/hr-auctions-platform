import React from "react";
// import Image from "next/image";

import { Sidebar } from "~/components/layouts/main/sidebar";
import { type PropsWithChildren } from "react";

import { api } from "~/trpc/server";

export const Wrapper = async ({ children }: PropsWithChildren) => {
  const myCandidateProfile = await api.candidateProfile.getMyProfiles.query();
  console.log("🚀 ~ Wrapper ~ myCandidateProfile:", myCandidateProfile);

  const myRecruiterProfile = await api.candidateProfile.getMyProfiles.query();
  console.log("🚀 ~ Wrapper ~ myRecruiterProfile:", myRecruiterProfile);

  return (
    <>
      <div className="md:hidden">
        {/* <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        /> */}
      </div>
      <div className="hidden md:block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
