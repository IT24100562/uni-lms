export function CareersPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold text-slate-900">Careers</h1>
      <p className="mt-4 text-slate-600 max-w-4xl">
        Explore career opportunities, internships, and placement support connected to CSCT programs and industry partnerships.
      </p>
      <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-slate-900">Career Support Areas</h2>
        <ul className="mt-3 space-y-2 text-slate-600 text-sm list-disc pl-5">
          <li>CV and portfolio readiness</li>
          <li>Interview preparation sessions</li>
          <li>Industry networking events</li>
          <li>Graduate placement coordination</li>
        </ul>
      </div>
    </section>
  );
}
