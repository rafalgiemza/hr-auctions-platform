import React from "react";

interface BreadCrumbsProps {
  items: string[];
}

export function BreadCrumbs({ items }: BreadCrumbsProps) {
  return (
    <div className="flex items-center justify-between space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">
        {items.map((item) => item)}
      </h2>
    </div>
  );
}
