import { Box, Container, Grid, Card, CardContent, Typography, Button, CardActions } from "@mui/material";
import AppTitle from "../../components/appTitle";
import DescriptionText from "@/components/descriptionText";

const styles = {
    container1: {
        flexGrow: 1,
        paddingTop: 15,
        paddingBottom: 5
    },
    card: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    cardContent: {
        flexGrow: 1,
        fontSize: 16,
        fontWeight: '400',
        color: '#6b6b6bff',
        fontfamily: 'Roboto',
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#464545ff',
        fontfamily: 'Roboto',
    },
    postMeta: {
        fontSize: 14,
        color: '#9e9e9e',
        marginBottom: 2,
    }
};

const title = "Nuestro Blog";
const description = "Lee nuestros últimos artículos sobre tecnología, desarrollo de software y tendencias de la industria.";

const blogPosts = [
    {
        title: "5 formas en que la automatización puede transformar tu negocio",
        date: "21 de Noviembre, 2025",
        author: "Ana García",
        excerpt: "La automatización de procesos ya no es una opción, es una necesidad. Descubre cómo la implementación de soluciones de automatización puede optimizar tus operaciones, reducir costos y liberar a tu equipo para que se concentre en tareas de mayor valor."
    },
    {
        title: "Cómo elegir la tecnología adecuada para tu próximo proyecto de software",
        date: "15 de Noviembre, 2025",
        author: "Carlos Rodríguez",
        excerpt: "La elección de la pila de tecnología correcta es crucial para el éxito de cualquier proyecto de software. En este artículo, exploramos los factores clave que debes considerar al tomar esta importante decisión, desde la escalabilidad y el rendimiento hasta la disponibilidad de talento."
    },
    {
        title: "La importancia de la experiencia de usuario (UX) en el desarrollo de aplicaciones",
        date: "8 de Noviembre, 2025",
        author: "Laura Martinez",
        excerpt: "Una gran experiencia de usuario es lo que diferencia a una aplicación exitosa de una que no lo es. Aprende por qué la UX es tan importante y cómo puedes asegurarte de que tu aplicación sea intuitiva, atractiva y fácil de usar para tus usuarios."
    }
];

export default function BlogPage() {
    return (
        <Container>
            <Box sx={styles.container1}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                        <AppTitle Name={title} />
                        <DescriptionText Name={description} />
                    </Grid>
                </Grid>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {blogPosts.map((post, index) => (
                    <Grid size={{ xs: 12, md: 10 }} key={index}>
                        <Card sx={styles.card}>
                            <CardContent>
                                <Typography sx={styles.cardTitle} component="h2">
                                    {post.title}
                                </Typography>
                                <Typography sx={styles.postMeta}>
                                    Publicado el {post.date} por {post.author}
                                </Typography>
                                <Typography sx={styles.cardContent}>
                                    {post.excerpt}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Leer más</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
