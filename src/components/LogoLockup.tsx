import { LogoMark } from "./LogoMark";

export function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={36} />
      <div className="flex flex-col">
        <span className="font-display text-[15px] font-medium tracking-[4px] uppercase text-snow leading-tight">
          Keel Ridge
        </span>
        <span className="font-body text-[8.5px] font-light tracking-[3.5px] uppercase text-snow/45 leading-tight">
          Bespoke Adventure
        </span>
      </div>
    </div>
  );
}
