import React from "react";
import { UserNav } from "~/components/main-layout/user-nav";
import { ThemeModeToggle } from "~/components/main-layout/theme-mode-toggle";
import { LanguageToggle } from "~/components/main-layout/language-toggle";
import { TopNavMenuHeader } from "~/components/main-layout/top-nav-menu-header";
import { getServerAuthSession } from "~/server/auth";

export async function TopNavMenu() {
  const session = await getServerAuthSession(); //TODO: Use authProvider instead
  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center space-x-4">
            <TopNavMenuHeader session={session} />
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <ThemeModeToggle />
            <LanguageToggle />
            <UserNav session={session} />
          </div>
        </div>
      </div>
    </>
  );
}
