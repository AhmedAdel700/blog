import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <Box className="error">
                <Typography variant="h6">Error <span style={{ fontWeight: "bold" }}>404</span></Typography>
                <Typography variant="body1">The Page You Are Looking For Is Not Found !</Typography>
                <Button variant="contained" color="error" sx={{ mt: 2}}>
                    <Link href="/">
                        Go Home
                    </Link>
                </Button>
            </Box>
        </>
    )
}
