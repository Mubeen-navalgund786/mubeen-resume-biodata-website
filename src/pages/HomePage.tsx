import {
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  Mail,
  Phone,
} from 'lucide-react';
import { HOME_DATA, IDENTITY, PageRoute } from '../data/portfolioData';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
}

const ABOUT_ICONS: Record<string, typeof GraduationCap> = {
  academic: GraduationCap,
  technical: Code2,
  personal: BookOpen,
};

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="animate-page-enter">
      {/* SECTION A: HERO */}
      <section className="bg-[#F3F6F8] border-b border-[#E1E7ED] py-12 sm:py-16 lg:py-24">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Introduction */}
            <div className="lg:col-span-7 min-w-0">
              <p className="kicker-label mb-4">{HOME_DATA.hero.kicker}</p>

              <h1 className="hero-headline font-bold">
                <span className="block text-[#202C3B]">
                  {HOME_DATA.hero.greeting}
                </span>
                <span className="block text-[#142D4E] mt-1">
                  {HOME_DATA.hero.name}
                </span>
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-base sm:text-lg font-medium text-[#1D3C63]">
                <span>{HOME_DATA.hero.subtitle}</span>
                <span aria-hidden="true" className="text-[#8995A3]">
                  &middot;
                </span>
                <span className="text-[#365F91]">{HOME_DATA.hero.status}</span>
              </div>

              <p className="mt-5 text-[#687584] text-base sm:text-[17px] leading-relaxed max-w-2xl">
                {HOME_DATA.hero.introduction}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="/resume"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('resume');
                  }}
                  className="btn-primary-navy"
                >
                  <span>View My Resume</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </a>

                <a
                  href="/biodata"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('biodata');
                  }}
                  className="btn-secondary-navy"
                >
                  <span>View My Bio-data</span>
                </a>
              </div>
            </div>

            {/* Right Column: Academic Profile Card */}
            <div className="lg:col-span-5 relative">
              {/* Subtle Decorative Backing Shape */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -inset-3 translate-x-2.5 translate-y-2.5 rounded-[26px] bg-[#EAF0F6] border border-[#DCE5EF]"
              />

              <div className="relative bg-white rounded-[22px] border border-[#E1E7ED] shadow-[0_8px_30px_rgba(20,45,78,0.06)] p-7 sm:p-9 text-center">
                {/* Circular Initials Emblem */}
                <div className="w-18 h-18 rounded-full bg-[#EAF0F6] border border-[#D4E0EC] text-[#142D4E] font-serif-display text-2xl font-bold flex items-center justify-center mx-auto">
                  {HOME_DATA.hero.profileCard.initials}
                </div>

                <p className="mt-6 text-[11px] font-semibold tracking-[0.16em] uppercase text-[#365F91]">
                  {HOME_DATA.hero.profileCard.eyebrow}
                </p>

                <h2 className="mt-2.5 font-serif-display text-xl sm:text-[22px] font-bold text-[#142D4E] leading-snug text-balance">
                  {HOME_DATA.hero.profileCard.degree}
                </h2>

                <p className="mt-2.5 text-[15px] font-medium text-[#202C3B]">
                  {HOME_DATA.hero.profileCard.institution}
                </p>

                <p className="mt-1 text-sm text-[#687584]">
                  {HOME_DATA.hero.profileCard.year}
                </p>

                <div className="my-6 border-t border-[#E1E7ED]" />

                <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6D89A6]">
                  {HOME_DATA.hero.profileCard.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: ABOUT ME */}
      <section className="bg-white py-16 md:py-24">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="kicker-label">{HOME_DATA.about.kicker}</p>
            <h2 className="section-heading mt-2.5 font-bold">
              {HOME_DATA.about.heading}
            </h2>
            <p className="mt-4 text-[#687584] text-base sm:text-[17px] leading-relaxed">
              {HOME_DATA.about.description}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {HOME_DATA.about.cards.map((card) => {
              const Icon = ABOUT_ICONS[card.id] || GraduationCap;
              return (
                <article
                  key={card.id}
                  className="surface-card surface-card-interactive p-6 sm:p-7 flex flex-col h-full"
                >
                  <div className="w-11 h-11 rounded-[10px] bg-[#EAF0F6] text-[#142D4E] flex items-center justify-center shrink-0">
                    <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-serif-display text-xl font-bold text-[#142D4E]">
                    {card.title}
                  </h3>

                  <ul className="mt-3 space-y-1.5 text-[15px] text-[#687584] list-none p-0 m-0">
                    {card.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION C: SELECTED PROJECTS */}
      <section className="bg-[#F7F9FB] border-y border-[#E1E7ED] py-16 md:py-24">
        <div className="site-container">
          <div className="max-w-2xl">
            <h2 className="section-heading font-bold">
              {HOME_DATA.projects.heading}
            </h2>
            <p className="mt-2.5 text-[#687584] text-base sm:text-[17px]">
              {HOME_DATA.projects.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-7 items-stretch">
            {HOME_DATA.projects.items.map((project) => (
              <article
                key={project.number}
                className="surface-card surface-card-interactive p-7 sm:p-8 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E1E7ED]">
                    <span className="font-serif-display text-2xl font-bold text-[#B99B68] tabular-nums">
                      {project.number}
                    </span>
                    <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#365F91]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif-display text-2xl font-bold text-[#142D4E]">
                    {project.title}
                  </h3>

                  <p className="mt-1.5 text-sm font-semibold text-[#365F91]">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-[15px] leading-relaxed text-[#687584]">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: TECHNICAL SKILLS */}
      <section className="bg-white py-16 md:py-24">
        <div className="site-container">
          <div className="max-w-2xl">
            <h2 className="section-heading font-bold">
              {HOME_DATA.skills.heading}
            </h2>
            <p className="mt-2.5 text-[#687584] text-base sm:text-[17px]">
              {HOME_DATA.skills.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {HOME_DATA.skills.groups.map((group) => (
              <div
                key={group.label}
                className="surface-card p-6 sm:p-7 flex flex-col h-full"
              >
                <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#365F91] pb-3.5 border-b border-[#E1E7ED]">
                  {group.label}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#EAF0F6] border border-[#D7E2EE] text-[#142D4E] text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION E: CONTACT */}
      <section className="bg-[#F7F9FB] border-t border-[#E1E7ED] py-16 md:py-24">
        <div className="site-container">
          <div className="max-w-2xl">
            <h2 className="section-heading font-bold">
              {HOME_DATA.contact.heading}
            </h2>
            <p className="mt-3 text-[#687584] text-base sm:text-[17px] leading-relaxed">
              {HOME_DATA.contact.description}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            <a
              href={`mailto:${IDENTITY.email}`}
              className="surface-card surface-card-interactive p-6 flex items-start gap-4 no-underline group"
            >
              <div className="w-11 h-11 rounded-[10px] bg-[#EAF0F6] text-[#142D4E] flex items-center justify-center shrink-0 group-hover:bg-[#142D4E] group-hover:text-white transition-colors">
                <Mail size={20} strokeWidth={1.9} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6D89A6]">
                  Email
                </p>
                <p className="mt-1 text-[15px] sm:text-base font-semibold text-[#142D4E] break-all">
                  {IDENTITY.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${IDENTITY.phone}`}
              className="surface-card surface-card-interactive p-6 flex items-start gap-4 no-underline group"
            >
              <div className="w-11 h-11 rounded-[10px] bg-[#EAF0F6] text-[#142D4E] flex items-center justify-center shrink-0 group-hover:bg-[#142D4E] group-hover:text-white transition-colors">
                <Phone size={20} strokeWidth={1.9} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#6D89A6]">
                  Phone
                </p>
                <p className="mt-1 text-[15px] sm:text-base font-semibold text-[#142D4E] tabular-nums">
                  {IDENTITY.phone}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
