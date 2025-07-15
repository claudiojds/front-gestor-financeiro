
type Props = {
    className?: string;
    description: string;
}

export default function ButtonSubmit ({description, className}: Props) {
    

    return (
        <button
            className={`border bord-2 border-gray-300 rounded-sm h-10.5 hover:bg-[#D9D9D9] cursor-pointer ${className || ""}`}
        >
            {description}
        </button>
    )
}