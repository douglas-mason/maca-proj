import React from "react";
import { Header } from "./_shared/components/header/header.component";

interface Props {}

export const Page404: React.FC<Props> = () => {
  return (
    <div>
      <Header />
      <h1>Page not found</h1>
      <p>
        The content you're looking for probably hasn't been developed yet,
        because who has time for that... amiright?
      </p>
    </div>
  );
};
