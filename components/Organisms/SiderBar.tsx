"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Tableau de bord", href: "/", icon: "📊" },
  { name: "Mes Projets", href: "/projects", icon: "📁" },
  { name: "Tâches", href: "/tasks", icon: "✅" },
  { name: "Équipe", href: "/team", icon: "👥" },
  { name: "Paramètres", href: "/settings", icon: "⚙️" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <h2 className="text-xl font-bold text-blue-600 flex items-center gap-2">
          <span>🚀</span> Projex.ai
        </h2>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
            U
          </div>
          <span className="truncate">Utilisateur</span>
        </div>
      </div>
    </aside>
  );
}
