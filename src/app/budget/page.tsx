import type { Metadata } from "next";
import { Box, Container, Typography } from "@mui/material";
import BudgetForm from "@/components/BudgetForm";

export const metadata: Metadata = {
    title: "Solicita tu Presupuesto Personalizado",
    description:
        "Completa el formulario y recibe una cotización detallada sin compromiso para tu desarrollo web, automatización de procesos o integración de sistemas.",
    alternates: {
        canonical: "/budget",
    },
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

                <BudgetForm />
            </Box>
        </Container>
    );
}
