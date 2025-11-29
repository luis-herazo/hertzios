import type { Metadata } from "next";
import { Box, Container, Grid, Card, CardContent, Typography, Button, Chip } from "@mui/material";
import AppTitle from "../../components/appTitle";
import DescriptionText from "@/components/descriptionText";
import { projects } from "../../data/projects";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const metadata: Metadata = {
    title: "Proyectos y Casos de Estudio | Hertzios",
    description: "Explora nuestros casos de éxito y descubre cómo hemos ayudado a empresas a transformar sus negocios con tecnología.",
};

const styles = {
    container: {
        flexGrow: 1,
        paddingTop: 15,
        paddingBottom: 10
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
        }
    },
    cardContent: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
    },
    chip: {
        marginRight: 1,
        marginBottom: 1,
        fontSize: '0.75rem'
    },
    button: {
        marginTop: 'auto',
        textTransform: 'none',
        fontWeight: 600
    }
};

export default function ProjectsPage() {
    return (
        <Container>
            <Box sx={styles.container}>
                <Box sx={{ marginBottom: 8, textAlign: 'center' }}>
                    <AppTitle Name="Nuestros Proyectos" />
                    <DescriptionText Name="Descubre cómo hemos ayudado a empresas líderes a resolver desafíos complejos con tecnología innovadora." />
                </Box>

                <Grid container spacing={4}>
                    {projects.map((project) => (
                        <Grid size={{ xs: 12, md: 6 }} key={project.id}>
                            <Card sx={styles.card}>
                                <CardContent sx={styles.cardContent}>
                                    <Box>
                                        <Typography variant="overline" color="primary" sx={{ fontWeight: 'bold' }}>
                                            {project.industry}
                                        </Typography>
                                        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" paragraph>
                                            {project.description}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        {project.technologies.slice(0, 4).map((tech) => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                size="small"
                                                variant="outlined"
                                                sx={styles.chip}
                                            />
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <Chip
                                                label={`+${project.technologies.length - 4}`}
                                                size="small"
                                                variant="outlined"
                                                sx={styles.chip}
                                            />
                                        )}
                                    </Box>

                                    <Button
                                        variant="text"
                                        color="primary"
                                        endIcon={<ArrowForwardIcon />}
                                        href={`/projects/${project.slug}`}
                                        sx={styles.button}
                                    >
                                        Ver Caso de Estudio
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
