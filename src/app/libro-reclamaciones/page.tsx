import Header from "@/components/halternativo";
import Hero from "@/components/Hero";
import Footer from "@/components/falternativo";
import ComplaintForm from "@/components/ComplaintForm";
import { MILLA_BASE } from "@/lib/config";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero
          title="LIBRO DE RECLAMACIONES"
          subtitle=""
          description=""
          src={
            MILLA_BASE +
            "/transportes/administradorweb/hero_libro_reclamaciones.png"
          }
          height="h-[400px]"
          gradient={true}
          complaint={true}
        />
        <ComplaintForm />
      </main>
    </div>
  );
}
