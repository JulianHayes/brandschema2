function ResourcesLibrary() {
  try {
    const resources = [
      {
        category: 'IMPLEMENTATION_GUIDES',
        items: [
          {
            title: 'Schema Implementation Handbook',
            description: 'Complete guide to deploying brand schemas across digital touchpoints',
            type: 'PDF',
            industry: 'All',
            size: '2.4MB'
          },
          {
            title: 'Voice Framework Setup',
            description: 'Technical documentation for semantic voice implementation',
            type: 'PDF',
            industry: 'Technology',
            size: '1.8MB'
          },
          {
            title: 'Agent Integration Protocols',
            description: 'Best practices for AI agent compatibility testing',
            type: 'PDF',
            industry: 'All',
            size: '3.1MB'
          }
        ]
      },
      {
        category: 'CHECKLISTS',
        items: [
          {
            title: 'Brand Audit Checklist',
            description: '47-point assessment for schema readiness',
            type: 'PDF',
            industry: 'All',
            size: '0.8MB'
          },
          {
            title: 'Healthcare Compliance Check',
            description: 'Regulatory considerations for medical brands',
            type: 'PDF',
            industry: 'Healthcare',
            size: '1.2MB'
          },
          {
            title: 'Financial Services Schema',
            description: 'Compliance and trust signals for fintech',
            type: 'PDF',
            industry: 'Finance',
            size: '1.5MB'
          }
        ]
      },
      {
        category: 'TEMPLATES',
        items: [
          {
            title: 'SaaS Brand Schema Template',
            description: 'Pre-configured schema for software companies',
            type: 'JSON',
            industry: 'Technology',
            size: '0.1MB'
          },
          {
            title: 'Retail Brand Framework',
            description: 'E-commerce optimised brand structure',
            type: 'JSON',
            industry: 'Retail',
            size: '0.2MB'
          },
          {
            title: 'Educational Institution Schema',
            description: 'Academic sector brand template',
            type: 'JSON',
            industry: 'Education',
            size: '0.1MB'
          }
        ]
      }
    ];

    const handleDownload = (item) => {
      // Simulate download - in a real implementation, this would trigger actual file download
      console.log(`Downloading: ${item.title}`);
      
      // Create mock file content based on type
      let content = '';
      if (item.type === 'JSON') {
        content = JSON.stringify({
          brand_name: "EXAMPLE_BRAND",
          industry: item.industry.toLowerCase(),
          schema_template: item.title,
          generated_by: "BRAND:SCHEMA",
          version: "1.0.0"
        }, null, 2);
      } else {
        content = `${item.title}\n\n${item.description}\n\nThis is a mock download for demonstration purposes.`;
      }
      
      const blob = new Blob([content], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${item.title.toLowerCase().replace(/\s+/g, '_')}.${item.type.toLowerCase()}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    };

    return (
      <section className="py-16 px-6 lg:px-12 border-t-2 border-black" data-name="resources-library" data-file="components/ResourcesLibrary.js">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <h2 className="mono text-2xl font-bold mb-4">
                RESOURCES<span className="accent">:</span>LIBRARY
              </h2>
              <p className="text-sm opacity-60 mb-4">
                Implementation guides, checklists, and templates for systematic brand deployment
              </p>
            </div>
            
            <div className="lg:col-span-9">
              {resources.map((section, index) => (
                <div key={index} className="mb-12">
                  <h3 className="mono font-bold text-lg mb-6 accent">
                    {section.category}<span className="text-black">:</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-2 border-black p-4 hover:bg-black hover:text-white transition-all duration-200 group">
                        <div className="flex justify-between items-start mb-3">
                          <div className="mono text-xs opacity-60 group-hover:opacity-80">
                            {item.type}
                          </div>
                          <div className="mono text-xs opacity-60 group-hover:opacity-80">
                            {item.size}
                          </div>
                        </div>
                        
                        <h4 className="mono font-bold text-sm mb-2">
                          {item.title}
                        </h4>
                        
                        <p className="text-xs mb-3 opacity-80">
                          {item.description}
                        </p>
                        
                        <div className="flex justify-between items-center">
                          <div className="mono text-xs opacity-60 group-hover:opacity-80">
                            {item.industry}
                          </div>
                          <button
                            onClick={() => handleDownload(item)}
                            className="mono text-xs bg-white text-black px-2 py-1 group-hover:bg-gray-200 transition-colors"
                          >
                            DOWNLOAD
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="bg-black text-white p-6 mono">
                <div className="text-sm mb-2 opacity-60">LIBRARY.STATUS</div>
                <div className="text-lg mb-2">
                  {resources.reduce((total, section) => total + section.items.length, 0)} resources available
                </div>
                <div className="text-xs opacity-60">
                  Updated weekly with new templates and industry-specific guides
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ResourcesLibrary component error:', error);
    return null;
  }
}