"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            // Redirige l'utilisateur vers la home après confirmation (si activée)
            emailRedirectTo: `${window.location.origin}/`,
          },
        });

        if (error) throw error;

        alert("Compte créé ! Connectez-vous maintenant.");
        setIsSignUp(false);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;

        router.push("/dashboard");
        router.refresh();
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-slate-200">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            {isSignUp ? "Créer un compte" : "Bienvenue"}
          </h1>
          <p className="text-slate-500 mt-2">
            {isSignUp
              ? "Rejoignez votre équipe dès aujourd'hui"
              : "Connectez-vous pour gérer vos tâches"}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="votre@email.com"
              className="w-full p-3 border border-slate-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Corrigé !
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">
              Mot de passe
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 border border-slate-300 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Corrigé !
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading
              ? "Patientez..."
              : isSignUp
                ? "S'inscrire"
                : "Se connecter"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            {isSignUp
              ? "Déjà un compte ? Connectez-vous"
              : "Pas de compte ? Inscrivez-vous gratuitement"}
          </button>
        </div>
      </div>
    </div>
  );
}
