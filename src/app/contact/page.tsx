import { Box, Container, Grid, TextField, Button, Typography } from "@mui/material";
import AppTitle from "../../components/appTitle";
import DescriptionText from "@/components/descriptionText";

const styles = {
    container1: {
        flexGrow: 1,
        paddingTop: 15,
        paddingBottom: 5
    },
    formContainer: {
        padding: 4,
        borderRadius: 2,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
    },
    input: {
        '& .MuiInputBase-input': {
            color: 'black',
        },
        '& .MuiInputLabel-root': {
            color: 'gray',
        },
    }
};

const title = "Contacto";
const description = "Tienes alguna pregunta o quieres trabajar con nosotros? Completa el formulario y nos pondremos en contacto contigo lo antes posible.";

export default function ContactPage() {
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

            {/* Contact Form Section (similar to home page) */}
            <Box sx={{ ...styles.container1, paddingTop: 0 }}> {/* Adjust padding if needed */}
                <Grid container spacing={2}
                    sx={{
                        bgcolor: '#298CEE',
                        border: '1px solid #21a3eeff',
                        borderRadius: 2,
                        padding: 6,
                        display: 'flex', alignItems: 'center',
                    }}>

                    <Grid size={{ xs: 12, md: 6 }} sx={{ height: '100%' }}>
                        <Typography variant="h4"
                            sx={{
                                fontSize: 28,
                                fontWeight: '500',
                                color: '#ffffffff',
                                fontfamily: 'Roboto',
                                padding: '4px 0px 4px 0px',
                                width: '100%'
                            }}>
                            ¿Listo para empezar tu proyecto?

                            <Typography sx={{ fontSize: 14, fontWeight: '400', color: '#d8d8d8ff', fontfamily: 'Roboto', paddingBottom: 3, width: '100%' }}>
                                <br />
                                Completa el formulario y nuestro equipo se pondrá en contacto
                                contigo lo antes posible para discutir cómo podemos ayudarte.
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ height: '100%' }}>
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
                                sx={{ bgcolor: '#ffffffff', color: '#298CEE', marginTop: 2 }}
                            >
                                Enviar mensaje
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
