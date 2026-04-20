export function StudyAbroadPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold text-slate-900">Study Abroad</h1>
      <p className="mt-4 text-slate-600 max-w-4xl">
        CSCT Campus offers pathways for students to continue their academic journey internationally while building a strong local foundation.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <article className="bg-white border border-gray-100 rounded-2xl p-5">
          <h2 className="font-semibold text-slate-900">Pathway Guidance</h2>
          <p className="text-sm text-slate-600 mt-2">Counseling on transfers, progression options, and partner institution pathways.</p>
        </article>
        <article className="bg-white border border-gray-100 rounded-2xl p-5">
          <h2 className="font-semibold text-slate-900">Application Support</h2>
          <p className="text-sm text-slate-600 mt-2">Support for documentation, timelines, and preparation for international transition.</p>
        </article>
      </div>
    </section>
  );
}
