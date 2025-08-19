import Header from './Header';
import HeroImage from './HeroImage';
import Hero from './Hero';
import WebImage from './WebImage';
import Features from './Features';
import CustomerReview from './CustomerReview';
import PackageSelection from './PackageSelection';
import Contact from './Contact';
import FAQ from './FAQ';


export default function Home() {
  return (
    <main>
      <Header />
      <HeroImage />
      <Hero />
      <WebImage />
      <Features />
      <CustomerReview />
      <FAQ />
      
      {/* Ensure PackageSelection is included after ImageGallery */}
      <PackageSelection />
      <Contact />
      {/* Add other components or sections as needed */}

    </main>
  );
}