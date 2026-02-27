"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  SearchIcon,
  BoltIcon,
  LibraryIcon,
  UserIcon,
} from "./Icons";

const tabs = [
  { href: "/vault", label: "Vault", Icon: HomeIcon },
  { href: "/search", label: "Search", Icon: SearchIcon },
  { href: "/verify", label: "Verify", Icon: BoltIcon },
  { href: "/library", label: "Library", Icon: LibraryIcon },
  { href: "/me", label: "Me", Icon: UserIcon },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-vault-slate/50 bg-sovereign-900/95 backdrop-blur-lg safe-area-pb">
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const isActive =
            pathname === tab.href || pathname.startsWith(`${tab.href}/`);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-lg px-3 py-2 transition-colors",
                isActive
                  ? "text-emerald-800"
                  : "text-vault-cloud hover:text-vault-snow"
              )}
            >
              <tab.Icon className="h-6 w-6" />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
