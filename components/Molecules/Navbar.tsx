import { NAV_ITEMS } from "@/consts/landingpage.consts";
import { ChevronButton } from "../atoms/ChevronButton";
import { LargeButton } from "../atoms/LargeButton";
import { TextButton } from "../atoms/TextButton";

export const Navbar = () => {
  return (
    <div className="w-full flex justify-between px-7 py-4">
      <p className="text-blue-400 font-bold text-3xl w-60">xylo</p>

      <div className="flex items-center gap-5">
        <ChevronButton />
        {NAV_ITEMS.map((item, idx) => (
          <TextButton label={item} key={idx} />
        ))}
      </div>

      <div className="flex justify-between w-60">
        <TextButton label="Connexion" />
        <LargeButton label="S'inscrire" />
      </div>
    </div>
  );
};
