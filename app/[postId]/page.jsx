import { Box } from "@mui/material";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Post Details",
  description: "Post Details Page",
};

export default async function PostDetails({ params }) {
  if (isNaN(params.postId) || params.postId > 100) {
    notFound();
  }

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Could not find post " + params.postId);
  }

  const post = await response.json();

  return (
    <Box sx={{ padding: "1rem" }}>
      <h1 style={{ margin: "0 0 1rem" }}>
        <span style={{ color: "rgb(238, 164, 80)" }}>Post</span> Details
      </h1>

      <Box>
        <h2> Post Id: {post.id}</h2>
        <h3>Post Title: {post.title}</h3>
        <h4>Post Info: {post.body}</h4>
      </Box>
    </Box>
  );
}
