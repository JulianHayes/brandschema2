function Problem() {
  try {
    return (
      <section className="py-16 px-6 lg:px-12 border-t-2 border-black" data-name="problem" data-file="components/Problem.js">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <h2 className="mono text-2xl font-bold mb-4">
                THE<span className="accent">:</span>PROBLEM
              </h2>
            </div>
            <div className="lg:col-span-9">
              <div className="space-y-6 text-lg">
                <p>
                  <span className="redacted">AI agents now sit between brand and audience.</span> 
                  The traditional brand-to-consumer pipeline is fractured. Your carefully crafted visual identity, 
                  your perfectly tuned voice, your emotional resonance—none of it matters if the intermediary can't parse it.
                </p>
                <p>
                  Screens are vanishing. Semantic clarity is the new visibility. 
                  Brand memory now lives with the <span className="mono accent">intermediary</span>, not the audience.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="border-2 border-black p-4">
                    <div className="mono text-sm mb-2 accent">VISIBILITY</div>
                    <div className="text-sm">If you can't be structured, you can't be surfaced</div>
                  </div>
                  <div className="border-2 border-black p-4">
                    <div className="mono text-sm mb-2 accent">MEMORY</div>
                    <div className="text-sm">Brand recall happens at the agent level</div>
                  </div>
                  <div className="border-2 border-black p-4">
                    <div className="mono text-sm mb-2 accent">MEDIATION</div>
                    <div className="text-sm">Every interaction is now filtered and interpreted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Problem component error:', error);
    return null;
  }
}