"use client"
import styles from './page.module.css'
import { FilterBar } from '@/components/filter-bar'
import { ProdutsList } from '@/components/produts-list'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function Home() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <main className={styles.main}>
        <FilterBar />
        <ProdutsList />
      </main>
    </QueryClientProvider>
  )
}
