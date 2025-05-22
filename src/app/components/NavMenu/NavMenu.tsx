import { ReactNode } from "react";

type Props = {
    children?: ReactNode
}

export default function NavMenu ({children}: Props) {
    return(
        <div className="bg-[#D9D9D9] w-full h-12 flex justify-evenly items-end rounded-t-md">
            {children}
        </div>
    );
};