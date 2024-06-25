"use client"

import { api } from "@/trpc/react"

export default function Test() {
  const {data} = api.test.test.useQuery()
  return <p>{data}</p>
}