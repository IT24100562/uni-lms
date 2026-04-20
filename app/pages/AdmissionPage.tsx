export function AdmissionPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold text-slate-900">Admission</h1>
      <p className="mt-4 text-slate-600 max-w-4xl">
        Start your admission journey with CSCT by reviewing entry requirements, preparing documents, and contacting the Student Recruitment Office for guidance.
      </p>
      <div className="mt-8 bg-white border border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-slate-900">Admission Checklist</h2>
        <ul className="mt-3 space-y-2 text-slate-600 text-sm list-disc pl-5">
          <li>Select your preferred program</li>
          <li>Prepare academic certificates and identification documents</li>
          <li>Submit initial inquiry and schedule counseling</li>
          <li>Complete application and enrollment confirmation</li>
        </ul>
      </div>
    </section>
  );
}
