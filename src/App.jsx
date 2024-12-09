import Header from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "./_components/Spacing";


export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Spacing size="md" />
      <main className="max-w-screen-xl mx-auto">
        <Hero />
      </main>
    </div>
  );
}

