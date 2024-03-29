import { CheckCircle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

interface CandidateProfileCardProps {
  headline: string | null;
  description: string | null;
  keyWords: string | null;
  minSalary: string | null;
  minSalaryUnit: string | null;
  id: number;
  userId: string;
}

export function CandidateProfileCard(props: {
  profile: CandidateProfileCardProps | undefined;
}) {
  const { profile } = props;

  if (!profile) return null;

  const { headline, description, keyWords, minSalary, minSalaryUnit } = profile;

  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-4">
          <CardTitle>{headline}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm ">
          <div className="flex items-center gap-4 py-4">
            {keyWords?.split(",").map((item) => (
              <div className="flex items-center" key={item}>
                <CheckCircle className="mr-1 h-3 w-3 " />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 text-sm ">
          <div className="flex items-center">
            {`Minimum salary: ${minSalary} ${minSalaryUnit}`}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
