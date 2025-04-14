import Hero from "@/components/Hero";
import ComplaintForm from "@/components/ComplaintForm";
import { MILLA_BASE } from "@/lib/config";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero
          title="LIBRO DE RECLAMACIONES"
          subtitle=""
          description=""
          src={MILLA_BASE + "/webImages/Libro de Reclamaciones"}
          height="h-[300px]"
          gradient={true}
          complaint={true}
        />
        <ComplaintForm />
      </main>
    </div>
  );
}
