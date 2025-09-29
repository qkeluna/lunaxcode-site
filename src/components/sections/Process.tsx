// components/sections/Process.tsx
export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We discuss your requirements and create a detailed project plan tailored to your needs.'
    },
    {
      number: '02',
      title: 'Design & Development',
      description: 'Our team creates beautiful designs and develops your solution using cutting-edge technology.'
    },
    {
      number: '03',
      title: 'Testing & Launch',
      description: 'We thoroughly test everything and launch your project with ongoing support.'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Process
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A streamlined approach to delivering exceptional results quickly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold text-blue-400 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}