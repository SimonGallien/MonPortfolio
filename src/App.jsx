import { Competences } from "./_components/Competences";
import { Contact } from "./_components/Contact";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Projets } from "./_components/Projets";
import { Spacing } from "./_components/Spacing";
import { TimeLine } from "./_components/TimeLine";


export default function App() {
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
        <TimeLine />
        <Spacing size="md" />
        <Contact />
        <Spacing size="md" />
      </main>
      <Footer />
    </div>
  );
}

