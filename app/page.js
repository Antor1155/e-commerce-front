"use client"
import Featured from "@/components/Featured"
import Header from "@/components/Header"
import NewProducts from "@/components/NewProducts"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
  const [product, setProduct] = useState({})
  const [newProducts, setNewProducts] = useState([])

  useEffect(() => {
    axios.get("/api/products?id=" + "64d7d96d55a7e77ee46cb733")
    .then(result => setProduct(result.data))

    axios.get("/api/products")
    .then(result => setNewProducts(result.data))
  }, [])

  return (
    <div>
      <Header />
      <Featured product={product} />
      <NewProducts />
    </div>
  )
}
