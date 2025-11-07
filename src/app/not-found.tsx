import Footer from '@/components/landingpage/footer';
import Header from '@/components/landingpage/header';
import RadioNotFoundCard from '@/components/manual-ui/RadioNotFoundCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section id="not-found">

      <Header />
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <RadioNotFoundCard />
        <Link href="/">
          <Button>
            Return Home
          </Button>
        </Link>
      </div>
    </div>
      <Footer />
    </section>
  );
}