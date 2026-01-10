"use client";

interface Props {
    Name: string
}

export default function DescriptionText(props: Props) {
    return (
        <p className="text-lg font-medium text-muted-foreground pb-6">
            {props.Name}
        </p>
    )
}