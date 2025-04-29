import type { Metadata } from "next"
import SingleProductAffiliate from "@/components/affiliate/single-product-affiliate"
import RelatedProductsCarousel from "@/components/affiliate/related-products-carousel"
import InContentAffiliate from "@/components/affiliate/in-content-affiliate"
import ProductComparison from "@/components/affiliate/product-comparison"
import ContextualAffiliate from "@/components/affiliate/contextual-affiliate"
import ProductShowcase from "@/components/affiliate/product-showcase"

export const metadata: Metadata = {
  title: "Ví dụ về Affiliate Components",
  description: "Trang hiển thị các component affiliate khác nhau",
}

// Mock data
const mockProducts = [
  {
    id: "1",
    title: "Máy hút sữa điện đôi Medela Freestyle Flex",
    description:
      "Máy hút sữa điện đôi không dây, nhỏ gọn với công nghệ 2-Phase Expression giúp hút sữa hiệu quả và thoải mái.",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Máy+hút+sữa",
    price: 8990000,
    originalPrice: 10500000,
    affiliateUrl: "https://example.com/product/1",
    rating: 4.8,
    reviewCount: 156,
    merchant: "MedicalStore",
  },
  {
    id: "2",
    title: "Ghế ăn đa năng cho bé Chicco Polly Magic Relax",
    description:
      "Ghế ăn đa năng 3 trong 1 có thể điều chỉnh độ cao, có thể gập gọn, phù hợp cho bé từ sơ sinh đến 3 tuổi.",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Ghế+ăn+đa+năng",
    price: 4590000,
    originalPrice: 5200000,
    affiliateUrl: "https://example.com/product/2",
    rating: 4.7,
    reviewCount: 89,
    merchant: "KidsStore",
  },
  {
    id: "3",
    title: "Xe đẩy em bé gấp gọn Aprica Optia Cushion",
    description: "Xe đẩy siêu nhẹ, gấp gọn một chạm, có thể sử dụng từ sơ sinh với tư thế nằm phẳng hoàn toàn.",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Xe+đẩy+em+bé",
    price: 12900000,
    originalPrice: 14500000,
    affiliateUrl: "https://example.com/product/3",
    rating: 4.9,
    reviewCount: 203,
    merchant: "BabyWorld",
  },
  {
    id: "4",
    title: "Nôi điện tự động rung lắc Fisher-Price",
    description: "Nôi điện tự động với 6 tốc độ rung lắc, 10 bài hát và âm thanh tự nhiên, giúp dỗ bé ngủ hiệu quả.",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Nôi+điện",
    price: 3290000,
    originalPrice: 3800000,
    affiliateUrl: "https://example.com/product/4",
    rating: 4.6,
    reviewCount: 127,
    merchant: "KidsToys",
  },
  {
    id: "5",
    title: "Bộ chăn ga gối cho bé sơ sinh 100% cotton hữu cơ",
    description: "Bộ chăn ga gối làm từ cotton hữu cơ 100%, mềm mại, an toàn cho làn da nhạy cảm của bé sơ sinh.",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Bộ+chăn+ga",
    price: 1290000,
    originalPrice: 1500000,
    affiliateUrl: "https://example.com/product/5",
    rating: 4.8,
    reviewCount: 95,
    merchant: "OrganicBaby",
  },
  {
    id: "6",
    title: "Máy tiệt trùng bình sữa UV Philips Avent",
    description:
      "Máy tiệt trùng bình sữa bằng tia UV, tiêu diệt 99.9% vi khuẩn trong vòng 3 phút mà không cần nước hay hóa chất.",
    imageUrl: "/placeholder.svg?height=300&width=300&text=Máy+tiệt+trùng",
    price: 2990000,
    originalPrice: 3500000,
    affiliateUrl: "https://example.com/product/6",
    rating: 4.7,
    reviewCount: 112,
    merchant: "PhilipsStore",
  },
]

const comparisonFeatures = [
  "Phù hợp cho bé từ 0-6 tháng",
  "Phù hợp cho bé từ 6-12 tháng",
  "Phù hợp cho bé từ 1-3 tuổi",
  "Có thể gập gọn",
  "Dễ vệ sinh",
  "Bảo hành 2 năm",
]

export default function AffiliateExamplesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Ví dụ về Affiliate Components</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Single Product Affiliate</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Component hiển thị một sản phẩm affiliate đơn lẻ với nhiều biến thể khác nhau.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Default Variant</h3>
            <SingleProductAffiliate product={mockProducts[0]} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Horizontal Variant</h3>
            <SingleProductAffiliate product={mockProducts[1]} variant="horizontal" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Compact Variant</h3>
            <SingleProductAffiliate product={mockProducts[2]} variant="compact" />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Products Carousel</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Carousel hiển thị các sản phẩm liên quan, có thể cuộn ngang để xem thêm sản phẩm.
        </p>

        <RelatedProductsCarousel
          products={mockProducts}
          title="Sản phẩm dành cho bé sơ sinh"
          description="Những sản phẩm thiết yếu giúp chăm sóc bé sơ sinh tốt hơn"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">In-Content Affiliate</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Component nhỏ gọn để nhúng vào nội dung bài viết, không gây rối mắt người đọc.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-3">Default Variant</h3>
            <div className="prose max-w-none dark:prose-invert">
              <p>
                Khi chăm sóc trẻ sơ sinh, việc cho bé bú đúng cách rất quan trọng. Nếu mẹ gặp khó khăn trong việc cho bé
                bú, một máy hút sữa chất lượng có thể là giải pháp hữu hiệu.
              </p>

              <InContentAffiliate product={mockProducts[0]} />

              <p>
                Ngoài ra, việc đảm bảo giấc ngủ chất lượng cho bé cũng rất quan trọng đối với sự phát triển của trẻ.
                Nhiều nghiên cứu đã chỉ ra rằng trẻ sơ sinh cần ngủ từ 14-17 giờ mỗi ngày.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Minimal Variant</h3>
            <div className="prose max-w-none dark:prose-invert">
              <p>
                Khi bé bắt đầu ăn dặm, việc chọn ghế ăn phù hợp rất quan trọng. Ghế ăn tốt sẽ giúp bé ngồi đúng tư thế,
                tránh bị sặc và tạo thói quen ăn uống tốt.
              </p>

              <InContentAffiliate product={mockProducts[1]} variant="minimal" />

              <p>
                Nên bắt đầu cho bé ăn dặm từ 6 tháng tuổi, với thức ăn nghiền nhuyễn và tăng dần độ đặc theo độ tuổi của
                bé. Luôn đảm bảo thức ăn đa dạng, đủ chất dinh dưỡng.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Product Comparison</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          So sánh các sản phẩm tương tự để giúp người đọc đưa ra quyết định mua hàng tốt hơn.
        </p>

        <ProductComparison
          products={mockProducts.slice(0, 3)}
          title="So sánh các sản phẩm dành cho bé"
          description="So sánh các tính năng chính của sản phẩm để chọn lựa phù hợp nhất"
          features={comparisonFeatures}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Contextual Affiliate</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Gợi ý sản phẩm dựa trên ngữ cảnh bài viết, giúp người đọc tìm được giải pháp phù hợp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContextualAffiliate product={mockProducts[0]} context="solution">
            <p>
              Nhiều mẹ gặp khó khăn trong việc cho con bú trực tiếp do nhiều nguyên nhân như núm vú phẳng, bé không ngậm
              được vú, mẹ đi làm sớm... Máy hút sữa chất lượng cao là giải pháp hiệu quả giúp mẹ vẫn có thể cung cấp sữa
              mẹ cho bé.
            </p>
          </ContextualAffiliate>

          <ContextualAffiliate product={mockProducts[3]} context="recommendation">
            <p>
              Việc ru bé ngủ có thể rất tốn thời gian và sức lực của bố mẹ. Nôi điện tự động với chức năng rung lắc nhẹ
              nhàng và phát nhạc ru sẽ giúp bé dễ đi vào giấc ngủ hơn, đồng thời giảm gánh nặng cho bố mẹ.
            </p>
          </ContextualAffiliate>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ContextualAffiliate product={mockProducts[4]} context="essential">
            <p>
              Làn da của trẻ sơ sinh rất nhạy cảm và dễ bị kích ứng. Bộ chăn ga gối làm từ cotton hữu cơ 100% là lựa
              chọn thiết yếu giúp bảo vệ làn da bé, đồng thời tạo cảm giác thoải mái, dễ chịu khi ngủ.
            </p>
          </ContextualAffiliate>

          <ContextualAffiliate product={mockProducts[5]} context="alternative">
            <p>
              Thay vì tiệt trùng bình sữa bằng cách đun sôi truyền thống mất nhiều thời gian, máy tiệt trùng UV hiện đại
              giúp tiêu diệt vi khuẩn nhanh chóng mà không cần nước hay hóa chất, an toàn và tiện lợi hơn.
            </p>
          </ContextualAffiliate>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Product Showcase</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Hiển thị nhiều sản phẩm cùng lúc theo dạng lưới, phù hợp cho trang tổng hợp sản phẩm.
        </p>

        <ProductShowcase
          products={mockProducts}
          title="Sản phẩm chăm sóc bé được ưa chuộng"
          description="Những sản phẩm chất lượng cao được nhiều bố mẹ tin dùng"
          columns={3}
        />
      </section>
    </div>
  )
}
