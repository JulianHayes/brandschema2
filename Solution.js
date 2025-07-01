function Solution() {
  try {
    return (
      <section className="py-16 px-6 lg:px-12 border-t-2 border-black" data-name="solution" data-file="components/Solution.js">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <h2 className="mono text-2xl font-bold mb-4">
                THE<span className="accent">:</span>SOLUTION
              </h2>
            </div>
            <div className="lg:col-span-9">
              <div className="mb-8">
                <blockquote className="text-2xl md:text-3xl font-bold mono leading-tight">
                  Brand as Schema.<br/>
                  Not moodboards.<br/>
                  Not slogans.
                </blockquote>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="mono font-bold mb-4 text-lg">OFFERINGS<span className="accent">:</span></h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="mono text-sm mr-3 accent">01:</span>
                      <span>Structured brand systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mono text-sm mr-3 accent">02:</span>
                      <span>Semantic voice frameworks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mono text-sm mr-3 accent">03:</span>
                      <span>Metadata and LLM SEO toolkits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mono text-sm mr-3 accent">04:</span>
                      <span>Agent-first interface templates</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-2 border-black p-6">
                  <div className="mono text-sm mb-4 accent">SCHEMA.EXAMPLE</div>
                  <div className="mono text-xs space-y-1 text-gray-600">
                    <div>brand_name: "ACME_CORP"</div>
                    <div>voice_tone: ["direct", "technical"]</div>
                    <div>core_values: ["efficiency", "precision"]</div>
                    <div>semantic_tags: ["B2B", "SaaS", "automation"]</div>
                    <div>context_triggers: ["workflow", "productivity"]</div>
                    <div>response_patterns: <span className="redacted">[CLASSIFIED]</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Solution component error:', error);
    return null;
  }
}