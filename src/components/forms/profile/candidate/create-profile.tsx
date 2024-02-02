"use client";

import { useRouter } from "next/navigation";

import { api } from "~/trpc/react";

export function CreateCandidateProfile({description = 'candidate description'}) {
  const router = useRouter();

  const createCandidateProfile = api.candidateProfile.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createCandidateProfile.mutate({ description });
      }}
      className="flex flex-col gap-2"
    >
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createCandidateProfile.isLoading}
      >
        {createCandidateProfile.isLoading ? "creating..." : `Create candidate profile (${description})`}
      </button>
    </form>
  );
}
