"use client";

import { useParams } from "next/navigation";

import { Box, Button } from "@mui/material";
import Link from "next/link";

export default function PostNotFound() {
  const params = useParams();

  return (
    <Box sx={{ textAlign: "center" }} mt={20}>
      <h1>
        The <span style={{ color: "rgb(238, 164, 80)" }}>Post</span> {params.postId} Is Not Found!
      </h1>
      <Button variant="contained" color="error" sx={{ mt: 2 }}>
        <Link href="/" replace>
          Go Home
        </Link>
      </Button>
    </Box>
  );
}
