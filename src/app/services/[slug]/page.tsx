import type { Metadata } from "next";
import { Box, Container, Grid, Typography, Chip, Divider, Button, Paper, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { services } from "../../../data/services";
import { notFound } from "next/navigation";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CableIcon from '@mui/icons-material/Cable';

interface Props {
    params: Promise<{ slug: string }>;
}

const iconMap: Record<string, React.ReactNode> = {
    Code: <CodeIcon sx={{ fontSize: 64, color: 'var(--color-primary)' }} />,
    SmartToy: <SmartToyIcon sx={{ fontSize: 64, color: 'var(--color-primary)' }} />,
    Cable: <CableIcon sx={{ fontSize: 64, color: 'var(--color-primary)' }} />,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) return { title: "Servicio no encontrado" };
    return {
        title: service.title,
        description: service.fullDescription.length > 155 ? service.fullDescription.slice(0, 152) + "..." : service.fullDescription,
        alternates: {
            canonical: `/services/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }));
}

const styles = {
    sectionTitle: {
        fontWeight: 700,
        marginBottom: 3,
        color: 'var(--color-text-primary)',
    },
    accent: {
        color: 'var(--color-primary)',
    },
    featureCard: {
        padding: 3,
        height: '100%',
        backgroundColor: 'var(--card)',
        color: 'var(--card-foreground)',
        borderTop: '3px solid var(--color-primary)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        }
    },
    stepCard: {
        padding: 3,
        height: '100%',
        backgroundColor: 'var(--card)',
        color: 'var(--card-foreground)',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
    },
    stepNumber: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: 'var(--color-primary)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: 18,
        flexShrink: 0,
    },
};

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    if (!service) notFound();

    const serviceJsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription,
        "provider": {
            "@type": "Organization",
            "name": "Hertzios",
            "url": "https://www.hertzios.com"
        },
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": service.title,
            "itemListElement": service.features.map((feature) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": feature.title,
                    "description": feature.description
                }
            }))
        }
    };

    return (
        <Container maxWidth="lg">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
            />
            <Box sx={{ paddingTop: 15, paddingBottom: 10 }}>

                {/* Back button */}
                <Button
                    startIcon={<ArrowBackIcon />}
                    href="/services"
                    sx={{ mb: 4, color: 'var(--color-text-secondary)' }}
                >
                    Volver a Servicios
                </Button>

                {/* Hero */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Box sx={{ mb: 3 }}>
                        {iconMap[service.icon]}
                    </Box>
                    <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 3, color: 'var(--color-text-primary)' }}>
                        {service.title}
                    </Typography>
                    <Typography variant="h5" sx={{ color: 'var(--color-text-secondary)', maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}>
                        {service.fullDescription}
                    </Typography>
                </Box>

                <Divider sx={{ my: 6 }} />

                {/* Features */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ ...styles.sectionTitle, textAlign: 'center', mb: 6 }}>
                        ¿Qué incluye este servicio?
                    </Typography>
                    <Grid container spacing={3}>
                        {service.features.map((feature) => (
                            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={feature.title}>
                                <Paper elevation={2} sx={styles.featureCard}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: 'var(--color-primary)' }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                                        {feature.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Process */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ ...styles.sectionTitle, textAlign: 'center', mb: 6 }}>
                        Cómo trabajamos
                    </Typography>
                    <Grid container spacing={3}>
                        {service.process.map((step) => (
                            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={step.step}>
                                <Paper elevation={1} sx={styles.stepCard}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                                        <Box sx={styles.stepNumber}>{step.step}</Box>
                                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>
                                            {step.title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" sx={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                                        {step.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Benefits + Use Cases */}
                <Grid container spacing={6} sx={{ mb: 10 }}>
                    {/* Benefits */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" sx={{ ...styles.sectionTitle, mb: 3 }}>
                            Beneficios clave
                        </Typography>
                        <List disablePadding>
                            {service.benefits.map((benefit) => (
                                <ListItem key={benefit} disableGutters sx={{ alignItems: 'flex-start', py: 0.75 }}>
                                    <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                                        <CheckCircleIcon sx={{ color: 'var(--color-primary)', fontSize: 22 }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={benefit}
                                        primaryTypographyProps={{ sx: { color: 'var(--color-text-primary)', lineHeight: 1.6 } }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Use Cases */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" sx={{ ...styles.sectionTitle, mb: 3 }}>
                            Casos de uso frecuentes
                        </Typography>
                        <List disablePadding>
                            {service.useCases.map((useCase) => (
                                <ListItem key={useCase} disableGutters sx={{ alignItems: 'flex-start', py: 0.75 }}>
                                    <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                                        <ArrowForwardIcon sx={{ color: 'var(--color-primary)', fontSize: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={useCase}
                                        primaryTypographyProps={{ sx: { color: 'var(--color-text-primary)', lineHeight: 1.6 } }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>

                {/* Tech Stack */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="h4" sx={{ ...styles.sectionTitle, textAlign: 'center', mb: 4 }}>
                        Tecnologías que utilizamos
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
                        {service.technologies.map((tech) => (
                            <Chip
                                key={tech}
                                label={tech}
                                variant="outlined"
                                sx={{
                                    fontSize: '0.95rem',
                                    px: 1,
                                    py: 2.5,
                                    color: 'var(--color-text-primary)',
                                    borderColor: 'var(--color-text-secondary)',
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {/* CTA */}
                <Box sx={{
                    textAlign: 'center',
                    py: 8,
                    px: 4,
                    bgcolor: 'var(--color-primary)',
                    color: 'white',
                    borderRadius: 4,
                }}>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                        ¿Listo para empezar?
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                        Cuéntanos sobre tu proyecto y te damos una propuesta en 48 horas.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        href={`/contact?servicio=${service!.slug}`}
                        sx={{
                            bgcolor: 'white',
                            color: 'var(--color-primary)',
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            '&:hover': { bgcolor: '#f5f5f5' }
                        }}
                    >
                        Solicitar Propuesta
                    </Button>
                </Box>

            </Box>
        </Container>
    );
}
