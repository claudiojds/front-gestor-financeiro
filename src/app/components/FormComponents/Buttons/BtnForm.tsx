
type Props = {
    className?: string;
    description: string;
    type?: "button" | "submit" | "reset";
}

export default function BtnForm ({description, className, type }: Props) {
    

    return (
        <button
            type={type }
            className={`border bord-2 border-gray-300 rounded-sm h-10.5 hover:bg-[#D9D9D9] cursor-pointer ${className || ""}`}
        >
            {description}
        </button>
    )
}