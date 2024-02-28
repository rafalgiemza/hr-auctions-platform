import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

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
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm font-medium leading-none">{description}</p>
              <p className="text-sm font-medium leading-none">{company}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
