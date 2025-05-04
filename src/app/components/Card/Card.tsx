import { ReactNode } from "react";

interface Props {
    clasName: string;
    children?: ReactNode;
}
export default function Card ({clasName, children}: Props) {
    return (
        <div className={`border border-[#D9D9D9] ${clasName || ''}`}>
            {children}
        </div>
    );
};