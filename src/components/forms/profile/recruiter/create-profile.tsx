"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { api } from "~/trpc/react";
import { useToast } from "~/components/ui/use-toast";

const schema = z.object({
  description: z.string().min(8),
});

type FormFields = z.infer<typeof schema>;

interface CreateRecruiterProfileProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CreateRecruiterProfile(props: CreateRecruiterProfileProps) {
  const { setOpen } = props;

  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const createRecruiterProfile = api.recruiterProfile.create.useMutation({
    onSuccess: () => {
      setOpen(false);
      toast({
        title: "Profile created!",
        description: "",
      });
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      createRecruiterProfile.mutate(data);
    } catch (error) {
      toast({
        title: "Something goes wrong :(",
        description: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Textarea {...register("description")} />
      {errors.description && (
        <div className="text-red-500">{errors.description.message}</div>
      )}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : `Create recruiter profile`}
      </Button>
    </form>
  );
}
