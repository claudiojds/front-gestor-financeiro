
type Props = {
    type: string;
    placeholder: string;
    className?: string;
}

export default function InputForm({type, placeholder,className}: Props) {

    return (
        <input 
            type={type}
            placeholder={placeholder}
            className={`form-input block w-[250] h-10.5 rounded border border-gray-300 focus:outline-none px-3 py-2 ${className || ""}`}
        />
    )
}