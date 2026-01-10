"use client";

interface Props {
    Name: string
}

export default function SubTitle(props: Props) {
    return (
        <h2 className="text-2xl md:text-3xl font-semibold pb-6 tracking-tight text-foreground">
            {props.Name}
        </h2>
    )
}