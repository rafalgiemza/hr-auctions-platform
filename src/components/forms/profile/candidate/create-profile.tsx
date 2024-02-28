"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { api } from "~/trpc/react";
import { useToast } from "~/components/ui/use-toast";
import { Input } from "~/components/ui/input";
import { useRouter } from "next/navigation";

const schema = z.object({
  headline: z.string(),
  description: z.string().min(8),
  keyWords: z.string(),
  minSalary: z.string(),
  minSalaryUnit: z.string(),
});

type FormFields = z.infer<typeof schema>;

interface CreateCandidateProfileProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CreateCandidateProfile(props: CreateCandidateProfileProps) {
  const { setOpen } = props;
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const createCandidateProfile = api.candidateProfile.create.useMutation({
    onSuccess: () => {
      setOpen(false);
      router.refresh();
      toast({
        title: "Profile created!",
        description: "",
      });
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      createCandidateProfile.mutate(data);
    } catch (error) {
      toast({
        title: "Something goes wrong :(",
        description: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input {...register("headline")} placeholder="headline" />
      <Textarea {...register("description")} placeholder="description" />
      <Error field={errors.description} />
      <Input {...register("keyWords")} placeholder="keyWords" />
      <Input {...register("minSalary")} placeholder="minSalary" />
      <Input {...register("minSalaryUnit")} placeholder="minSalaryUnit" />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? `Creating...` : `Create specialist profile`}
      </Button>
    </form>
  );
}

const Error = ({ field }: { field: FieldError | undefined }) => {
  if (!field) {
    return null;
  }

  return <div className="text-red-500">{field.message}</div>;
};
