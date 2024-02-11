import { CreateCandidateProfile } from "~/components/forms/profile/candidate/create-profile";
import { CreateRecruiterProfile } from "~/components/forms/profile/recruiter/create-profile";
import { BreadCrumbs } from "~/components/main-layout/bread-crumbs";
import { ResponsiveDialog } from "~/components/shared/responsive-dialog";

export default async function ProfilesPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <BreadCrumbs items={["Profiles"]} />

      <ResponsiveDialog title="CreateCandidateProfile">
        <CreateCandidateProfile />
      </ResponsiveDialog>

      <ResponsiveDialog title="CreateRecruiterProfile">
        <CreateRecruiterProfile />
      </ResponsiveDialog>
    </div>
  );
}
