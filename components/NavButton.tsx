interface NavButtonProps {
  onClick: () => void;
  text: any;
}

export default function NavButton({ onClick, text }: NavButtonProps) {
  return (
    <button
      className="cursor-pointer px-6 py-3 rounded-xlfont-medium group text-stone-400 hover:text-[#2B2231]"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <div className="group-hover:-translate-y-7 flex flex-row gap-1 items-center duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {text}
        </div>
        <div className="absolute top-7 left-0 flex flex-row gap-1 items-center group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {text}
        </div>
      </div>
    </button>
  );
}