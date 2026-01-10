"use client";

interface Props {
    Name: string
}

export default function AppTitle(props: Props) {
    return (
        <h1 className="text-4xl md:text-5xl font-bold pb-6 tracking-tight text-foreground">
            {props.Name}
        </h1>
    )
}