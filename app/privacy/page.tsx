import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { WEB_INFO } from "@/constants/domain-info";

export const metadata: Metadata = {
  title: "Chính sách bảo mật - Đậu Vui Vẻ",
  description:
    "Chính sách bảo mật của Đậu Vui Vẻ - Trang web về chăm sóc và nuôi dạy trẻ nhỏ",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-6 text-gray-500 dark:text-gray-400">
        <Link
          href="/"
          className="hover:text-primary-600 dark:hover:text-primary-400"
        >
          Trang chủ
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900 dark:text-gray-100">
          Chính sách bảo mật
        </span>
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">
          Chính sách bảo mật
        </h1>
        <div className="prose prose-blue dark:prose-invert max-w-none">
          <p>
            <strong>Cập nhật lần cuối:</strong> 01/05/2023
          </p>

          <h2>1. Giới thiệu</h2>
          <p>
            Đậu Vui Vẻ (&quot;chúng tôi&quot;, &quot;của chúng tôi&quot;) cam
            kết bảo vệ quyền riêng tư của bạn. Chính sách bảo mật này giải thích
            cách chúng tôi thu thập, sử dụng, tiết lộ, lưu trữ và bảo vệ thông
            tin của bạn khi bạn truy cập trang web {WEB_INFO.url}{" "}
            (&quot;Trang web&quot;).
          </p>

          <h2>2. Thông tin chúng tôi thu thập</h2>
          <p>Chúng tôi có thể thu thập các loại thông tin sau:</p>
          <ul>
            <li>
              <strong>Thông tin cá nhân:</strong> Họ tên, địa chỉ email, số điện
              thoại khi bạn đăng ký tài khoản, đăng ký nhận bản tin hoặc liên hệ
              với chúng tôi.
            </li>
            <li>
              <strong>Thông tin sử dụng:</strong> Thông tin về cách bạn sử dụng
              Trang web, bao gồm các trang bạn xem, thời gian bạn truy cập, và
              các liên kết bạn nhấp vào.
            </li>
            <li>
              <strong>Thông tin thiết bị:</strong> Thông tin về thiết bị bạn sử
              dụng để truy cập Trang web, bao gồm loại thiết bị, hệ điều hành,
              trình duyệt web, địa chỉ IP.
            </li>
            <li>
              <strong>Cookie và công nghệ tương tự:</strong> Chúng tôi sử dụng
              cookie và các công nghệ tương tự để thu thập thông tin về hoạt
              động trực tuyến của bạn. Xem thêm trong Chính sách Cookie của
              chúng tôi.
            </li>
          </ul>

          <h2>3. Mục đích sử dụng thông tin</h2>
          <p>Chúng tôi sử dụng thông tin thu thập được cho các mục đích sau:</p>
          <ul>
            <li>
              Cung cấp, duy trì và cải thiện Trang web và dịch vụ của chúng tôi
            </li>
            <li>Xử lý và phản hồi các yêu cầu, câu hỏi và phản hồi của bạn</li>
            <li>
              Gửi thông báo kỹ thuật, cập nhật, cảnh báo bảo mật và tin nhắn hỗ
              trợ
            </li>
            <li>
              Gửi bản tin, thông tin tiếp thị và quảng cáo (nếu bạn đã đăng ký)
            </li>
            <li>
              Phát hiện, ngăn chặn và giải quyết các vấn đề kỹ thuật, bảo mật
              hoặc gian lận
            </li>
            <li>Tuân thủ các nghĩa vụ pháp lý</li>
          </ul>

          <h2>4. Chia sẻ thông tin</h2>
          <p>
            Chúng tôi có thể chia sẻ thông tin của bạn trong các trường hợp sau:
          </p>
          <ul>
            <li>
              <strong>Với nhà cung cấp dịch vụ:</strong> Chúng tôi có thể chia
              sẻ thông tin với các bên thứ ba cung cấp dịch vụ cho chúng tôi,
              như lưu trữ web, phân tích dữ liệu, xử lý thanh toán, và dịch vụ
              khách hàng.
            </li>
            <li>
              <strong>Tuân thủ pháp luật:</strong> Chúng tôi có thể tiết lộ
              thông tin nếu được yêu cầu bởi luật pháp, quy định, quy trình pháp
              lý hoặc yêu cầu của chính phủ.
            </li>
            <li>
              <strong>Bảo vệ quyền lợi:</strong> Chúng tôi có thể tiết lộ thông
              tin để bảo vệ quyền, tài sản hoặc an toàn của chúng tôi, người
              dùng của chúng tôi hoặc công chúng.
            </li>
            <li>
              <strong>Chuyển nhượng kinh doanh:</strong> Trong trường hợp sáp
              nhập, mua lại, tái cơ cấu, hoặc bán tài sản, thông tin của bạn có
              thể được chuyển giao như một phần của giao dịch đó.
            </li>
          </ul>

          <h2>5. Bảo mật thông tin</h2>
          <p>
            Chúng tôi thực hiện các biện pháp bảo mật hợp lý để bảo vệ thông tin
            của bạn khỏi truy cập, sử dụng, thay đổi hoặc tiết lộ trái phép. Tuy
            nhiên, không có phương thức truyền tải qua internet hoặc lưu trữ
            điện tử nào là an toàn 100%. Do đó, chúng tôi không thể đảm bảo an
            ninh tuyệt đối cho thông tin của bạn.
          </p>

          <h2>6. Quyền của bạn</h2>
          <p>
            Tùy thuộc vào luật pháp hiện hành, bạn có thể có các quyền sau liên
            quan đến thông tin của bạn:
          </p>
          <ul>
            <li>Quyền truy cập và nhận bản sao thông tin của bạn</li>
            <li>
              Quyền yêu cầu sửa đổi hoặc cập nhật thông tin không chính xác
            </li>
            <li>Quyền yêu cầu xóa thông tin của bạn</li>
            <li>Quyền hạn chế hoặc phản đối việc xử lý thông tin của bạn</li>
            <li>Quyền rút lại sự đồng ý của bạn</li>
          </ul>
          <p>
            Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi theo
            thông tin liên hệ được cung cấp ở cuối chính sách này.
          </p>

          <h2>7. Thông tin của trẻ em</h2>
          <p>
            Trang web của chúng tôi không nhắm đến trẻ em dưới 13 tuổi và chúng
            tôi không cố ý thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi.
            Nếu bạn là phụ huynh hoặc người giám hộ và tin rằng con bạn đã cung
            cấp thông tin cá nhân cho chúng tôi, vui lòng liên hệ với chúng tôi
            để chúng tôi có thể thực hiện các bước cần thiết để xóa thông tin
            đó.
          </p>

          <h2>8. Thay đổi đối với Chính sách Bảo mật</h2>
          <p>
            Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian.
            Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi quan trọng nào
            bằng cách đăng thông báo trên Trang web hoặc gửi email cho bạn.
            Chúng tôi khuyến khích bạn xem xét Chính sách Bảo mật này định kỳ để
            biết thông tin mới nhất về cách chúng tôi bảo vệ thông tin của bạn.
          </p>

          <h2>9. Liên hệ với chúng tôi</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi, nhận xét hoặc yêu cầu nào liên quan đến
            Chính sách Bảo mật này hoặc cách chúng tôi xử lý thông tin của bạn,
            vui lòng liên hệ với chúng tôi tại:
          </p>
          <p>
            Email: {WEB_INFO.email}
            <br />
            Địa chỉ: {WEB_INFO.address}
            <br />
            Điện thoại: {WEB_INFO.phone}
          </p>
        </div>
      </div>
    </div>
  );
}
