
type Props = {
    type: string;
    placeholder?: string;
    className?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputForm({type, placeholder,className, value, onChange}: Props) {

    return (
        <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`form-input block w-[250] h-10.5 rounded border border-gray-300 focus:outline-none px-3 py-2 ${className || ""}`}
        />
    )
}