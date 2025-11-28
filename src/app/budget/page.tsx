import type { Metadata } from "next";
import {
    Box,
    Container,
    Grid,
    TextField,
    Button,
    Typography,
    Paper,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Select,
    MenuItem,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Avatar
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const metadata: Metadata = {
    title: "Presupuesto",
    description:
        "Solicita un presupuesto personalizado para tu proyecto de software, automatización o integración.",
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
        textAlign: 'center',
    },
    sectionSubtitle: {
        color: 'var(--color-text-secondary)',
        marginBottom: 6,
        textAlign: 'center',
        maxWidth: '700px',
        mx: 'auto',
    },
    formCard: {
        padding: { xs: 3, md: 6 },
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        backgroundColor: 'var(--background)',
        border: '1px solid #eaeaea',
        marginBottom: 8,
    },
    stepTitle: {
        fontSize: 18,
        fontWeight: 600,
        marginBottom: 3,
        color: 'var(--foreground)',
    },
    radioCard: {
        border: '1px solid #e5e7eb',
        borderRadius: 2,
        padding: 2,
        height: '100%',
        transition: 'all 0.2s',
        '&:hover': {
            borderColor: '#2563eb',
            backgroundColor: '#f8fafc',
        },
    },
    input: {
        marginBottom: 0,
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
        padding: '12px 32px',
        boxShadow: 'none',
        marginTop: 4,
        '&:hover': {
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)',
        },
    },
    faqSection: {
        marginTop: 4,
    },
    testimonialCard: {
        padding: 4,
        borderRadius: 3,
        border: '1px solid #eaeaea',
        height: '100%',
    }
};

export default function BudgetPage() {
    return (
        <Container maxWidth="md">
            <Box sx={styles.pageContainer}>
                <Typography variant="h3" component="h1" sx={styles.sectionTitle}>
                    Solicita tu Presupuesto Personalizado
                </Typography>
                <Typography variant="body1" sx={styles.sectionSubtitle}>
                    Completa el formulario y recibe una cotización detallada sin compromiso.
                    Nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
                </Typography>

                <Paper elevation={0} sx={styles.formCard}>
                    <form noValidate autoComplete="off">
                        {/* Step 1: Service Selection */}
                        <Box mb={6}>
                            <Typography sx={styles.stepTitle}>1. Elige el tipo de servicio</Typography>
                            <FormControl component="fieldset" fullWidth>
                                <RadioGroup row name="service">
                                    <Grid container spacing={2}>
                                        {[
                                            "Desarrollo Web",
                                            "Automatización de Procesos",
                                            "Integración de Sistemas",
                                            "Otro"
                                        ].map((service) => (
                                            <Grid item xs={12} sm={6} key={service}>
                                                <Box sx={styles.radioCard}>
                                                    <FormControlLabel
                                                        value={service}
                                                        control={<Radio size="small" />}
                                                        label={<Typography variant="body2" fontWeight={500}>{service}</Typography>}
                                                        sx={{ width: '100%', margin: 0 }}
                                                    />
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </RadioGroup>
                            </FormControl>
                        </Box>

                        {/* Step 2: Project Details */}
                        <Box mb={6}>
                            <Typography sx={styles.stepTitle}>2. Cuéntanos sobre tu proyecto</Typography>
                            <Typography variant="caption" display="block" mb={1} color="text.secondary">
                                Descripción detallada
                            </Typography>
                            <TextField
                                placeholder="Describe los objetivos, funcionalidades clave y cualquier detalle relevante de tu proyecto..."
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={6}
                                sx={styles.input}
                            />
                        </Box>

                        {/* Step 3: Budget */}
                        <Box mb={6}>
                            <Typography sx={styles.stepTitle}>3. Alcance y Presupuesto</Typography>
                            <Typography variant="caption" display="block" mb={1} color="text.secondary">
                                Presupuesto estimado (USD)
                            </Typography>
                            <Select
                                fullWidth
                                displayEmpty
                                defaultValue=""
                                sx={{ ...styles.input, '& .MuiSelect-select': { py: 1.5 } }}
                            >
                                <MenuItem value="" disabled>Menos de $1,000</MenuItem>
                                <MenuItem value="1000-5000">$1,000 - $5,000</MenuItem>
                                <MenuItem value="5000-10000">$5,000 - $10,000</MenuItem>
                                <MenuItem value="10000+">Más de $10,000</MenuItem>
                            </Select>
                        </Box>

                        {/* Step 4: Contact Info */}
                        <Box mb={4}>
                            <Typography sx={styles.stepTitle}>4. Datos de Contacto</Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="caption" display="block" mb={1} color="text.secondary">
                                        Nombre completo
                                    </Typography>
                                    <TextField
                                        placeholder="Tu nombre"
                                        variant="outlined"
                                        fullWidth
                                        sx={styles.input}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="caption" display="block" mb={1} color="text.secondary">
                                        Correo electrónico
                                    </Typography>
                                    <TextField
                                        placeholder="tu@email.com"
                                        variant="outlined"
                                        fullWidth
                                        sx={styles.input}
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <Box textAlign="center">
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={styles.submitButton}
                            >
                                Enviar Solicitud
                            </Button>
                            <Typography variant="caption" display="block" mt={2} color="text.secondary">
                                Al enviar, aceptas nuestra <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Política de Privacidad</span>.
                            </Typography>
                        </Box>
                    </form>
                </Paper>

                {/* Bottom Section: FAQ & Testimonial */}
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" fontWeight={700} mb={3}>
                            Preguntas Frecuentes
                        </Typography>
                        <Box>
                            <Accordion elevation={0} sx={{ border: '1px solid #eaeaea', mb: 2, borderRadius: '8px !important', '&:before': { display: 'none' } }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight={500}>¿Cuál es el siguiente paso después de enviar el formulario?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2" color="text.secondary">
                                        Analizaremos tu solicitud y te contactaremos para agendar una breve llamada de descubrimiento.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion elevation={0} sx={{ border: '1px solid #eaeaea', borderRadius: '8px !important', '&:before': { display: 'none' } }}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography fontWeight={500}>¿Qué incluye el presupuesto?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body2" color="text.secondary">
                                        El presupuesto incluye un desglose detallado de las fases del proyecto, tiempos estimados y costos asociados.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" fontWeight={700} mb={3}>
                            Confían en Nosotros
                        </Typography>
                        <Paper elevation={0} sx={styles.testimonialCard}>
                            <Typography variant="body1" fontStyle="italic" mb={3} color="text.secondary">
                                "El equipo de Hertzios transformó por completo nuestra eficiencia operativa con una automatización a medida. ¡Profesionales, rápidos y muy recomendables!"
                            </Typography>
                            <Box display="flex" alignItems="center">
                                <Avatar src="/avatar-ana.jpg" sx={{ width: 48, height: 48, mr: 2 }}>AG</Avatar>
                                <Box>
                                    <Typography variant="subtitle2" fontWeight={700}>Ana García</Typography>
                                    <Typography variant="caption" color="text.secondary">CEO, InnovaTech Solutions</Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
