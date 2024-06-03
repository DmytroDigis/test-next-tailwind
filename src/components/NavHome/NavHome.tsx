import Link from "next/link";

export const NavHome = () => (
  <nav className="mt-4">
    <Link href="/" legacyBehavior>
      <a className="text-blue-500 hover:underline">Home</a>
    </Link>
  </nav>
);
