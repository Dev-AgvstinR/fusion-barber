import { FiArrowUpRight } from "react-icons/fi";

export default function Button({
  children = "Reservar turno",
  href,
  onClick,
  className = "",
}) {
  const styles = `
  group
  inline-flex
  items-center
  justify-center
  gap-3

  bg-[var(--color-text)]
  text-[var(--color-bg)]

  border
  border-[var(--color-text)]
  rounded-[14px]

  px-[1.8rem]
  py-[0.9rem]

  text-sm
  font-semibold
  uppercase
  tracking-[0.12em]

  shadow-[0_0_26px_rgba(244,244,240,0.18)]

  transition-all
  duration-300

  hover:-translate-y-0.5
  hover:bg-white
  hover:shadow-[0_0_30px_rgba(244,244,240,0.28)]

  active:translate-y-0
  active:scale-[0.98]

  ${className}
`;
  if (href) {
    return (
      <a
        href={href}
        className={styles}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        <span>{children}</span>

        <FiArrowUpRight
          className="
            text-lg
            transition-transform
            duration-300
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
        />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      <span>{children}</span>

      <FiArrowUpRight
        className="
          text-lg
          transition-transform
          duration-300
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
      />
    </button>
  );
}
