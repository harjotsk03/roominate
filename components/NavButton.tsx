interface NavButtonProps {
  onClick: () => void;
  text: string;
}

export default function NavButton({ onClick, text }: NavButtonProps) {
  return <button className="hover:cursor-pointer" onClick={onClick}>{text}</button>;
}
