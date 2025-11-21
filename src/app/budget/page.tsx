import { Box, Container, Grid, TextField, Button, Typography, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import AppTitle from "../../components/appTitle";
import DescriptionText from "@/components/descriptionText";
import SubTitle from "@/components/subTitle";

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
    },
    checkboxGroup: {
        marginTop: 2,
    }
};

const title = "Solicita un Presupuesto";
const description = "Cuéntanos sobre tu proyecto y te enviaremos un presupuesto a medida. Completa el siguiente formulario con los detalles de tu solicitud.";

export default function BudgetPage() {
    return (
        <Container>
            <Box sx={styles.container1}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                        <AppTitle Name={title} />
                        <DescriptionText Name={description} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 10 }}>
                        <Box sx={styles.formContainer}>
                            <form noValidate autoComplete="off">
                                <SubTitle Name="Información de Contacto" />
                                <Grid container spacing={2}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            label="Nombre completo"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            sx={styles.input}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            sx={styles.input}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            label="Teléfono"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            sx={styles.input}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            label="Empresa"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            sx={styles.input}
                                        />
                                    </Grid>
                                </Grid>

                                <SubTitle Name="Detalles del Proyecto" />
                                <FormGroup sx={styles.checkboxGroup}>
                                    <Typography variant="h6">Servicios de Interés</Typography>
                                    <FormControlLabel control={<Checkbox />} label="Desarrollo Web / Móvil" />
                                    <FormControlLabel control={<Checkbox />} label="Automatización de Procesos" />
                                    <FormControlLabel control={<Checkbox />} label="Integración de Sistemas" />
                                    <FormControlLabel control={<Checkbox />} label="Otro" />
                                </FormGroup>

                                <TextField
                                    label="Describe tu proyecto"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    multiline
                                    rows={8}
                                    sx={styles.input}
                                    placeholder="Danos una idea de lo que necesitas, tus objetivos y cualquier otro detalle que consideres importante."
                                />

                                <TextField
                                    label="Presupuesto estimado (Opcional)"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    sx={styles.input}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ marginTop: 2 }}
                                >
                                    Solicitar Presupuesto
                                </Button>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
