import type { Metadata } from "next";
import { Box, Container, Typography, Grid, Card, CardContent, List, CardActions, Button } from "@mui/material";

import AppTitle from "../../components/appTitle";
import DescriptionText from "@/components/descriptionText";
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CableIcon from '@mui/icons-material/Cable';
import ServiceListIcon from "@/components/serviceListIcon";

const styles = {
    container1: {
        flexGrow: 1,
        paddingTop: 15,
        paddingBottom: 5
    },
    container2: {
        flexGrow: 1,
        paddingTop: 15,
        paddingBottom: 5,
        alignItems: 'center'
    },
    grid: {
        flexGrow: 1,
        paddingBottom: 5
    },
    button: {
        margin: 1,
        width: 150,
        fontSize: 14,
        textTransform: 'capitalize'
    },
    card: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardContent: {
        flexGrow: 1,
        fontSize: 14,
        fontWeight: '400',
        color: 'var(--color-text-secondary)',
        fontfamily: 'Roboto',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: 'var(--color-text-primary)',
        fontfamily: 'Roboto',

    },
    icon: {
        fontSize: 60,
        color: 'var(--color-primary)',
        paddingBottom: 1
    },
    cardfeedback: {
        fontSize: 15,
        fontWeight: '400',
        color: 'var(--color-text-secondary)',
        fontfamily: 'Roboto',
        flexGrow: 1,
        fontStyle: 'italic'
    },
    avatar: {
        marginTop: 2,
        width: 50,
        height: 50,
        fontSize: 20,
        fontWeight: '600',
        color: 'var(--color-primary)',
        fontfamily: 'Roboto',
    },
    avatarName: {
        marginTop: 2,
        marginLeft: 2,
        fontSize: 16,
        fontWeight: '500',
        color: 'var(--color-text-primary)',
        fontfamily: 'Roboto',
    },
    avatarRol: {
        fontSize: 14,
        fontWeight: '400',
        color: 'var(--color-text-secondary)',
        fontfamily: 'Roboto',
    },
    input: {
        bgcolor: 'var(--color-secondary-light)',
        '& .MuiInputBase-input': {
            color: 'var(--color-white)',
        },
        '& .MuiInputLabel-root': {
            color: 'var(--color-white)',
        },
    },
    ctaCard: {
        padding: 6,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
    }

}

const title = "Nuestros Servicios";
const subtitle = "En Hertzios nos enfocamos en brindarte soluciones innovadoras y personalizadas para optimizar tus procesos y mejorar la eficiencia de tu negocio.";


export const metadata: Metadata = {
    title: "Servicios",
    description:
        "Descubre nuestros servicios: Desarrollo Web/Móvil, Automatización de Procesos e Integración de Sistemas.",
};

export default function Services() {
    return (
        <>
            <Container >
                <Box sx={styles.container2} >
                    <Grid container spacing={2}>
                        <Grid size={12} sx={{ textAlign: 'center' }}>
                            <AppTitle Name={title} ></AppTitle>
                            <DescriptionText Name={subtitle} ></DescriptionText>
                        </Grid>
                        <Grid size={4}>
                            <Card sx={styles.card}>
                                <CardContent>

                                    <CodeIcon sx={styles.icon} />
                                    <Typography sx={styles.cardTitle} component="div">
                                        Desarrollo Web / Móvil
                                    </Typography>
                                    <Typography sx={styles.cardContent}>
                                        Creamos aplicaciones robustas y escalables para satisfacer tus necesidades.
                                    </Typography>
                                    <List>
                                        <ServiceListIcon title="Aplicaciones web" />
                                        <ServiceListIcon title="Aplicaciones móviles" />
                                        <ServiceListIcon title="UX/UI" />
                                        <ServiceListIcon title="Desarrollo de APIs" />
                                        <ServiceListIcon title="Desarrollo de plugins" />
                                        <ServiceListIcon title="Desarrollo de e-commerce" />
                                    </List>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth>Ver más</Button>
                                </CardActions>

                            </Card>
                        </Grid>
                        <Grid size={4}>
                            <Card sx={styles.card}>
                                <CardContent>

                                    <SmartToyIcon sx={styles.icon} />
                                    <Typography sx={styles.cardTitle} component="div">
                                        Automatización de procesos
                                    </Typography>
                                    <Typography sx={styles.cardContent}>
                                        Creamos aplicaciones robustas y escalables para satisfacer tus necesidades.
                                    </Typography>
                                    <List>
                                        <ServiceListIcon title="Automatización de workflows" />
                                        <ServiceListIcon title="Automatización de tareas" />
                                        <ServiceListIcon title="Data analysis" />
                                        <ServiceListIcon title="Date entry & processing" />
                                        <ServiceListIcon title="Automatización de reportes" />
                                        <ServiceListIcon title="Robotic process automation" />
                                    </List>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth>Ver más</Button>
                                </CardActions>

                            </Card>
                        </Grid>
                        <Grid size={4}>
                            <Card sx={styles.card}>
                                <CardContent>

                                    <CableIcon sx={styles.icon} />
                                    <Typography sx={styles.cardTitle} component="div">
                                        Integración de Sistemas
                                    </Typography>
                                    <Typography sx={styles.cardContent}>
                                        Conectamos tus herramientas y plataforma para que funcionen como un sistema unificado.
                                    </Typography>
                                    <List>
                                        <ServiceListIcon title="Integración de APIs" />
                                        <ServiceListIcon title="Conexión CRM / ERP / POS" />
                                        <ServiceListIcon title="Conexión de e-commerce" />
                                        <ServiceListIcon title="Third party integrations" />
                                    </List>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth>Ver más</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Container>
                        <Box sx={styles.container1}>
                            <Card sx={styles.ctaCard}>
                                <CardContent>
                                    <AppTitle Name="Construyamos juntos tu solución" ></AppTitle>
                                    <DescriptionText Name={subtitle} ></DescriptionText>
                                    <Button >Contáctanos</Button>
                                </CardContent>
                            </Card>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </>
    )
}