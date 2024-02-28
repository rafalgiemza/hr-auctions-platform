import { Building2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface HeadhunterProfileCardProps {
  id: number;
  description: string | null;
  userId: string;
  company: string | null;
  verified: boolean | null;
}

export function HeadhunterProfileCard(props: {
  profile: HeadhunterProfileCardProps | undefined;
}) {
  const { profile } = props;

  if (!profile) return null;

  const { description, company } = profile;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Headhunter profile</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex space-x-4 text-sm ">
          <div className="flex items-center gap-4 py-4">
            <div className="flex items-center">
              <Building2 className="mr-1 h-3 w-3 " />
              {company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
