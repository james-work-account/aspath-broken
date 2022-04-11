import { useRouter } from "next/router";
import React from "react";

const Custom404: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Your route is {router.asPath}</h1>
    </div>
  );
};

export default Custom404;
