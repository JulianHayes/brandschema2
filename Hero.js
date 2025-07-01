function Hero() {
  try {
    return (
      <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12" data-name="hero" data-file="components/Hero.js">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h1 className="mono text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                IF YOUR BRAND CAN'T BE <span className="redacted">PARSED</span><br/>
                THE BOTS WON'T BE <span className="accent">ARSED</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                A survival manual for modern brandcraft. Design your brand to be machine-readable and human-resonant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">
                  Build Your Schema
                </button>
                <button className="btn-secondary">
                  Read the Manifesto
                </button>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="divider-vertical hidden lg:block"></div>
              <div className="mono text-sm space-y-2 lg:ml-8">
                <div>BRAND<span className="accent">:</span>SCHEMA</div>
                <div className="text-xs opacity-60">v1.0.0</div>
                <div className="text-xs opacity-60">SYSTEMATIC</div>
                <div className="text-xs opacity-60">BRUTALIST</div>
                <div className="text-xs opacity-60">SURGICAL</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}