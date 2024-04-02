import React from "react";
import { BasicInformations } from "./basic-info";
import { CandidateProfileCard } from "./candidate-profile-card";
import { CreateSpecialistProfileBtn } from "./create-specialist-profile-btn";

interface CandidateProfileProps {
  id: string;
  image: string | null;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  candidateProfiles: {
    headline: string | null;
    description: string | null;
    keyWords: string | null;
    minSalary: string | null;
    minSalaryUnit: string | null;
    id: number;
    userId: string;
  }[];
}

export const CandidateProfile = (props: { data: CandidateProfileProps }) => {
  const user = props.data;

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
