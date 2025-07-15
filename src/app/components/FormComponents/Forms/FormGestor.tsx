import { ReactNode } from "react"

type Props = {
    children: ReactNode;
    clasName?: string;

}

export default function FormGestor({children, clasName}: Props){

    return(
        <form
            className={`p-3 flex gap-2 ${clasName || ""}`}
        >
            {children}
        </form>
    )
}