import Link from "next/link";
import Logo from "./logo";

export default function SiteFooter() {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919014467699"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-white shadow-lg transition hover:scale-110 hover:bg-green-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-8 w-8"
          aria-hidden="true"
        >
          <path d="M12 2a9.9 9.9 0 0 0-8.5 15l-1 4 4.1-1.1A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.6.6-2.3-.2-.4A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.8 3.4.5.2.9.4 1.2.4.5.2 1 .2 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z" />
        </svg>
      </a>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-gray-300">
        <p className="flex justify-center">
          <Logo idPrefix="footer" />
        </p>
        <p className="mt-3 text-gray-300">
          S J Prabhakar · Founder & Web Developer
        </p>
        <p className="mt-1 text-gray-300">Hyderabad, Telangana, India</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a
            href="https://wa.me/919014467699"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition hover:text-violet-400"
          >
            💬 WhatsApp
          </a>

          <a
            href="mailto:Prabhakarsamitipoguj@gmail.com"
            className="text-gray-300 transition hover:text-violet-400"
          >
            ✉️ Prabhakarsamitipoguj@gmail.com
          </a>
        </div>
        <div className="mb-4 mt-5 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/pricing"
            className="text-gray-300 transition hover:text-violet-400"
          >
            Pricing
          </Link>

          <Link
            href="/privacy"
            className="text-gray-300 transition hover:text-violet-400"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-gray-300 transition hover:text-violet-400"
          >
            Terms & Conditions
          </Link>
        </div>
        © {new Date().getFullYear()} Vebnora. All rights reserved.
      </footer>
    </>
  );
}
