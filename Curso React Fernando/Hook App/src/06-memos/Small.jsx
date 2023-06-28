import { memo, useState } from "react";

export const Small = memo(({ value }) => {

  console.log("Desde Memo");

  return <small>{value}</small>;
});
