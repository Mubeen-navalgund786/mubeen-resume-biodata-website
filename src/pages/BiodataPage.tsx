import { ArrowLeft } from 'lucide-react';
import { BIODATA_DATA, PageRoute } from '../data/portfolioData';

interface BiodataPageProps {
  onNavigate: (route: PageRoute) => void;
}

export default function BiodataPage({ onNavigate }: BiodataPageProps) {

  return (
    <div className="print-page-wrapper animate-page-enter bg-[#F7F9FB] min-h-[calc(100vh-4rem)] py-8 sm:py-12">
      <div className="site-container">
        {/* Document Action Bar (Hidden in Print) */}
        <div className="no-print max-w-[840px] mx-auto mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
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

        {/* Standalone Formal Bio-data Document */}
        <article
          aria-label="Personal Bio-data of Mubeen Navalgund"
          className="print-document-sheet max-w-[840px] mx-auto bg-white border border-[#E1E7ED] rounded-[14px] shadow-[0_8px_30px_rgba(20,45,78,0.06)] p-6 sm:p-10 md:p-12"
        >
          {/* DOCUMENT TITLE & SUBTITLE */}
          <header className="text-center pb-6 border-b-2 border-[#142D4E]">
            <h1 className="page-title-serif font-bold tracking-[0.14em] text-[#142D4E]">
              {BIODATA_DATA.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base font-semibold tracking-[0.16em] text-[#365F91]">
              {BIODATA_DATA.subtitle}
            </p>
          </header>

          {/* PERSONAL DETAILS TABLE */}
          <section className="mt-8">
            <h2 className="print-heading text-xs font-bold tracking-[0.14em] uppercase text-[#142D4E] mb-4">
              Personal Details
            </h2>

            {/* Desktop & Print Two-Column Formal Table */}
            <div className="hidden sm:block print-desktop-only overflow-hidden rounded-[10px] border border-[#E1E7ED]">
              <table className="print-table-force w-full border-collapse text-left text-[15px]">
                <tbody className="divide-y divide-[#E1E7ED]">
                  {BIODATA_DATA.personalDetails.map((row) => (
                    <tr key={row.label}>
                      <th
                        scope="row"
                        className="w-[36%] py-3.5 px-5 bg-[#EAF0F6] text-[#142D4E] font-semibold align-top border-r border-[#E1E7ED]"
                      >
                        {row.label}
                      </th>
                      <td className="w-[64%] py-3.5 px-5 bg-white text-[#202C3B] align-top break-words">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Formal Rows (< 640px) */}
            <div className="sm:hidden print-mobile-only overflow-hidden rounded-[10px] border border-[#E1E7ED] divide-y divide-[#E1E7ED]">
              {BIODATA_DATA.personalDetails.map((row) => (
                <div key={row.label} className="bg-white">
                  <div className="px-4 py-2 bg-[#EAF0F6] text-xs font-semibold tracking-wide uppercase text-[#142D4E]">
                    {row.label}
                  </div>
                  <div className="px-4 py-3 text-[15px] text-[#202C3B] break-words">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DECLARATION */}
          <section className="mt-8 print-avoid-break">
            <div className="rounded-[10px] border border-[#E1E7ED] bg-[#F7F9FB] p-5 sm:p-6">
              <h2 className="text-xs font-bold tracking-[0.14em] uppercase text-[#142D4E]">
                Declaration
              </h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-[#202C3B]">
                {BIODATA_DATA.declaration}
              </p>
            </div>
          </section>

          {/* PLACE, DATE & SIGNATURE */}
          <section className="mt-10 pt-4 print-avoid-break">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
              <div className="space-y-3 text-[15px] text-[#202C3B]">
                <p>
                  <span className="font-semibold text-[#142D4E]">Place:</span>{' '}
                  {BIODATA_DATA.place}
                </p>
                <p>
                  <span className="font-semibold text-[#142D4E]">Date:</span>{' '}
                  <span className="tabular-nums">17/11/2026</span>
                </p>
              </div>

              <div className="sm:text-right">
                <div className="h-16 sm:h-20 flex items-end justify-start sm:justify-center pb-1.5">
                  <span className="font-serif-display italic text-2xl sm:text-[26px] text-[#142D4E] tracking-wide">
                    mubeen
                  </span>
                </div>
                <div className="inline-block border-t border-[#142D4E] pt-2 min-w-[200px] sm:text-center">
                  <p className="font-semibold text-[15px] text-[#142D4E]">
                    {BIODATA_DATA.signatureName}
                  </p>
                  <p className="text-xs text-[#687584] uppercase tracking-wider mt-0.5">
                    Signature
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
