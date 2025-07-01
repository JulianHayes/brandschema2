function SchemaBuilder() {
  try {
    const [formData, setFormData] = React.useState({
      brandName: '',
      industry: '',
      voiceTone: [],
      coreValues: [],
      semanticTags: [],
      contextTriggers: [],
      targetAudience: '',
      primaryPurpose: ''
    });

    const [generatedSchema, setGeneratedSchema] = React.useState(null);
    const [showSchema, setShowSchema] = React.useState(false);

    const voiceToneOptions = ['Direct', 'Friendly', 'Professional', 'Technical', 'Conversational', 'Authoritative'];
    const valueOptions = ['Innovation', 'Quality', 'Efficiency', 'Sustainability', 'Trust', 'Excellence'];
    const industryOptions = ['Technology', 'Healthcare', 'Finance', 'Education', 'Retail', 'Manufacturing'];

    const handleInputChange = (field, value) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };

    const handleArrayChange = (field, value, checked) => {
      setFormData(prev => ({
        ...prev,
        [field]: checked 
          ? [...prev[field], value]
          : prev[field].filter(item => item !== value)
      }));
    };

    const generateSchema = () => {
      const schema = {
        brand_name: formData.brandName.toUpperCase().replace(/\s+/g, '_'),
        industry: formData.industry.toLowerCase(),
        voice_tone: formData.voiceTone.map(t => t.toLowerCase()),
        core_values: formData.coreValues.map(v => v.toLowerCase()),
        semantic_tags: formData.semanticTags,
        context_triggers: formData.contextTriggers,
        target_audience: formData.targetAudience,
        primary_purpose: formData.primaryPurpose,
        schema_version: "1.0.0",
        generated_at: new Date().toISOString()
      };
      
      setGeneratedSchema(schema);
      setShowSchema(true);
    };

    const copyToClipboard = () => {
      navigator.clipboard.writeText(JSON.stringify(generatedSchema, null, 2));
    };

    return (
      <section className="py-16 px-6 lg:px-12 border-t-2 border-black bg-gray-50" data-name="schema-builder" data-file="components/SchemaBuilder.js">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <h2 className="mono text-2xl font-bold mb-4">
                BUILD<span className="accent">:</span>SCHEMA
              </h2>
              <p className="text-sm opacity-60 mb-4">
                Generate your machine-readable brand schema in real-time
              </p>
            </div>
            
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="mono text-sm font-bold block mb-2">BRAND_NAME</label>
                    <input
                      type="text"
                      value={formData.brandName}
                      onChange={(e) => handleInputChange('brandName', e.target.value)}
                      className="w-full p-3 border-2 border-black mono text-sm"
                      placeholder="Enter brand name"
                    />
                  </div>

                  <div>
                    <label className="mono text-sm font-bold block mb-2">INDUSTRY</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                      className="w-full p-3 border-2 border-black mono text-sm"
                    >
                      <option value="">Select industry</option>
                      {industryOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mono text-sm font-bold block mb-2">VOICE_TONE</label>
                    <div className="grid grid-cols-2 gap-2">
                      {voiceToneOptions.map(tone => (
                        <label key={tone} className="flex items-center text-sm">
                          <input
                            type="checkbox"
                            checked={formData.voiceTone.includes(tone)}
                            onChange={(e) => handleArrayChange('voiceTone', tone, e.target.checked)}
                            className="mr-2"
                          />
                          {tone}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mono text-sm font-bold block mb-2">CORE_VALUES</label>
                    <div className="grid grid-cols-2 gap-2">
                      {valueOptions.map(value => (
                        <label key={value} className="flex items-center text-sm">
                          <input
                            type="checkbox"
                            checked={formData.coreValues.includes(value)}
                            onChange={(e) => handleArrayChange('coreValues', value, e.target.checked)}
                            className="mr-2"
                          />
                          {value}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="mono text-sm font-bold block mb-2">SEMANTIC_TAGS</label>
                    <input
                      type="text"
                      value={formData.semanticTags.join(', ')}
                      onChange={(e) => handleInputChange('semanticTags', e.target.value.split(', ').filter(Boolean))}
                      className="w-full p-3 border-2 border-black mono text-sm"
                      placeholder="B2B, SaaS, automation"
                    />
                  </div>

                  <div>
                    <label className="mono text-sm font-bold block mb-2">CONTEXT_TRIGGERS</label>
                    <input
                      type="text"
                      value={formData.contextTriggers.join(', ')}
                      onChange={(e) => handleInputChange('contextTriggers', e.target.value.split(', ').filter(Boolean))}
                      className="w-full p-3 border-2 border-black mono text-sm"
                      placeholder="workflow, productivity, efficiency"
                    />
                  </div>

                  <div>
                    <label className="mono text-sm font-bold block mb-2">TARGET_AUDIENCE</label>
                    <input
                      type="text"
                      value={formData.targetAudience}
                      onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                      className="w-full p-3 border-2 border-black mono text-sm"
                      placeholder="Business professionals, developers"
                    />
                  </div>

                  <div>
                    <label className="mono text-sm font-bold block mb-2">PRIMARY_PURPOSE</label>
                    <textarea
                      value={formData.primaryPurpose}
                      onChange={(e) => handleInputChange('primaryPurpose', e.target.value)}
                      className="w-full p-3 border-2 border-black mono text-sm h-20"
                      placeholder="What does your brand fundamentally do?"
                    />
                  </div>

                  <button
                    onClick={generateSchema}
                    className="btn-primary w-full"
                    disabled={!formData.brandName}
                  >
                    Generate Schema
                  </button>
                </div>
              </div>

              {showSchema && generatedSchema && (
                <div className="mt-8 border-2 border-black p-6 bg-black text-white">
                  <div className="flex justify-between items-center mb-4">
                    <div className="mono text-sm accent">GENERATED_SCHEMA.JSON</div>
                    <button
                      onClick={copyToClipboard}
                      className="mono text-xs bg-white text-black px-3 py-1 hover:bg-gray-200"
                    >
                      COPY
                    </button>
                  </div>
                  <pre className="mono text-xs overflow-x-auto">
                    {JSON.stringify(generatedSchema, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('SchemaBuilder component error:', error);
    return null;
  }
}