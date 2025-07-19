

type Props = {
    className: string;
    nome: string;
}

export default function SelctForm({className, nome}: Props) {

    return(
        <select 
            name={nome} 
            id=""
            className={`block w-[250] h-10.5 rounded border border-gray-300 px-3 py-2 focus:outline-none ${className || ""}`}
        >
            <option value="someOption" className="bg-transparent hover:bg-gray-50 " ></option>
            <option value="otherOption" className="hover:bg-gray-50" >FIXO</option>
            <option value="otherOption" className="hover:bg-gray-50" >VARIAVEL</option>
        </select>
    )
}