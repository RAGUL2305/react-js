import React from "react";
import Details from "./def";
import FormProvider from "./abc";

const data = ["Football", "Basketball", "Tennis","Cricket","Vollyball"];

const Output = () => {
 return( 
 <FormProvider>
    <Details data={data} />
  </FormProvider>
 );
};
export {Output, data};
