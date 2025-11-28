import type { Metadata } from "next";
import { Box, Container, Grid, Typography } from "@mui/material";
import AppTitle from "../../components/appTitle";
import SubTitle from "../../components/subTitle";
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
    grid: {
        flexGrow: 1,
        paddingBottom: 5
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
};

const title = "Sobre Nosotros";
const description = "Somos un equipo de apasionados por la tecnología, dedicados a crear soluciones de software que impulsen el crecimiento de nuestros clientes.";

export const metadata: Metadata = {
    title: "Sobre Nosotros",
    description:
        "Conoce al equipo detrás de Hertzios. Apasionados por la tecnología y dedicados a impulsar el crecimiento de tu negocio.",
};

export default function AboutPage() {
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
                    <Grid size={{ xs: 12, md: 6 }}>
                        <SubTitle Name="Nuestra Misión" />
                        <Typography sx={styles.cardContent}>
                            Nuestra misión es simple: ayudar a las empresas a alcanzar su máximo potencial a través de la tecnología. Creemos en el poder del software para transformar negocios, optimizar procesos y crear nuevas oportunidades. Trabajamos en estrecha colaboración con nuestros clientes para comprender sus desafíos y desarrollar soluciones a medida que generen un impacto real.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <SubTitle Name="Nuestra Visión" />
                        <Typography sx={styles.cardContent}>
                            Nos vemos como un socio tecnológico estratégico para nuestros clientes, un aliado en su camino hacia la innovación y el éxito. Aspiramos a ser reconocidos por nuestra excelencia técnica, nuestro compromiso con la calidad y nuestra capacidad para entregar resultados excepcionales. Queremos ser la primera opción para las empresas que buscan transformar sus ideas en realidad.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={styles.container2}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                        <SubTitle Name="Nuestro Equipo" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography sx={styles.cardTitle}>Ana García</Typography>
                        <Typography sx={styles.cardContent}>CEO & Founder</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography sx={styles.cardTitle}>Carlos Rodríguez</Typography>
                        <Typography sx={styles.cardContent}>Lead Developer</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography sx={styles.cardTitle}>Laura Martinez</Typography>
                        <Typography sx={styles.cardContent}>UX/UI Designer</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
