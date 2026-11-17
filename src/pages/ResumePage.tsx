import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { PageRoute, RESUME_DATA } from '../data/portfolioData';

interface ResumePageProps {
  onNavigate: (route: PageRoute) => void;
}

export default function ResumePage({ onNavigate }: ResumePageProps) {

  return (
    <div className="print-page-wrapper animate-page-enter bg-[#F7F9FB] min-h-[calc(100vh-4rem)] py-8 sm:py-12">
      <div className="site-container">
        {/* Document Action Bar (Hidden in Print) */}
        <div className="no-print max-w-[900px] mx-auto mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#365F91] hover:text-[#142D4E] no-underline transition-colors min-h-[40px]"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              <span>Back to Portfolio</span>
            </a>
          </div>
        </div>

        {/* Standalone Professional Resume Document */}
        <article
          aria-label="Professional Resume of Mubeen Navalgund"
          className="print-document-sheet max-w-[900px] mx-auto bg-white border border-[#E1E7ED] rounded-[14px] shadow-[0_8px_30px_rgba(20,45,78,0.06)] p-6 sm:p-10 md:p-12"
        >
          {/* RESUME HEADER */}
          <header className="pb-6 border-b-2 border-[#142D4E]">
            <h1 className="page-title-serif font-bold tracking-wide text-[#142D4E]">
              {RESUME_DATA.header.name}
            </h1>
            <p className="mt-1.5 text-base sm:text-lg font-medium text-[#365F91]">
              {RESUME_DATA.header.subtitle}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#202C3B]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} className="text-[#365F91] shrink-0" aria-hidden="true" />
                <span>{RESUME_DATA.header.location}</span>
              </span>
              <a
                href={`mailto:${RESUME_DATA.header.email}`}
                className="inline-flex items-center gap-1.5 text-[#202C3B] hover:text-[#142D4E] no-underline break-all"
              >
                <Mail size={15} className="text-[#365F91] shrink-0" aria-hidden="true" />
                <span>Email: {RESUME_DATA.header.email}</span>
              </a>
              <a
                href={`tel:${RESUME_DATA.header.phone}`}
                className="inline-flex items-center gap-1.5 text-[#202C3B] hover:text-[#142D4E] no-underline tabular-nums"
              >
                <Phone size={15} className="text-[#365F91] shrink-0" aria-hidden="true" />
                <span>Phone: {RESUME_DATA.header.phone}</span>
              </a>
            </div>
          </header>

          {/* SECTION 1: CAREER OBJECTIVE */}
          <section className="mt-8 print-avoid-break">
            <h2 className="print-heading text-xs font-bold tracking-[0.14em] uppercase text-[#142D4E] pb-2 border-b border-[#E1E7ED]">
              Career Objective
            </h2>
            <p className="mt-3.5 text-[15px] leading-relaxed text-[#202C3B]">
              {RESUME_DATA.careerObjective}
            </p>
          </section>

          {/* SECTION 2: EDUCATIONAL QUALIFICATIONS */}
          <section className="mt-8">
            <h2 className="print-heading text-xs font-bold tracking-[0.14em] uppercase text-[#142D4E] pb-2 border-b border-[#E1E7ED]">
              Educational Qualifications
            </h2>

            {/* Desktop & Print Responsive Table */}
            <div className="hidden sm:block print-desktop-only mt-4 overflow-hidden rounded-[10px] border border-[#E1E7ED]">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[#142D4E] text-white">
                    <th scope="col" className="py-3 px-4 font-semibold">
                      Qualification
                    </th>
                    <th scope="col" className="py-3 px-4 font-semibold">
                      Institution
                    </th>
                    <th scope="col" className="py-3 px-4 font-semibold">
                      Status
                    </th>
                    <th scope="col" className="py-3 px-4 font-semibold text-right">
                      Percentage / CGPA
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E7ED]">
                  {RESUME_DATA.education.map((row, idx) => (
                    <tr
                      key={row.qualification}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F7F9FB]'}
                    >
                      <td className="py-3.5 px-4 font-semibold text-[#142D4E]">
                        {row.qualification}
                      </td>
                      <td className="py-3.5 px-4 text-[#202C3B]">
                        {row.institution}
                      </td>
                      <td className="py-3.5 px-4 text-[#687584]">
                        {row.status}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-[#142D4E] text-right tabular-nums whitespace-nowrap">
                        {row.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Cards (< 640px) */}
            <div className="sm:hidden print-mobile-only mt-4 space-y-3">
              {RESUME_DATA.education.map((row) => (
                <div
                  key={row.qualification}
                  className="rounded-[10px] border border-[#E1E7ED] bg-[#F7F9FB] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[15px] font-semibold text-[#142D4E]">
                      {row.qualification}
                    </h3>
                    <span className="text-sm font-bold text-[#142D4E] tabular-nums shrink-0">
                      {row.score}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#202C3B]">{row.institution}</p>
                  <p className="mt-1 text-xs font-medium text-[#687584]">
                    {row.status}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3: TECHNICAL SKILLS */}
          <section className="mt-8 print-avoid-break">
            <h2 className="print-heading text-xs font-bold tracking-[0.14em] uppercase text-[#142D4E] pb-2 border-b border-[#E1E7ED]">
              Technical Skills
            </h2>

            <div className="mt-4 space-y-4">
              {RESUME_DATA.technicalSkills.map((group) => (
                <div
                  key={group.category}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4"
                >
                  <h3 className="text-sm font-semibold text-[#142D4E] sm:w-64 shrink-0">
                    {group.category}:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3 py-1 rounded-md bg-[#EAF0F6] border border-[#D7E2EE] text-[#142D4E] text-[13px] font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: PROJECTS */}
          <section className="mt-8">
            <h2 className="print-heading text-xs font-bold tracking-[0.14em] uppercase text-[#142D4E] pb-2 border-b border-[#E1E7ED]">
              Projects
            </h2>

            <div className="mt-4 space-y-5">
              {RESUME_DATA.projects.map((project, index) => (
                <div key={project.title} className="print-avoid-break">
                  <h3 className="text-[15px] sm:text-base font-semibold text-[#142D4E]">
                    {index + 1}. {project.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[#687584]">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5: PROFESSIONAL INTERESTS */}
          <section className="mt-8 print-avoid-break">
            <h2 className="print-heading text-xs font-bold tracking-[0.14em] uppercase text-[#142D4E] pb-2 border-b border-[#E1E7ED]">
              Professional Interests
            </h2>

            <ul className="mt-3.5 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-[#202C3B] list-none p-0 m-0">
              {RESUME_DATA.professionalInterests.map((interest) => (
                <li key={interest} className="inline-flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-[#365F91]"
                  />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* SECTION 6: CONTACT INFORMATION */}
          <section className="mt-8 pt-6 border-t border-[#E1E7ED] print-avoid-break">
            <h2 className="print-heading text-xs font-bold tracking-[0.14em] uppercase text-[#142D4E]">
              Contact Information
            </h2>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-[#202C3B]">
              <p className="break-all">
                <span className="font-semibold text-[#142D4E]">Email:</span>{' '}
                {RESUME_DATA.contactInfo.email}
              </p>
              <p className="tabular-nums">
                <span className="font-semibold text-[#142D4E]">Phone:</span>{' '}
                {RESUME_DATA.contactInfo.phone}
              </p>
              <p>
                <span className="font-semibold text-[#142D4E]">Location:</span>{' '}
                {RESUME_DATA.contactInfo.location}
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
