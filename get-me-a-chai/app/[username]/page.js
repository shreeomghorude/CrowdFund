import Username from "./Username";

export default async function Page({ params }) {
  const { username } = await params;  // ✅ await because params is a Promise in Next.js 15+
  return <Username username={username} />;  // ✅ Pass username as prop
}
