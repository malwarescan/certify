import Link from "next/link";
import { CheckIcon } from "@/components/Icons";
import { Container } from "@/components/layout";

export default function Header() {
  return (
    <header className="header-rail">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 translate-y-px items-center justify-center rounded-full bg-gradient-to-br from-cert-500 to-cert-600">
              <CheckIcon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">
              Certificate.now
            </span>
          </div>

          <nav className="hidden items-center gap-4 md:gap-5 md:flex">
            <Link
              href="/verify"
              className="nav-link flex min-h-[44px] items-center py-2 text-sm font-medium leading-tight tracking-[0.01em] text-slate-700 hover:text-slate-900"
            >
              Verify
            </Link>
            <Link
              href="#"
              className="nav-link flex min-h-[44px] items-center py-2 text-sm font-medium leading-tight tracking-[0.01em] text-slate-700 hover:text-slate-900"
            >
              For Brands
            </Link>
            <Link
              href="/vault"
              className="nav-link flex min-h-[44px] items-center py-2 text-sm font-medium leading-tight tracking-[0.01em] text-slate-700 hover:text-slate-900"
            >
              My Vault
            </Link>
          </nav>

          <Link href="/vault" className="btn-primary" data-surface="header">
            Get Started
          </Link>
        </div>
      </Container>
    </header>
  );
}
