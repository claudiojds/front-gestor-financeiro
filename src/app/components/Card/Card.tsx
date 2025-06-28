'use client';
import { ReactNode } from "react";

interface Props {
    clasName: string;
    children?: ReactNode;
}
export default function Card ({clasName, children}: Props) {
    return (
        <div className={`rounded-md ${clasName || ''}`}>
            {children}
        </div>
    );
};