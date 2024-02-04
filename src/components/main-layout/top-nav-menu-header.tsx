import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "~/components/ui/button";
import { type Session } from "next-auth";

interface TopNavMenuHeaderProps {
  session: Session | null;
}

export function TopNavMenuHeader({ session }: TopNavMenuHeaderProps) {
  return (
    <>
      {session && (
        <Button variant="outline" size="icon" disabled>
          <HamburgerMenuIcon />
        </Button>
      )}
      <Link
        href="/"
        className="font-large text-lg transition-colors hover:text-primary"
      >
        <h1>HR Auctions</h1>
      </Link>
    </>
  );
}
