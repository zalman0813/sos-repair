export default function AboutNew() {
  const features = [
    {
      number: '01',
      title: '專業標準',
      description: '每一項維修都依照嚴謹流程操作，避免二次損傷',
    },
    {
      number: '02',
      title: '嚴選零件',
      description: '3階段流程把關，只使用高品質零件，提供完整保固',
    },
    {
      number: '03',
      title: '持續精進',
      description: '定期引進最新維修設備與技術，與 Apple 新機同步',
    },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-warm-yellow" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>關於我們</span>
          </h2>
          <div className="w-24 h-1 bg-warm-yellow mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            10年維修經驗的專業工程團隊，提供最優質的服務
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-warm-yellow mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>我們的初衷</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                SOS Repair 成立的初衷，是希望在台北市中心，提供一個交通方便、且快速服務的 
                <span className="text-warm-yellow font-semibold" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}> Apple 專業維修據點</span>。
              </p>
              <p className="text-gray-700">
                我們深知，您的 iPhone、iPad、MacBook 不只是工具，更承載著生活、工作與回憶。
              </p>
            </div>

            <div className="backdrop-blur-lg bg-white/80 p-8 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] border border-white/20 hover:shadow-[0_8px_32px_0_rgba(251,146,60,0.15)] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-warm-yellow mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>專業團隊</h3>
              <p className="text-gray-700 leading-relaxed">
                維修團隊由多位擁有超過 10 年維修經驗的專業工程師組成。精通
                <span className="text-warm-yellow font-semibold" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}> 主機板維修、晶片更換、資料救援</span>
                等精密工序，能在最短時間內，提供最高品質的解決方案。
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
                      <span className="text-warm-yellow text-2xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{feature.number}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-warm-yellow mb-2" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
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
                <span className="text-warm-yellow font-bold" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>在 SOS Repair</span>
                <br />
                <span className="text-gray-700">
                  您得到的不只是「修好一台機器」
                </span>
                <br />
                <span className="text-warm-yellow font-semibold text-xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                  更是安心、信任與保障
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}