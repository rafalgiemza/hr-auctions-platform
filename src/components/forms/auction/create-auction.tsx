"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { api } from "~/trpc/react";
import { useToast } from "~/components/ui/use-toast";
import { Input } from "~/components/ui/input";
import { useRouter } from "next/navigation";
import { Error } from "~/components/shared/forms/error";

const schema = z.object({
  title: z.string().min(4),
  description: z.string().min(8),
  salary: z.string(),
});

type FormFields = z.infer<typeof schema>;

interface CreateAuctionProps {
  userProfileId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CreateAuction(props: CreateAuctionProps) {
  const { setOpen, userProfileId } = props;
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const createAuction = api.auction.create.useMutation({
    onSuccess: () => {
      setOpen(false);
      toast({
        title: "Auction created!",
        description: "",
      });
      router.refresh();
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      createAuction.mutate({ ...data, userProfileId });
    } catch (error) {
      toast({
        title: "Something goes wrong :(",
        description: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input {...register("title")} placeholder="Title" />
      <Error field={errors.title} />

      <Textarea
        {...register("description")}
        placeholder="Description"
        rows={5}
      />
      <Error field={errors.description} />

      <Input {...register("salary")} placeholder="Salary" />
      <Error field={errors.salary} />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : `Create auction`}
      </Button>
    </form>
  );
}
