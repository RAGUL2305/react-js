import React from "react";
import FormData from "./formdata";
import Contents from "./contents";
import FormProvider from "./provider";

export default function Output(){
  return (
    <FormProvider>
      <FormData />
      <Contents />
    </FormProvider>
  );
};
