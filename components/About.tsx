export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            關於 SOS Repair
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              SOS Repair 成立的初衷，是希望在台北市中心，提供一個交通方便、且快速服務的 
              <strong className="text-primary-600"> Apple 專業維修據點</strong>。
            </p>
            
            <p>
              我們深知，您的 iPhone、iPad、MacBook 不只是工具，更承載著生活、工作與回憶。
            </p>
            
            <p>
              維修團隊由多位擁有超過 10 年維修經驗的專業工程師組成。
              他們不僅熟悉蘋果各世代產品的架構，精通
              <strong className="text-primary-600"> 主機板維修、晶片更換、資料救援</strong>
              等精密工序，能在最短時間內，提供最高品質的解決方案。
            </p>
            
            <div className="mt-8 p-6 bg-warm-beige rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                為了讓顧客更安心，我們堅持：
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <div>
                    <strong>專業標準</strong>：每一項維修都依照嚴謹流程操作，避免二次損傷。
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <div>
                    <strong>嚴選零件</strong>：自收貨確認、功能測試、上機穩定性，3階段流程，只使用高品質零件。
                    零件維修後提供完整保固一年服務；主機板根據問題點提供半年保固。
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <div>
                    <strong>持續精進</strong>：定期引進最新維修設備與技術，與 Apple 新機同步進化。
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-lg font-semibold text-center mt-8 text-primary-600">
              在 SOS Repair，您得到的不只是「修好一台機器」，更是 
              <strong> 安心、信任與保障</strong>。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}