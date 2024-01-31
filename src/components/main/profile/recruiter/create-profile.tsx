"use client";

import { useRouter } from "next/navigation";

import { api } from "~/trpc/react";

export function CreateRecruiterProfile({description = 'recruiter description'}) {
  const router = useRouter();

  const createRecruiterProfile = api.recruiterProfile.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createRecruiterProfile.mutate({ description });
      }}
      className="flex flex-col gap-2"
    >
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createRecruiterProfile.isLoading}
      >
        {createRecruiterProfile.isLoading ? "creating..." : `Create recruiter profile (${description})`}
      </button>
    </form>
  );
}
