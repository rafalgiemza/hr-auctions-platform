import React from "react";
import { BasicInformations } from "./basic-info";
import { CandidateProfileCard } from "./candidate-profile-card";
import { CreateSpecialistProfileBtn } from "./create-specialist-profile-btn";

interface CandidateProfileProps {
  id: string;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  image: string | null;
  candidateProfiles: {
    id: number;
    headline: string;
    description: string;
    keyWords: string;
    minSalary: string;
    minSalaryUnit: string;
    userId: string;
  }[];
}

export const CandidateProfile = (props: { data: CandidateProfileProps[] }) => {
  const user = props.data.at(0);

  if (!user) return null;

  const { name, email, image, candidateProfiles } = user;

  if (candidateProfiles.length === 0) {
    return <CreateSpecialistProfileBtn />;
  }

  return (
    <div className="grid gap-6">
      <BasicInformations name={name} email={email} image={image} />
      <CandidateProfileCard profile={candidateProfiles[0]} />
    </div>
  );
};
