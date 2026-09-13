import heroImage from "../assets/hero-image.png";
import Button from "../components/Button.jsx";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50 fixed top-0 left-0 right-0 bottom-0"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex max-w-screen-xl flex-col items-center justify-center gap-4">
        <p className="subtitle">Fusion Barber Estudio</p>

        <h1>
          Corte.
          <br />
          Estilo.
          <br />
          <span className="text-outline">Fusion.</span>
        </h1>
        <Button>Reservar turno</Button>
      </div>
    </div>
  );
}
