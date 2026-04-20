export function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold text-slate-900">About CSCT</h1>
      <p className="mt-4 text-slate-600 max-w-4xl">
        Colombo School of Construction Technology (CSCT) is a contemporary higher education institution dedicated to internationally recognized qualifications in the construction and built environment sectors.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
        <article className="bg-white border border-gray-100 rounded-2xl p-5">
          <h2 className="font-semibold text-slate-900">Our Vision</h2>
          <p className="text-sm text-slate-600 mt-2">Deliver accessible, industry-relevant education that builds future-ready professionals.</p>
        </article>
        <article className="bg-white border border-gray-100 rounded-2xl p-5">
          <h2 className="font-semibold text-slate-900">Our Mission</h2>
          <p className="text-sm text-slate-600 mt-2">Bridge academic learning and practical construction sector requirements through quality programs.</p>
        </article>
        <article className="bg-white border border-gray-100 rounded-2xl p-5">
          <h2 className="font-semibold text-slate-900">Accreditations</h2>
          <p className="text-sm text-slate-600 mt-2">Programs aligned with recognized professional and academic standards.</p>
        </article>
      </div>
    </section>
  );
}
