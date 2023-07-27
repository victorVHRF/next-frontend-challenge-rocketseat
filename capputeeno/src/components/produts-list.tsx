"use client"
import { useProducts } from "@/hooks/useProducts"

interface ProdutsListProps {

}

export function ProdutsList(props: ProdutsListProps) {
  const { data } = useProducts()

  return (
    <></>
  )
}