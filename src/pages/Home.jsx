import { Competences } from "../_components/Competences";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import { Hero } from "../_components/Hero";
import { Projets } from "../_components/Projets";
import { Spacing } from "../_components/Spacing";

export default function Home() {
  return (

      <div className="min-h-screen">
        <Header />
        <Spacing size="md" />
        <main className="max-w-screen-xl mx-auto">
          <Hero />
          <Spacing size="md" />
          <Projets />
          <Spacing size="md" />
          <Competences />
          <Spacing size="md" />
        </main>
        <Footer />
        </div>
  );
}

