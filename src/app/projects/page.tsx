import { Box, Container, Grid, Card, CardContent, Typography, Button, CardActions, CardMedia } from "@mui/material";
import AppTitle from "../../components/appTitle";
import DescriptionText from "@/components/descriptionText";

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
    card: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardContent: {
        flexGrow: 1,
        fontSize: 16,
        fontWeight: '400',
        color: '#6b6b6bff',
        fontfamily: 'Roboto',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#464545ff',
        fontfamily: 'Roboto',
    },
    cardMedia: {
        height: 200, // Fixed height for the image
    }
};

const title = "Nuestros Proyectos";
const description = "Aquí puedes ver algunos de los proyectos en los que hemos trabajado. Nos enorgullecemos de entregar soluciones de alta calidad que cumplen con las expectativas de nuestros clientes.";

export default function ProjectsPage() {
    return (
        <Container>
            <Box sx={styles.container1}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                        <AppTitle Name={title} />
                        <DescriptionText Name={description} />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={styles.container2}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card sx={styles.card}>
                            <CardMedia
                                sx={styles.cardMedia}
                                image="https://picsum.photos/300/200"
                                title="InnovaTech Dashboard"
                            />
                            <CardContent>
                                <Typography sx={styles.cardTitle} component="div">
                                    InnovaTech Dashboard
                                </Typography>
                                <Typography sx={styles.cardContent}>
                                    Desarrollamos un dashboard personalizado para InnovaTech que les permite monitorear sus operaciones en tiempo real. La solución integra datos de múltiples fuentes y los presenta de una manera clara y concisa.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Ver Proyecto</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card sx={styles.card}>
                            <CardMedia
                                sx={styles.cardMedia}
                                image="https://picsum.photos/300/200"
                                title="Logística Global App"
                            />
                            <CardContent>
                                <Typography sx={styles.cardTitle} component="div">
                                    Logística Global App
                                </Typography>
                                <Typography sx={styles.cardContent}>
                                    Creamos una aplicación móvil para Logística Global que optimiza la gestión de sus rutas de entrega. La aplicación ha ayudado a la empresa a reducir costos y mejorar la eficiencia de sus operaciones.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Ver Proyecto</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Card sx={styles.card}>
                            <CardMedia
                                sx={styles.cardMedia}
                                image="https://picsum.photos/300/200"
                                title="E-commerce para RetailCo"
                            />
                            <CardContent>
                                <Typography sx={styles.cardTitle} component="div">
                                    E-commerce para RetailCo
                                </Typography>
                                <Typography sx={styles.cardContent}>
                                    Desarrollamos una plataforma de e-commerce completa para RetailCo, incluyendo un sistema de gestión de inventario y un procesador de pagos. La plataforma ha permitido a la empresa expandir su negocio en línea.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Ver Proyecto</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
