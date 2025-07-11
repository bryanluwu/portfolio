import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <h1 className="text-xl font-bold">Your Name</h1>
      <nav className="flex gap-4">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">
          <Button size="sm">Contact</Button>
        </Link>
      </nav>
    </header>
  );
}