import Link from "next/link";

interface Props {
  caminho: string;
  descricao: string;
  clasName: string;
}

export default function Navegacao({ caminho, descricao, clasName }: Props) {
  return (
    <Link 
        href={caminho} 
        className={`h-8 w-30 flex justify-center items-center mt-auto ${clasName || ''}`}
    >
      {descricao}
    </Link>
  );
}
