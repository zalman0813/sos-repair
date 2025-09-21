'use client'

export default function StatsSection() {
  return (
    <section className="bg-[#f2d50d] py-16 md:py-20" style={{ fontFamily: '"Microsoft JhengHei", "微軟正黑體", sans-serif' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Founded Year */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-3">
              2025
            </h3>
            <div className="w-12 h-0.5 bg-gray-900 mx-auto mb-3"></div>
            <p className="text-gray-900 font-bold text-base md:text-lg">
              成立專業維修店
            </p>
          </div>

          {/* Google Reviews */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-3">
              75+
            </h3>
            <div className="w-12 h-0.5 bg-gray-900 mx-auto mb-3"></div>
            <p className="text-gray-900 font-bold text-base md:text-lg">
              GOOGLE五星好評
            </p>
          </div>

          {/* Success Cases */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-3">
              2536
            </h3>
            <div className="w-12 h-0.5 bg-gray-900 mx-auto mb-3"></div>
            <p className="text-gray-900 font-bold text-base md:text-lg">
              維修成功案例
            </p>
          </div>

          {/* Partnership */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-black text-gray-900 mb-3">
              3+
            </h3>
            <div className="w-12 h-0.5 bg-gray-900 mx-auto mb-3"></div>
            <p className="text-gray-900 font-bold text-base md:text-lg">
              特約合作
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}