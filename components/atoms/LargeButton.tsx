import clsx from "clsx";

interface LargeButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
}

export const LargeButton = ({
  className,
  label,
  onClick,
}: LargeButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        "cursor-pointer px-7 py-4 hover:bg-neutral-100 bg-white text-black font-bold rounded-full hover:shadow-xs",
      )}
    >
      {label}
    </button>
  );
};
