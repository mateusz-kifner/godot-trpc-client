"use client"
import { api } from "@/trpc/react";

export default  function Home() {
  // const product = await ResultAsync.fromPromise(api.product.getAll(), (err) =>
  //   console.log(err),
  // );
  const {data} = api.test.hello.useQuery("world");
  const {data:data2} = api.test.test.hello.useQuery();
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


const cache = {
  "path":{
    loading: false,
    config:null,
    data:{},
    error:{}
  }
}