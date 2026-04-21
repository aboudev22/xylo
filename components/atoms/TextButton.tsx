import clsx from "clsx";

interface TextButtonProps {
  /**
   * Texte affiché dans le bouton
   */
  label: string;

  /**
   * Classes Tailwind additionnelles pour personnaliser le bouton
   */
  className?: string;

  /**
   * Fonction appelée lors du clic sur le bouton
   */
  onClick?: () => void;

  /**
   * Désactive le bouton si true
   */
  disabled?: boolean;
}

export const TextButton = ({
  className,
  onClick,
  label,
  disabled = false,
}: TextButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "font-bold cursor-pointer text-white transition-colors",
        "hover:opacity-80 active:scale-[0.98]",
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      type="button"
    >
      {label}
    </button>
  );
};
