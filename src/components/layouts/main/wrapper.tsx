import React, { type PropsWithChildren } from "react";
import { Sidebar } from "~/components/layouts/main/sidebar";

export const Wrapper = async ({ children }: PropsWithChildren) => {
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
      <div className="grid h-screen grid-cols-[minmax(150px,_200px)_1fr_300px] gap-x-4 border-t bg-background ">
        <Sidebar />
        <div className="border-l">
          <div className="h-full px-4 py-6 lg:px-8">{children}</div>
        </div>
        <aside className="border-l p-4">Partners placeholder</aside>
      </div>
    </>
  );
};
