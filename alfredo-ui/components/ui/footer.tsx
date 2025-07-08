// components/footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t p-4 text-xs text-muted-foreground flex justify-center">
      <div className="flex gap-6">
        <Link href="/terms" className="hover:underline">
          Terms & Conditions
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}


/* // components/footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t p-4 text-xs text-muted-foreground flex items-center justify-between">
      <p>&copy; {new Date().getFullYear()} Alfredo</p>
      <div className="flex gap-4">
        <Link href="/terms" className="hover:underline">
          Terms & Conditions
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
 */