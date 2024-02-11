import Link from "next/link";
import { AlertNoProfile } from "~/components/alert/no-profile";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();
  const links = [
    {
      url: "/dashboard",
      label: "dashboard",
      disabled: false,
    },
    {
      url: "/mail",
      label: "mail",
      disabled: false,
    },
    {
      url: "/music",
      label: "music",
      disabled: false,
    },
    {
      url: "/auctions",
      label: "AUCTIONS",
      disabled: session === null,
    },
    {
      url: "/profiles",
      label: "PROFILES",
      disabled: session === null,
    },
    {
      url: "/T3",
      label: "T3",
      disabled: false,
    },
  ];

  const recruiterProfile = await api.recruiterProfile.getAll.query();

  const candidateProfile = await api.candidateProfile.getAll.query();

  const showAlert =
    session !== null &&
    (recruiterProfile.length === 0 || candidateProfile.length === 0);

  return (
    <>
      <AlertNoProfile showAlert={showAlert} />
      <Table>
        <TableCaption>Side map</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {links.map((item) => {
            return (
              <TableRow key={item.url}>
                <TableCell className="font-medium">
                  {item.disabled ? (
                    <p>You need to login to go to: {item.label}</p>
                  ) : (
                    <Link
                      href={item.url}
                      className="rounded-full bg-white/10 px-3 py-3 font-semibold no-underline transition hover:bg-white/20 md:px-10"
                    >
                      {item.label}
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
