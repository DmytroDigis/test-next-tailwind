import Link from "next/link";

export const Footer = () => (
  <footer className="bg-blue-600 text-white py-4">
    <div className="container mx-auto flex justify-between items-center px-4">
      <p className="text-sm">&copy; 2024 Product App. All rights reserved.</p>
      <ul className="flex space-x-4">
        <li>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="hover:underline">
            Terms of Service
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);
