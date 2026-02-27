import Link from "next/link";
import { CheckIcon } from "@/components/Icons";
import { Container } from "@/components/layout";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cert-500 to-cert-600">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-slate-900">
              certnow
            </span>
          </div>

          <div className="flex gap-8 text-sm text-slate-600">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
