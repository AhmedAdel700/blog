import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Link from "next/link";


export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  const postsArray = await response.json();

  const posts = postsArray.map((post) => {
    return (
      <Paper
        key={post.id}
        elevation={3}
        sx={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>Tilte: {post.title}</p>

        <Link href={`/${post.id}`} style={{ color: "rgb(238, 164, 80)" }}>
          Details
        </Link>
      </Paper>
    );
  });

  return (
    <Box
      sx={{
        width: "85%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "2rem",
      }}
    >
      {posts}
    </Box>
  );
}
