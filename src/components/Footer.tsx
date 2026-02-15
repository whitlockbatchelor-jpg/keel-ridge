import Link from "next/link";
import { LogoMark } from "./LogoMark";

const footerLinks = [
  { href: "/story", label: "Story" },
  { href: "/destinations", label: "Destinations" },
  { href: "/impact", label: "Impact" },
  { href: "/journal", label: "Journal" },
  { href: "/design", label: "Design My Adventure" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <LogoMark size={32} />
              <span className="font-body text-[8.5px] font-light tracking-[3.5px] uppercase text-sand/60">
                Bespoke Adventure
              </span>
            </div>
            <p className="max-w-xs font-body text-sm font-light leading-relaxed text-cream/60">
              Adventures designed by someone who&apos;s been there, built on
              guides who live there, rooted in communities that need us there.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
              Navigate
            </span>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm font-light text-sand/70 transition-colors hover:text-snow"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-[10px] font-normal tracking-[3px] uppercase text-gray">
              Connect
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:whit@keelridge.co"
                className="font-body text-sm font-light text-sand/70 transition-colors hover:text-copper"
              >
                whit@keelridge.co
              </a>
              <a
                href="https://instagram.com/keelridge"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-light text-sand/70 transition-colors hover:text-copper"
              >
                @keelridge
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/5 pt-6">
          <p className="font-body text-xs font-light text-gray/60">
            &copy; {new Date().getFullYear()} Keel Ridge&trade;. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
