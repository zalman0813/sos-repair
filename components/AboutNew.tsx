'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutNew() {
  const { t } = useLanguage()

  const features = [
    {
      number: '01',
      title: t.about.features.standard.title,
      description: t.about.features.standard.description,
    },
    {
      number: '02',
      title: t.about.features.parts.title,
      description: t.about.features.parts.description,
    },
    {
      number: '03',
      title: t.about.features.improvement.title,
      description: t.about.features.improvement.description,
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900" style={{ textShadow: '2px 2px 4px rgba(160, 160, 160, 0.5)' }}>{t.about.title}</span>
          </h2>
          <div className="w-24 h-1 bg-warm-yellow mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto text-center whitespace-pre-line">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-warm-yellow mb-4" style={{ textShadow: '2px 2px 4px rgba(128, 128, 128, 0.4)' }}>{t.about.mission.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t.about.mission.content1}
                <span className="text-warm-yellow font-semibold" style={{ textShadow: '1px 1px 2px rgba(128, 128, 128, 0.3)' }}>{t.about.mission.highlight1}</span>
                {t.about.mission.content2}
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-warm-yellow mb-4" style={{ textShadow: '2px 2px 4px rgba(128, 128, 128, 0.4)' }}>{t.about.team.title}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t.about.team.content}
                <span className="text-warm-yellow font-semibold" style={{ textShadow: '1px 1px 2px rgba(128, 128, 128, 0.3)' }}>{t.about.team.highlight}</span>
                {t.about.team.content2}
              </p>
            </div>
          </div>

          {/* Right features */}
          <div className="space-y-6">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group relative backdrop-blur-lg bg-white/80 p-6 rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] hover:bg-gradient-to-br hover:from-amber-50/30 hover:to-orange-50/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-warm-yellow/10 rounded-full flex items-center justify-center group-hover:bg-warm-yellow/20 transition-colors">
                      <span className="text-warm-yellow text-2xl font-bold" style={{ textShadow: '2px 2px 4px rgba(128, 128, 128, 0.4)' }}>{feature.number}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-warm-yellow mb-2" style={{ textShadow: '1px 1px 2px rgba(128, 128, 128, 0.3)' }}>
                      {feature.title}
                    </h4>
                    <p className="text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 backdrop-blur-lg bg-gradient-to-r from-amber-50/30 to-orange-50/30 rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:from-amber-50/50 hover:to-orange-50/50 transition-all duration-300">
              <p className="text-center text-lg">
                <span className="text-warm-yellow font-bold" style={{ textShadow: '1px 1px 2px rgba(128, 128, 128, 0.3)' }}>{t.about.promise.prefix}</span>
                <br />
                <span className="text-gray-700">
                  {t.about.promise.line1}
                </span>
                <br />
                <span className="text-warm-yellow font-semibold text-xl" style={{ textShadow: '2px 2px 4px rgba(128, 128, 128, 0.4)' }}>
                  {t.about.promise.highlight}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}