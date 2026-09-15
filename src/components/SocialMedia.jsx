import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className="fixed right-5 top-135 z-50 flex -translate-y-1/2 flex-col gap-4">
      {/* FACEBOOK */}
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="
            flex
            h-[48px]
            w-[48px]
            items-center
            justify-center
            rounded-full
            bg-[#1877F2]
            text-2xl
            text-white
            shadow-[0_5px_18px_rgba(0,0,0,0.28)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
      >
        <FaFacebookF />
      </a>

      {/* INSTAGRAM */}
      <a
        href="https://www.instagram.com/fusion_barber_salta/"
        target="_blank"
        rel="noreferrer"
        className="
            flex
            h-[48px]
            w-[48px]
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-[#833AB4]
            via-[#FD1D1D]
            to-[#FCAF45]
            text-[27px]
            text-white
            shadow-[0_5px_18px_rgba(0,0,0,0.28)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
      >
        <FaInstagram />
      </a>

      {/* TIKTOK */}
      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="
            flex
                 h-[48px]
            w-[48px]
            items-center
            justify-center
            rounded-full
            bg-black
            text-[25px]
            text-white
            shadow-[0_5px_18px_rgba(0,0,0,0.28)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
      >
        <FaTiktok />
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/543876196619"
        target="_blank"
        rel="noreferrer"
        className="
            flex
            h-[48px]
            w-[48px]
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-[27px]
            text-white
            shadow-[0_5px_18px_rgba(0,0,0,0.28)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
          "
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};
export default SocialMedia;
