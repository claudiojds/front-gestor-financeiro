
type Props = {
    description: string;
    htmlFor: string;
    classNama?: string;
}

export default function LabelForm({description, htmlFor, classNama}: Props ){

    return (
        <label 
            htmlFor={htmlFor}
            className={` w-40 h-10.5 flex justify-center items-center rounded  ${classNama || ""}`}
        >
            {description}
        </label>
    )
}