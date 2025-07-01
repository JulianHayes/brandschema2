function WhySchema() {
  try {
    return (
      <section className="py-16 px-6 lg:px-12 border-t-2 border-black" data-name="why-schema" data-file="components/WhySchema.js">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <h2 className="mono text-2xl font-bold mb-4">
                WHY<span className="accent">:</span>SCHEMA
              </h2>
            </div>
            <div className="lg:col-span-9">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="mono text-4xl font-bold accent mb-2">≠</div>
                    <div className="text-sm">Emotional resonance ≠ relevance</div>
                  </div>
                  <div className="text-center">
                    <div className="mono text-4xl font-bold accent mb-2">=</div>
                    <div className="text-sm">Brand now equals structured signal</div>
                  </div>
                  <div className="text-center">
                    <div className="mono text-4xl font-bold accent mb-2">→</div>
                    <div className="text-sm">Sovereignty through systematisation</div>
                  </div>
                </div>
                
                <div className="border-l-4 border-black pl-6">
                  <p className="text-lg mb-4">
                    This is a system for <span className="mono font-bold">sovereignty</span> and 
                    <span className="mono font-bold"> visibility</span> in the age of AI mediation.
                  </p>
                  <p className="text-gray-600">
                    When every interaction is filtered through an agent, when every brand message 
                    is parsed and reinterpreted, when visibility depends on machine understanding—
                    traditional brand craft becomes insufficient.
                  </p>
                </div>
                
                <div className="bg-black text-white p-6 mono">
                  <div className="text-sm mb-2 opacity-60">SYSTEM.STATUS</div>
                  <div className="text-lg">BRAND<span className="accent">:</span>SCHEMA is operational.</div>
                  <div className="text-sm mt-2 opacity-60">Ready for deployment.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('WhySchema component error:', error);
    return null;
  }
}