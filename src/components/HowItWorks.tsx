import { Plus, Settings, Send, BarChart3 } from 'lucide-react';

interface Step {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: <Plus className="w-8 h-8" />,
    title: 'Create Your App',
    description: 'Register your application and generate a secure API key. No credit card required.',
  },
  {
    number: 2,
    icon: <Settings className="w-8 h-8" />,
    title: 'Select Provider & Model',
    description: 'Choose your AI provider (OpenAI, Stability, Cohere, etc.) and configure model settings.',
  },
  {
    number: 3,
    icon: <Send className="w-8 h-8" />,
    title: 'Send Requests',
    description: 'Route your AI requests through AuthentGate with unified authentication and routing.',
  },
  {
    number: 4,
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Track & Optimize',
    description: 'Monitor usage metrics, quotas, and logs to optimize your AI application performance.',
  },
];

const StepCard = ({ step }: { step: Step }) => {
  return (
    <div className="relative">
      {/* Step number badge */}
      <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white font-bold text-lg flex items-center justify-center shadow-lg">
        {step.number}
      </div>

      {/* Card */}
      <div className="pt-6 p-6 bg-white border border-neutral-200 rounded-xl hover:border-primary-300 transition-all duration-300">
        {/* Icon */}
        <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-primary-50 text-primary-500">
          {step.icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
        <p className="text-neutral-600 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Get started with AuthentGate in just four simple steps.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>

        {/* Flow visualization for desktop */}
        <div className="hidden lg:flex items-center justify-center mt-12 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary rounded-full"></div>
              {i < 3 && <div className="text-2xl text-primary-500">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
