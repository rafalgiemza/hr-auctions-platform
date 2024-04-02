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

export function CreateAccountCTA({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>Only for registered users</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <PersonIcon />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Registratation took only few seconds,
            </p>
            <p className="text-sm text-muted-foreground">
              {`and it's free, so what do you waiting for?`}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={"/api/auth/signin"} className="w-full">
          <Button>Sign in or register for free!</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
