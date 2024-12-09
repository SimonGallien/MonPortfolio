import Header from "./_components/Header";
import { Hero } from "./_components/Hero";


export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-4">
        <Hero />
      </main>
    </div>
  );
}

