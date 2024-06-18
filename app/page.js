import Posts from "./components/Posts";

export default function Home() {

  const style1 = { alignSelf: "flex-start", margin: "1rem 0.5rem 0" }

  return (
    <main style={{ display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: "center" }}>
      <h1 style={style1}>All <span style={{ color: " rgb(238, 164, 80)" }}>Blog</span> Posts</h1>
      <hr />
      <Posts />
    </main>
  );
}
