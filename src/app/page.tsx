import Link from "next/link";

export default function Home() {
  return (
    <main>
    Home
    <Link href="/about" className="text-blue-500 block">
    About</Link>
    </main>
  );
}
