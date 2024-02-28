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

const schema = z.object({
  title: z.string().min(4),
  description: z.string().min(8),
  price: z.string(),
});

type FormFields = z.infer<typeof schema>;

interface CreateOfferProps {
  auctionId: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CreateOffer(props: CreateOfferProps) {
  const { auctionId, setOpen } = props;
  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const createAuction = api.offer.create.useMutation({
    onSuccess: () => {
      setOpen(false);
      toast({
        title: "Offer created!",
        description: "",
      });
      router.refresh();
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      createAuction.mutate({
        auctionId: auctionId.toString(),
        title: data.title,
        description: data.description,
      });
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
      {errors.title && (
        <div className="text-red-500">{errors.title.message}</div>
      )}
      <Textarea
        {...register("description")}
        placeholder="Description"
        rows={5}
      />
      {errors.description && (
        <div className="text-red-500">{errors.description.message}</div>
      )}
      <Input {...register("price")} placeholder="Price" />
      {errors.price && (
        <div className="text-red-500">{errors.price.message}</div>
      )}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : `Create bid`}
      </Button>
    </form>
  );
}
