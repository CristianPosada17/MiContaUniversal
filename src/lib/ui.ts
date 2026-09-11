// Recetas visuales compartidas de Mi Conta Universal.
// Todo apunta a los tokens de src/styles/global.css, que salen del logo.

export const container = "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 2xl:px-16";

export const section = "py-20 lg:py-26";

export const eyebrow =
  "mb-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-white px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--green)]";

export const eyebrowDark =
  "mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#b9f0cd]";

export const h2 =
  "text-[clamp(1.8rem,3.6vw,2.65rem)] font-extrabold leading-[1.15] text-[var(--text)]";

export const lead = "mt-4 text-[1.05rem] text-[var(--muted)]";

export const card =
  "group relative overflow-hidden rounded-[var(--radius)] border border-[color:var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-sm)] transition duration-300 hover:-translate-y-1.5 hover:border-[color:var(--border-strong)] hover:shadow-[var(--shadow)]";

export const cardIcon =
  "mb-5 grid h-12 w-12 place-items-center rounded-[14px] bg-[linear-gradient(135deg,rgba(10,54,96,.10),rgba(23,163,74,.14))] text-[var(--navy)]";

export const btnBase =
  "inline-flex items-center justify-center gap-2.5 rounded-[14px] px-6 py-3.5 font-[family-name:var(--font-head)] text-[0.94rem] font-bold whitespace-nowrap transition duration-200 hover:-translate-y-0.5";

export const btnPrimary =
  btnBase +
  " bg-[linear-gradient(120deg,var(--navy),var(--green))] text-white shadow-[var(--shadow)]";

export const btnWa =
  btnBase + " bg-[var(--green-500)] text-white shadow-[var(--shadow)] hover:bg-[var(--green)]";

export const btnGhost =
  btnBase +
  " border border-[color:var(--border-strong)] bg-white text-[var(--navy)] hover:border-[color:var(--green-500)] hover:text-[var(--green)]";

export const btnLight = btnBase + " bg-white text-[var(--green-900)]";

export const inputLabel =
  "text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[var(--muted)]";

export const inputLabelDark =
  "text-[0.78rem] font-bold uppercase tracking-[0.08em] text-white/70";

export const input =
  "w-full rounded-xl border border-[color:var(--border-strong)] bg-white px-4 py-3 font-[family-name:var(--font-body)] text-[0.95rem] text-[var(--text)] transition focus:border-[color:var(--green-500)] focus:outline-none focus:ring-4 focus:ring-[var(--ring)]";

export const formStatus =
  "form-status mt-3.5 rounded-xl px-4 py-3 text-[0.9rem] font-semibold";
