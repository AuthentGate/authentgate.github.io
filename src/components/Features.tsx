import { Shield, Users, Zap, TrendingUp, Lock, Network } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Secure Authentication',
    description: 'App-level API keys and JWT support with enterprise-grade security.',
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: 'Multi-Provider Support',
    description: 'Connect to OpenAI, Stability, Cohere, and more in one unified interface.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Dynamic Model Selection',
    description: 'Per-app provider and model selection for flexible AI orchestration.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Agent Orchestration',
    description: 'Build complex multi-step AI reasoning pipelines with ease.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Usage Analytics',
    description: 'Track usage metrics, quotas, and logs per app and model in real-time.',
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Production Ready',
    description: 'Battle-tested reliability with monitoring, rate limiting, and failover.',
  },
];

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="group relative p-6 bg-white border border-neutral-200 rounded-xl hover:border-primary-300 transition-all duration-300 hover:shadow-lg">
      {/* Icon container */}
      <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 text-primary-500 group-hover:text-primary-600 transition-colors">
        {feature.icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h3>
      <p className="text-neutral-600 leading-relaxed">{feature.description}</p>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-secondary rounded-full w-0 group-hover:w-full transition-all duration-300"></div>
    </div>
  );
};

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            AuthentGate provides a complete solution for managing AI API access, from authentication to orchestration and analytics.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
