import React from "react";
import { BasicInformations } from "./basic-info";
import { CandidateProfileCard } from "./candidate-profile-card";
import { HeadhunterProfileCard } from "./headhunter-profile-card";
import { CreateHeadhunterProfileBtn } from "./create-headhunter-profile-btn";

interface CandidateProfileProps {
  name: string | null;
  email: string;
  image: string | null;
  id: string;
  emailVerified: Date | null;
  recruiterProfiles: {
    id: number;
    description: string | null;
    userId: string;
    company: string | null;
    verified: boolean | null;
  }[];
}

export const HeadhunterProfile = (props: { data: CandidateProfileProps[] }) => {
  const user = props.data.at(0);

  if (!user) return null;

  const { name, email, image, recruiterProfiles } = user;

  if (recruiterProfiles.length === 0) {
    return <CreateHeadhunterProfileBtn />;
  }

  return (
    <div className="grid gap-6">
      <BasicInformations name={name} email={email} image={image} />
      <HeadhunterProfileCard profile={recruiterProfiles[0]} />
    </div>
  );
};
