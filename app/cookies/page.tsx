import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Chính sách Cookie - Đậu Vui Vẻ",
  description: "Chính sách Cookie của Đậu Vui Vẻ - Trang web về chăm sóc và nuôi dạy trẻ nhỏ",
}

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-6 text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
          Trang chủ
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900 dark:text-gray-100">Chính sách Cookie</span>
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">Chính sách Cookie</h1>
        <div className="prose prose-blue dark:prose-invert max-w-none">
          <p>
            <strong>Cập nhật lần cuối:</strong> 01/05/2023
          </p>

          <h2>1. Cookie là gì?</h2>
          <p>
            Cookie là các tệp văn bản nhỏ được lưu trữ trên máy tính hoặc thiết bị di động của bạn khi bạn truy cập một
            trang web. Cookie được sử dụng rộng rãi để làm cho các trang web hoạt động hiệu quả hơn, cũng như cung cấp
            thông tin cho chủ sở hữu trang web.
          </p>

          <h2>2. Cách chúng tôi sử dụng Cookie</h2>
          <p>Trang web Đậu Vui Vẻ.vn sử dụng cookie cho các mục đích sau:</p>
          <ul>
            <li>
              <strong>Cookie cần thiết:</strong> Những cookie này cần thiết để trang web hoạt động và không thể tắt
              trong hệ thống của chúng tôi. Chúng thường chỉ được thiết lập để đáp ứng các hành động của bạn như thiết
              lập tùy chọn bảo mật, đăng nhập hoặc điền vào biểu mẫu. Bạn có thể cài đặt trình duyệt của mình để chặn
              hoặc cảnh báo bạn về những cookie này, nhưng một số phần của trang web có thể không hoạt động.
            </li>
            <li>
              <strong>Cookie phân tích/hiệu suất:</strong> Những cookie này cho phép chúng tôi đếm lượt truy cập và
              nguồn lưu lượng để chúng tôi có thể đo lường và cải thiện hiệu suất của trang web. Chúng giúp chúng tôi
              biết trang nào phổ biến nhất và ít phổ biến nhất và xem cách khách truy cập di chuyển trên trang web. Tất
              cả thông tin mà những cookie này thu thập đều được tổng hợp và do đó là ẩn danh.
            </li>
            <li>
              <strong>Cookie chức năng:</strong> Những cookie này cho phép trang web cung cấp chức năng và cá nhân hóa
              nâng cao. Chúng có thể được thiết lập bởi chúng tôi hoặc bởi các nhà cung cấp bên thứ ba có dịch vụ chúng
              tôi đã thêm vào trang của mình. Nếu bạn không cho phép những cookie này, một số hoặc tất cả các dịch vụ
              này có thể không hoạt động đúng.
            </li>
            <li>
              <strong>Cookie tiếp thị/nhắm mục tiêu:</strong> Những cookie này có thể được thiết lập thông qua trang web
              của chúng tôi bởi các đối tác quảng cáo của chúng tôi. Chúng có thể được sử dụng bởi các công ty đó để xây
              dựng hồ sơ về sở thích của bạn và hiển thị cho bạn quảng cáo phù hợp trên các trang web khác. Chúng không
              lưu trữ trực tiếp thông tin cá nhân, nhưng dựa trên việc xác định duy nhất trình duyệt và thiết bị
              internet của bạn.
            </li>
          </ul>

          <h2>3. Kiểm soát Cookie</h2>
          <p>
            Hầu hết các trình duyệt web cho phép bạn kiểm soát cookie thông qua cài đặt trình duyệt của bạn. Bạn có thể
            chặn, xóa hoặc vô hiệu hóa cookie nếu bạn muốn. Tuy nhiên, nếu bạn chọn chặn tất cả cookie (bao gồm cả
            cookie cần thiết), bạn có thể không truy cập được tất cả hoặc các phần của trang web của chúng tôi. Trừ khi
            bạn đã điều chỉnh cài đặt trình duyệt của mình để từ chối cookie, hệ thống của chúng tôi sẽ phát hành cookie
            khi bạn truy cập trang web của chúng tôi.
          </p>

          <h2>4. Cookie của bên thứ ba</h2>
          <p>
            Chúng tôi cũng sử dụng cookie của bên thứ ba, chẳng hạn như Google Analytics, để thu thập thông tin về cách
            khách truy cập sử dụng trang web của chúng tôi. Những cookie này thu thập thông tin về số lượng khách truy
            cập vào trang web, trang họ đến từ đâu và trang họ truy cập, và các trang họ truy cập trên trang web của
            chúng tôi. Chúng tôi sử dụng thông tin này để cải thiện trang web của mình và cung cấp trải nghiệm tốt hơn
            cho người dùng.
          </p>

          <h2>5. Thay đổi đối với Chính sách Cookie</h2>
          <p>
            Chúng tôi có thể cập nhật Chính sách Cookie này theo thời gian. Chúng tôi khuyến khích người dùng kiểm tra
            trang này thường xuyên để biết bất kỳ thay đổi nào. Thay đổi đối với Chính sách Cookie này có hiệu lực khi
            chúng được đăng trên trang này.
          </p>

          <h2>6. Liên hệ với chúng tôi</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về cách chúng tôi sử dụng cookie, vui lòng liên hệ với chúng tôi tại:
            privacy@kidcare.vn
          </p>
        </div>
      </div>
    </div>
  )
}
