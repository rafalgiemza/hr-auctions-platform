import { BellRing, Check } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";
import { PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card>;

export function CreateProfileCTA({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>No profile detected...</CardTitle>
        <CardDescription>
          To see your dashboard you need to create a profile
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Link href={"/profile"} className="w-full">
          <Button>Go to profile creation</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
