import type { Metadata } from "next";
import { Box, Container, Grid, Skeleton, Button, Card, CardContent, Typography, Avatar, TextField } from "@mui/material";
import AppTitle from "../../components/appTitle";
import SubTitle from "../../components/subTitle";
import DescriptionText from "@/components/descriptionText";
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CableIcon from '@mui/icons-material/Cable';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


const title = 'Potenciamos tu negocio con soluciones de software a medida'
const description = 'Ahorra tiempo, optimiza procesos y escala tus operaciones con nuestras automatizaciones e integraciones.'
const subtitle = 'Nuestras Soluciones para tu empresa'

const styles = {
    img: {
        width: '100%',
        height: 'auto',
        maskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 100%)',
    },
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
    skeleton: {
        width: '100%',
        height: 300
    },
    card: {
        width: '100%',
        height: 200
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
    }

}

export const metadata: Metadata = {
    title: "Inicio",
    description:
        "Potenciamos tu negocio con soluciones de software a medida. Desarrollo web, automatización e integración de sistemas.",
};

export default function Homepage() {
    return (
        <>
            <Container >

                {/* Section 1  Hero Section*/}
                <Box sx={styles.container1} >
                    <Grid container spacing={2}>
                        <Grid sx={styles.grid} size={7}>
                            <AppTitle Name={title} />
                            <DescriptionText Name={description} />
                            <Button
                                href="/services"
                                variant="contained"
                                sx={styles.button}> Ver Servicios
                            </Button>
                            <Button
                                href="/contact"
                                variant="outlined"
                                sx={styles.button}>Contactar
                            </Button>
                        </Grid>
                        <Grid sx={styles.grid} size={5}>
                            <Box sx={styles.img}>
                                <img src="/home.png" alt="Hertzios" />
                            </Box>
                        </Grid>

                    </Grid>
                </Box>

                {/* Section 2  Nuestras Soluciones*/}
                <Box sx={styles.container2} >
                    <Grid container spacing={2}>
                        <Grid size={12} sx={{ textAlign: 'center' }}>
                            <SubTitle Name={subtitle} ></SubTitle>
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
                                </CardContent>

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
                                </CardContent>

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
                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/* Section 3 Como trabajamos*/}
                <Box sx={styles.container2} >
                    <Grid container spacing={2}>
                        <Grid size={12} sx={{ textAlign: 'center' }}>
                            <SubTitle Name={'Cómo trabajamos'} ></SubTitle>
                            <DescriptionText Name={'Nuestro proceso esta diseñado para que sea transparente, colaborativo y centrado en tus resultados. Te acompañamos en cada paso del camino.'} />
                        </Grid>
                        <Grid size={4} sx={{ textAlign: 'center' }}>
                            <TipsAndUpdatesIcon sx={styles.icon} />
                            <Typography sx={styles.cardTitle} component="div">
                                1. Descubrimiento
                            </Typography>
                            <Typography sx={styles.cardContent}>
                                Analizamos tus necesidades y definimos los objetivos clave del proyecto para asegurar el éxito.
                            </Typography>

                        </Grid>
                        <Grid size={4} sx={{ textAlign: 'center' }}>
                            <DesignServicesIcon sx={styles.icon} />
                            <Typography sx={styles.cardTitle} component="div">
                                2. Desarrollo
                            </Typography>
                            <Typography sx={styles.cardContent}>
                                Diseño y desarrollo de la solución, implementando las mejores prácticas y tecnologías para una entrega rápida.
                            </Typography>

                        </Grid>
                        <Grid size={4} sx={{ textAlign: 'center' }}>
                            <RocketLaunchIcon sx={styles.icon} />
                            <Typography sx={styles.cardTitle} component="div">
                                3. Despliegue
                            </Typography>
                            <Typography sx={styles.cardContent}>
                                Implemos la solucion en tu entorno y te brindamos el soporte necesario para una transición fluida.
                            </Typography>

                        </Grid>
                    </Grid>
                </Box>

                {/* Section 4 Nuestros clientes*/}
                <Box sx={styles.container2}>
                    <Grid container spacing={2}>
                        <Grid size={12} sx={{ textAlign: 'center' }}>
                            <SubTitle Name={'Lo que dicen nuestros clientes'}></SubTitle>
                        </Grid>
                        <Grid size={6}>
                            <Card sx={styles.card}>
                                <CardContent>
                                    <Typography sx={styles.cardfeedback}>
                                        &quot;La automatización que desarrollaron para nosotros nos
                                        ahorró mas de 20 horas de trabajo a la semana. !Increible!&quot;
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar sx={styles.avatar}>A</Avatar>
                                        <Typography sx={styles.avatarName}>
                                            <b>Ana Garcia</b>
                                            <br />
                                            <Typography sx={styles.avatarRol}>
                                                CEO, InnovaTech
                                            </Typography>
                                        </Typography>
                                    </Box>

                                </CardContent>

                            </Card>
                        </Grid>
                        <Grid size={6}>
                            <Card sx={styles.card}>
                                <CardContent>
                                    <Typography sx={styles.cardfeedback}>
                                        &quot;El equipo de Hertzios integró todos nuestros sistemas en un solo dashboard,
                                        Nuestra eficiencia ha mejorado en un 40%&quot;
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar sx={styles.avatar}>C</Avatar>
                                        <Typography sx={styles.avatarName}>
                                            <b>Carlos Rodríguez</b>
                                            <br />
                                            <Typography sx={styles.avatarRol}>
                                                Director de Operaciones, Logística Global
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/* Section 5 formulario Contacto*/}
                <Box sx={styles.container2}>
                    <Grid container spacing={2}
                        sx={{
                            bgcolor: 'var(--color-secondary)',
                            border: '1px solid var(--color-secondary)',
                            borderRadius: 2,
                            padding: 6,
                            display: 'flex', alignItems: 'center',
                        }}>

                        <Grid size={6} sx={{ height: '100%' }}>
                            <Typography variant="h3"
                                sx={{
                                    fontSize: 28,
                                    fontWeight: '500',
                                    color: 'var(--color-white)',
                                    padding: '4px 0px 4px 0px',
                                    width: '100%'
                                }}>
                                ¿Listo para transformar tu negocio?

                                <Typography sx={{ fontSize: 14, fontWeight: '400', color: '#d8d8d8ff', fontfamily: 'Roboto', paddingBottom: 3, width: '100%' }}>
                                    <br />
                                    Completa el formulario y nuestro equipo se pondrá en contacto
                                    contigo lo antes posible para discutir como podemos ayudarte.
                                </Typography>
                            </Typography>


                        </Grid>
                        <Grid size={6} sx={{ height: '100%' }}>
                            <Box>
                                <TextField
                                    label="Tu nombre"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"

                                    sx={styles.input}
                                />
                                <TextField
                                    label="Tu email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    sx={styles.input}
                                />
                                <TextField
                                    label="Tu mensaje"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    multiline
                                    rows={4}
                                    sx={styles.input}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ bgcolor: 'var(--color-white)', color: 'var(--color-secondary)' }}
                                >
                                    Enviar mensaje
                                </Button>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </>
    )
}