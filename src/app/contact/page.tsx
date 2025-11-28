import type { Metadata } from "next";
import { Box, Container, Grid, TextField, Button, Typography, Paper } from "@mui/material";
import { Email, Phone, CalendarToday, LinkedIn, GitHub } from "@mui/icons-material";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contacto",
    description:
        "¿Listo para transformar tu negocio? Contáctanos hoy mismo y empecemos a trabajar en tu próxima solución digital.",
};

const styles = {
    pageContainer: {
        paddingTop: 15,
        paddingBottom: 10,
    },
    sectionTitle: {
        fontWeight: 700,
        marginBottom: 1,
        color: 'var(--foreground)',
    },
    sectionSubtitle: {
        color: 'var(--color-text-secondary)',
        marginBottom: 4,
        maxWidth: '600px',
    },
    formCard: {
        padding: 4,
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        backgroundColor: 'var(--background)',
        border: '1px solid #eaeaea',
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: 500,
        marginBottom: 1,
        display: 'block',
        color: 'var(--foreground)',
    },
    input: {
        marginBottom: 3,
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#f9fafb',
            '& fieldset': {
                borderColor: '#e5e7eb',
            },
            '&:hover fieldset': {
                borderColor: '#d1d5db',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#2563eb',
            },
        },
    },
    submitButton: {
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 600,
        padding: '12px',
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none',
        },
    },
    infoItem: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: 3,
        padding: 2,
        borderRadius: 2,
        backgroundColor: '#f3f4f6',
    },
    iconBox: {
        backgroundColor: '#dbeafe',
        padding: 1,
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 2,
        color: '#2563eb',
    },
    socialIcon: {
        fontSize: 28,
        color: '#6b7280',
        marginRight: 2,
        cursor: 'pointer',
        '&:hover': {
            color: '#2563eb',
        },
    }
};

export default function ContactPage() {
    return (
        <Container maxWidth="lg">
            <Box sx={styles.pageContainer}>
                <Box mb={6}>
                    <Typography variant="h3" component="h1" sx={styles.sectionTitle}>
                        ¿Listo para empezar tu proyecto?
                    </Typography>
                    <Typography variant="body1" sx={styles.sectionSubtitle}>
                        Completa el formulario a continuación o utiliza uno de nuestros otros métodos de contacto.
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    {/* Left Column: Contact Form */}
                    <Grid item xs={12} md={7}>
                        <Paper elevation={0} sx={styles.formCard}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="caption" sx={styles.inputLabel}>Nombre</Typography>
                                    <TextField
                                        placeholder="Tu nombre completo"
                                        variant="outlined"
                                        fullWidth
                                        sx={styles.input}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="caption" sx={styles.inputLabel}>Correo Electrónico</Typography>
                                    <TextField
                                        placeholder="tu.email@ejemplo.com"
                                        variant="outlined"
                                        fullWidth
                                        sx={styles.input}
                                        size="small"
                                    />
                                </Grid>
                            </Grid>

                            <Typography variant="caption" sx={styles.inputLabel}>Asunto</Typography>
                            <TextField
                                placeholder="¿Sobre qué te gustaría hablar?"
                                variant="outlined"
                                fullWidth
                                sx={styles.input}
                                size="small"
                            />

                            <Typography variant="caption" sx={styles.inputLabel}>Mensaje</Typography>
                            <TextField
                                placeholder="Describe tu proyecto o consulta aquí..."
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={6}
                                sx={styles.input}
                            />

                            <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={styles.submitButton}
                            >
                                Enviar Mensaje
                            </Button>
                        </Paper>
                    </Grid>

                    {/* Right Column: Contact Info */}
                    <Grid item xs={12} md={5}>
                        <Box pl={{ md: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'var(--foreground)' }}>
                                Otras formas de contactar
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
                                Si prefieres, puedes contactarnos directamente a través de estos canales.
                            </Typography>

                            <Box sx={styles.infoItem}>
                                <Box sx={styles.iconBox}>
                                    <Email fontSize="small" />
                                </Box>
                                <Box>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'var(--foreground)' }}>
                                        Correo Electrónico
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        contacto@hertzios.com
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={styles.infoItem}>
                                <Box sx={styles.iconBox}>
                                    <Phone fontSize="small" />
                                </Box>
                                <Box>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'var(--foreground)' }}>
                                        Teléfono
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        +58 424 159 9502
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={styles.infoItem}>
                                <Box sx={styles.iconBox}>
                                    <CalendarToday fontSize="small" />
                                </Box>
                                <Box>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'var(--foreground)' }}>
                                        Agendar una reunión
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Reserva un espacio en nuestro Calendly
                                    </Typography>
                                </Box>
                            </Box>

                            <Box mt={6}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'var(--foreground)' }}>
                                    Síguenos
                                </Typography>
                                <Box display="flex">
                                    <Link href="#" passHref>
                                        <LinkedIn sx={styles.socialIcon} />
                                    </Link>
                                    <Link href="#" passHref>
                                        <GitHub sx={styles.socialIcon} />
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
