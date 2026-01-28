import { FadeIn } from "./FadeIn";

export const SectionTitle = ({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) => (
  <FadeIn>
    <div className="mb-16 px-4 text-center">
      {subtitle && (
        <span
          className={`text-xs font-black uppercase tracking-[0.4em] ${light ? "text-white/60" : "text-[#ff3b30]"}`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`mt-4 font-display text-5xl font-black uppercase leading-[0.95] md:text-7xl ${light ? "text-white" : "text-[#004aad]"}`}
      >
        {title}
      </h2>
    </div>
  </FadeIn>
);
