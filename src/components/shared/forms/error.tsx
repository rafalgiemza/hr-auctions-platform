import React from "react";
import { FieldError } from "react-hook-form";

export const Error = ({ field }: { field: FieldError | undefined }) => {
  if (!field) {
    return null;
  }

  return <div className="text-red-500">{field.message}</div>;
};
