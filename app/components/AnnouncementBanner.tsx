import Link from "next/link";

// Temporary announcement for the June 8 sailing session.
// Remove this component (and its usage in layout.tsx) once the event has passed.
export default function AnnouncementBanner() {
  return (
    <Link
      href="/register"
      className="fixed top-0 left-0 right-0 z-[60] flex h-10 items-center justify-center bg-sky-700 px-4 text-center text-white transition-colors hover:bg-sky-800"
    >
      <p className="truncate text-xs font-medium tracking-wide sm:text-sm">
        <span aria-hidden="true">🍔</span>{" "}
        <span className="font-semibold">Lakeside BBQ and Paddle</span>
        <span className="hidden sm:inline">
          {" "}
          — Tuesday, August 25 · 4-7 PM (times may vary)
        </span>{" "}
        · <span className="underline underline-offset-2">Register&nbsp;→</span>
      </p>
    </Link>
  );
}
