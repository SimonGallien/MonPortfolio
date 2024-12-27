import { Competences } from "../_components/Competences";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import { Hero } from "../_components/Hero";
import { Projets } from "../_components/Projets";
import { Spacing } from "../_components/Spacing";
import projects from '../data/data.json';
import { TitreH2 } from "../_components/TitreH2";

export default function Home() {
  return (
      <>
        <div className="min-h-screen max-w-[1280px] w-full m-auto p-3">
          <Header />
          <Spacing size="md" />
          <main className="max-w-screen-xl mx-auto">
            <Hero />
            <Spacing size="md" />
            <TitreH2 titre="Portfolio" id="projets"/>
            <p className="text-5xl mb-12">Sélection de projets</p>
            <div className="flex flex-col w-full place-content-between">
              <section className="grid grid-cols-1 gap-12">
                {projects.map((project)=>(
                  <Projets key={project.id} project={project}/>
                ))}
              </section>
            </div>
            <Spacing size="md" />
            <Competences />
            <Spacing size="md" />
          </main>
          <Footer />
        </div>
      </>

  );
}

