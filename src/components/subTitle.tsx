import { Typography } from "@mui/material";


const styles = {
    fontSize: 28,
    fontWeight: '600',
    color: 'var(--color-foreground)',
    fontfamily: 'Roboto',
    paddingBottom: 3
}

interface Props {
    Name: string
}

export default function SubTitle(props: Props) {
    return <>
        <Typography variant="h2" sx={styles}>
            {props.Name}
        </Typography>
    </>
}