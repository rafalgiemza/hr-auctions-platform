import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

interface BasicInformationsProps {
  name: string | null;
  email: string;
  image: string | null;
}

export function BasicInformations(props: BasicInformationsProps) {
  const { name, email, image } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic informations</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              {image && <AvatarImage src={image} />}
              <AvatarFallback>
                {name
                  ?.split(" ")
                  .map((word) => word.at(0))
                  .join("")
                  .toLocaleUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{name}</p>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
