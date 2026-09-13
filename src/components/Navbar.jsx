import { useState } from "react";
import { FiInstagram, FiMapPin, FiMenu, FiX } from "react-icons/fi";

import logo from "../assets/logo_png.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full border-black border-b border-black/10 bg-[#f5f5f2] text-black p-[15px] sticky top-0 left-0 right-0">
      <nav className="relative flex h-[100px] items-center justify-around px-6 md:px-10">
        {/* LEFT */}
        <div className="hidden items-center gap-7 md:flex ">
          <a
            href="#servicios"
            className="text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-50"
          >
            Servicios
          </a>

          <a
            href="#nosotros"
            className="text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-50"
          >
            Nosotros
          </a>

          <a
            href="#trabajos"
            className="text-sm font-semibold uppercase tracking-wide transition-opacity hover:opacity-50"
          >
            Trabajos
          </a>
        </div>

        {/* CENTER LOGO */}
        <a
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src={logo}
            alt="Fusion Barber Estudio"
            className="h-32 w-32 object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* RIGHT */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="https://www.instagram.com/fusion_barber_salta/"
            target="_blank"
            rel="noreferrer"
            className="text-xl transition-all hover:-translate-y-0.5 hover:opacity-50"
          >
            <FiInstagram />
          </a>

          <a
            href="#sucursales"
            className="text-xl transition-all hover:-translate-y-0.5 hover:opacity-50"
          >
            <FiMapPin />
          </a>

          <a
            href="https://wa.me/543876196619"
            target="_blank"
            rel="noreferrer"
            className="group relative text-sm font-semibold uppercase tracking-wide"
          >
            Reservar turno
            <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-black transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto flex text-2xl md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          absolute left-0 top-[88px] w-full bg-[#f5f5f2]
          px-6 transition-all duration-300 md:hidden
          ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          }
        `}
      >
        <div className="flex flex-col py-6">
          <a
            href="#servicios"
            onClick={() => setOpen(false)}
            className="border-b border-black/10 py-4 text-2xl font-semibold uppercase"
          >
            Servicios
          </a>

          <a
            href="#nosotros"
            onClick={() => setOpen(false)}
            className="border-b border-black/10 py-4 text-2xl font-semibold uppercase"
          >
            Nosotros
          </a>

          <a
            href="#trabajos"
            onClick={() => setOpen(false)}
            className="border-b border-black/10 py-4 text-2xl font-semibold uppercase"
          >
            Trabajos
          </a>

          <a
            href="#sucursales"
            onClick={() => setOpen(false)}
            className="border-b border-black/10 py-4 text-2xl font-semibold uppercase"
          >
            Sucursales
          </a>

          <a
            href="https://wa.me/543876196619"
            target="_blank"
            rel="noreferrer"
            className="mt-6 bg-black px-5 py-4 text-center text-lg font-semibold uppercase text-white"
          >
            Reservar turno
          </a>
        </div>
      </div>
    </header>
  );
}
