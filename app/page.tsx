import React from "react";

export default async function Home() {

  await new Promise(r=>setTimeout(r,10000));
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
