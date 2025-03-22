import DonationPage from "@/components/donation-page"
import type { Metadata } from "next"
import { translations } from "@/lib/i18n"

export const metadata: Metadata = {
  title: translations.en.title,
  description: translations.en.description,
}

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <DonationPage />
    </main>
  )
} 