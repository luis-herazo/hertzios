import { Typography } from "@mui/material";


const styles = {
    fontSize: 16,
    fontWeight: '500',
    color: '#464545ff',
    fontfamily: 'Roboto',
    paddingBottom: 3
}

interface Props {
    Name: string
}

export default function DescriptionText(props: Props) {
    return <>
        <Typography variant="h4" sx={styles}>
            {props.Name}
        </Typography>
    </>
}