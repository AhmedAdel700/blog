"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function ErrorBoundary({ error }) {
  return (
    <Box sx={{ textAlign: "center", marginTop: 5 }}>
      <Typography variant="h4">
        {error.message} , Please Try Again Later
      </Typography>

      <Button sx={{ margin: "1rem 0 0 0" }} variant="contained">
        <Link href="/">Go Home</Link>
      </Button>
    </Box>
  );
}
