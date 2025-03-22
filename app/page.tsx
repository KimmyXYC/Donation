import DonationPage from "@/components/donation-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "给 Kimmy 捐赠",
  description: "支持 Kimmy 的捐赠页面",
}

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <DonationPage />
    </main>
  )
}

