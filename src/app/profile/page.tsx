import { CreateCandidateProfile } from "~/components/forms/profile/candidate/create-profile";
import { CreateRecruiterProfile } from "~/components/forms/profile/recruiter/create-profile";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">      
      <CreateCandidateProfile />
      <CreateRecruiterProfile />
    </main>
  )
}