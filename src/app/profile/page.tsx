import { CreateCandidateProfile } from "~/components/main/profile/candidate/create-profile";
import { CreateRecruiterProfile } from "~/components/main/profile/recruiter/create-profile";
import { getServerAuthSession } from "~/server/auth";


export default async function Home() {
  const session = await getServerAuthSession();
  console.log("🚀 ~ Home ~ session:", session)

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">      
      <CreateCandidateProfile />
      <CreateRecruiterProfile />
    </main>
  )
}