import Header from '@/components/Header'
import HeroNew from '@/components/HeroNew'
import AboutNew from '@/components/AboutNew'
import ServicesNew from '@/components/ServicesNew'
import NewsSection from '@/components/NewsSection'
import ReviewsNew from '@/components/ReviewsNew'
import ContactNew from '@/components/ContactNew'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroNew />
        <AboutNew />
        <ServicesNew />
        <NewsSection />
        <ReviewsNew />
        <ContactNew />
        <FloatingButtons />
      </main>
    </>
  )
}