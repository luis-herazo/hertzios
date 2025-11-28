import { Typography } from "@mui/material";


const styles = {
    color: 'var(--color-foreground)',
    fontSize: 48,
    fontfamily: 'Roboto',
    fontWeight: '600',
    paddingBottom: 3

}

interface Props {
    Name: string
}

export default function AppTitle(props: Props) {
    return <>
        <Typography variant="h1" sx={styles}>
            {props.Name}
        </Typography>
    </>
}