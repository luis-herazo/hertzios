

import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface ServiceListIconProps {
    title: string;
}

export default function ServiceListIcon({ title }: ServiceListIconProps) {
    return (
        <div>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon sx={{ color: '#2670faff' }}>
                        <CheckCircleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                </ListItemButton>
            </ListItem>
        </div>
    );
}