export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900">
          Bienvenue sur votre Dashboard
        </h2>
        <p className="text-slate-500 mt-2">
          Sélectionnez un projet ou créez une nouvelle tâche pour commencer.
        </p>
      </div>

      {/* Emplacement futur du Kanban */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-64 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-400">
          Colonne À Faire
        </div>
        <div className="h-64 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-400">
          Colonne En Cours
        </div>
        <div className="h-64 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-slate-400">
          Colonne Terminé
        </div>
      </div>
    </div>
  );
}
