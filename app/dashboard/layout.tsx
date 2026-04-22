import Sidebar from "@/components/Organisms/SiderBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Barre latérale fixe */}
      <Sidebar />

      {/* Zone de contenu principal */}
      <main className="flex-1 flex flex-col">
        {/* Tu peux ajouter une Topbar ici si besoin */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-8 sticky top-0 z-10">
          <h1 className="text-lg font-semibold text-slate-800">
            Espace de travail
          </h1>
        </header>

        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
