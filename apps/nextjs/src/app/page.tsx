"use client"
import { api } from "@/trpc/react";
import { RedirectType, redirect } from "next/navigation";

export default  function Home() {
  // const product = await ResultAsync.fromPromise(api.product.getAll(), (err) =>
  //   console.log(err),
  // );
  const {data} = api.test.hello.useQuery("world");
  // redirect("/conf", RedirectType.push);

  return <div>{data}</div>

  // const session = await auth();

  // if (session?.user) {
  //   // void api.post.getLatest.prefetch();
  // }

  // return (
  //   <HydrateClient>
  //     <main className="flex min-h-screen flex-col items-center justify-center">
  //     </main>
  //   </HydrateClient>
  // );
}
