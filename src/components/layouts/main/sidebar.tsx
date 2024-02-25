import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { playlists } from "~/components/music/data/playlists";
import { defaultContent } from "./sidebar-content";
import Link from "next/link";

export const Sidebar = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className } = props;
  const active = false;

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            {defaultContent.at(0)?.label}
          </h2>
          <div className="space-y-1">
            {defaultContent.at(0)?.items.map((item, index) => {
              const btnVariant = active ? "secondary" : "ghost";
              console.log("🚀 ~ {defaultContent.at ~ item.icon:", item.icon);
              return (
                <Link href={item.link} key={index}>
                  <Button variant={btnVariant} className="w-full justify-start">
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
