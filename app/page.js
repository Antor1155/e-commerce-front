"use client"
import Featured from "@/components/Featured"
import Header from "@/components/Header"
import axios from "axios"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    axios.get("/api/products?id=" + "64d7d96d55a7e77ee46cb733")
    .then(result => console.log(result))
  }, [])
  
  return (
    <div>
      <Header />
      <Featured />
    </div>
  )
}
