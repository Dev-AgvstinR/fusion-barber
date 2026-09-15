import heroImage from "../assets/hero-image.png";
import Button from "../components/Button.jsx";

export const Hero = () => {
  return (
    <>
      <div className="relative flex h-150 w-full items-center justify-center overflow-hidden ">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60 fixed top-0 left-0 right-0 bottom-0"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex max-w-screen-xl flex-col items-center justify-center gap-4  mt-10">
          <p className="subtitle">Fusion Barber Estudio</p>

          <h1 className="select-none">
            Corte
            <br className="select-none" />
            Estilo.
            <br />
            <span className="text-outline">Fusion.</span>
          </h1>
          <Button>Reservar turno</Button>
        </div>
      </div>
    </>
  );
};
