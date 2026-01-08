import { ArrowRight, Github } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-neutral-50 flex items-center justify-center px-4 py-12">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                {/* Main content */}
                <div className="space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-primary-100">
                        <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium text-primary-900">Open Source AI Gateway</span>
                    </div>

                    {/* Main headline */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900">
                        Secure, Scalable,{' '}
                        <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                            Multi-Provider
                        </span>{' '}
                        AI API Gateway
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-neutral-900/70 max-w-3xl mx-auto leading-relaxed">
                        AuthentGate is your unified gateway for AI orchestration. Manage multiple AI providers, handle authentication with built-in API keys, and scale with confidence.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <button className="group px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 bg-white hover:bg-neutral-50 text-primary-500 font-semibold rounded-lg border border-primary-200 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                            <Github className="w-5 h-5" />
                            View on GitHub
                        </button>
                    </div>

                    {/* Subtext */}
                    <p className="text-sm text-neutral-600">
                        MIT Licensed • Open Source • Production Ready
                    </p>
                </div>

                {/* Decorative code block illustration */}
                <div className="mt-16 mx-auto max-w-2xl">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-100 shadow-2xl p-6 md:p-8">
                        <div className="space-y-2 font-mono text-sm">
                            <div className="text-neutral-500">
                                <span className="text-primary-500"># Create your AI gateway in seconds</span>
                            </div>
                            <div className="text-neutral-700">
                                <span className="text-secondary">const</span> gateway = <span className="text-primary-600">await</span> AuthentGate.create()
                            </div>
                            <div className="text-neutral-700">
                                <span className="text-secondary">const</span> response = <span className="text-primary-600">await</span> gateway.request({'{'}
                            </div>
                            <div className="text-neutral-700 ml-4">
                                provider: <span className="text-green-600">'openai'</span>,
                            </div>
                            <div className="text-neutral-700 ml-4">
                                model: <span className="text-green-600">'gpt-4'</span>,
                            </div>
                            <div className="text-neutral-700 ml-4">
                                prompt: <span className="text-green-600">'Hello, AI!'</span>
                            </div>
                            <div className="text-neutral-700">
                                {'}'}})
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
