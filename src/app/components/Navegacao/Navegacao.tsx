import Link from "next/link";

interface Props {
  caminho: string;
  descricao: string;
  clasName: string;
  onClick?: () => void;
}

export default function Navegacao({ caminho, descricao, clasName,  onClick }: Props) {
  return (
    <Link 
        href={caminho} 
        className={`h-8 w-full flex justify-center items-center mt-auto ${clasName || ''}`}
        onClick={onClick}
    >
      {descricao}
    </Link>
  );
}
