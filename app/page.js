"use client"
import Featured from "@/components/Featured"
import Header from "@/components/Header"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get("/api/products?id=" + "64d7d96d55a7e77ee46cb733")
    .then(result => setProduct(result.data))
  }, [])

  return (
    <div>
      <Header />
      <Featured product={product} />
    </div>
  )
}
