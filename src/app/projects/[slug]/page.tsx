import type { Metadata } from "next";
import { Box, Container, Grid, Typography, Chip, Divider, Button, Paper, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) return { title: "Proyecto no encontrado" };

    return {
        title: `${project.title} | Hertzios Case Study`,
        description: project.description,
    };
}

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

const styles = {
    container: {
        paddingTop: 15,
        paddingBottom: 10
    },
    header: {
        marginBottom: 6,
        textAlign: 'center'
    },
    sectionTitle: {
        fontWeight: 600,
        marginBottom: 3,
        color: 'var(--color-primary)'
    },
    techCard: {
        padding: 3,
        height: '100%',
        bgcolor: 'var(--color-secondary-light)',
        color: 'var(--color-white)'
    },
    resultCard: {
        padding: 3,
        height: '100%',
        borderLeft: '4px solid var(--color-primary)',
        bgcolor: 'background.paper'
    }
};

export default function ProjectDetailPage({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <Container maxWidth="lg">
            <Box sx={styles.container}>
                <Button
                    startIcon={<ArrowBackIcon />}
                    href="/projects"
                    sx={{ mb: 4 }}
                >
                    Volver a Proyectos
                </Button>

                {/* Header */}
                <Box sx={styles.header}>
                    <Chip label={project.industry} color="primary" sx={{ mb: 2 }} />
                    <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {project.title}
                    </Typography>
                    <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
                        {project.description}
                    </Typography>
                </Box>

                <Divider sx={{ my: 6 }} />

                {/* Challenge & Solution */}
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" sx={styles.sectionTitle}>El Desafío</Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                            {project.challenge}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" sx={styles.sectionTitle}>La Solución</Typography>
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                            {project.solution}
                        </Typography>
                    </Grid>
                </Grid>

                {/* Architecture & Tech Stack */}
                <Box sx={{ my: 8, bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 1 }}>
                    <Typography variant="h4" sx={{ ...styles.sectionTitle, textAlign: 'center' }}>
                        Arquitectura Técnica
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ textAlign: 'center', mb: 4, maxWidth: '800px', mx: 'auto' }}>
                        {project.architecture}
                    </Typography>

                    <Grid container spacing={2} justifyContent="center">
                        {project.technologies.map((tech) => (
                            <Grid key={tech}>
                                <Chip
                                    icon={<MemoryIcon />}
                                    label={tech}
                                    variant="outlined"
                                    sx={{ px: 1, py: 2.5, fontSize: '1rem' }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Results */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h4" sx={{ ...styles.sectionTitle, textAlign: 'center', mb: 6 }}>
                        Resultados Clave
                    </Typography>
                    <Grid container spacing={4}>
                        {project.results.map((result, index) => (
                            <Grid size={{ xs: 12, md: 4 }} key={index}>
                                <Paper elevation={2} sx={styles.resultCard}>
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <CheckCircleIcon color="success" sx={{ fontSize: 30, mt: 0.5 }} />
                                        <Typography variant="h6" component="div">
                                            {result}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* CTA */}
                <Box sx={{
                    textAlign: 'center',
                    py: 8,
                    px: 2,
                    bgcolor: 'var(--color-secondary)',
                    color: 'white',
                    borderRadius: 4
                }}>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                        ¿Tienes un desafío similar?
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                        Hablemos sobre cómo podemos ayudarte a escalar tu negocio.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        href="/contact"
                        sx={{
                            bgcolor: 'white',
                            color: 'var(--color-secondary)',
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                            '&:hover': {
                                bgcolor: '#f5f5f5'
                            }
                        }}
                    >
                        Contactar Ahora
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
