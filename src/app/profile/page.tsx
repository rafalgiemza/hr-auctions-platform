import React from "react";
import { BreadCrumbs } from "~/components/main-layout/bread-crumbs";
import { UserProfiles } from "./user-profiles";

export default async function ProfilesPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BreadCrumbs items={["Profile"]} />
      <UserProfiles />
    </div>
  );
}
