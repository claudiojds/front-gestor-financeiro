import { ReactNode } from "react"

type Props = {
    children: ReactNode;
    clasName?: string;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
}

export default function FormGestor({children, clasName, onSubmit}: Props){

    return(
        <form
            className={`p-3 flex gap-2 ${clasName || ""}`}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )
}