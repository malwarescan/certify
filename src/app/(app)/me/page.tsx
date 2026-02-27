import Link from "next/link";
import {
  UserIcon,
  DocumentIcon,
  ShieldIcon,
  BellIcon,
  QuestionIcon,
  LockIcon,
} from "@/components/Icons";

export default function MePage() {
  return (
    <div className="space-y-6 px-4 pt-6">
      <div className="h-6" />

      <h1 className="font-serif text-xl font-semibold">PROFILE</h1>

      {/* Profile Card */}
      <div className="rounded-2xl border border-vault-slate/50 bg-vault-slate/50 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-800/50">
            <UserIcon className="h-8 w-8 text-emerald-700" />
          </div>
          <div>
            <p className="font-semibold">@watchcollector_nyc</p>
            <p className="text-sm text-vault-cloud">Member since 2019</p>
            <p className="text-sm text-emerald-700">23 verified items</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="space-y-2">
        {[
          { label: "My Certificates", href: "/vault", Icon: DocumentIcon },
          { label: "Insurance", href: "#", Icon: ShieldIcon },
          { label: "Notifications", href: "#", Icon: BellIcon },
          { label: "Security", href: "#", Icon: LockIcon },
          { label: "Help & Support", href: "#", Icon: QuestionIcon },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center justify-between rounded-xl border border-vault-slate/50 bg-vault-slate/50 px-4 py-4 transition-colors hover:bg-vault-slate/80"
          >
            <span className="flex items-center gap-3">
              <item.Icon className="h-5 w-5 text-vault-cloud" />
              <span className="font-medium">{item.label}</span>
            </span>
            <span className="text-vault-cloud">→</span>
          </Link>
        ))}
      </div>

      <button className="w-full rounded-xl border border-rose-500/50 py-4 font-medium text-rose-400 transition-colors hover:bg-rose-900/30">
        Sign Out
      </button>
    </div>
  );
}
