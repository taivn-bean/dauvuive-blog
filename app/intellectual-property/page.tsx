import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { WEB_INFO } from "@/constants/domain-info";

export const metadata: Metadata = {
  title: "Quyền sở hữu trí tuệ - Đậu Vui Vẻ",
  description:
    "Chính sách quyền sở hữu trí tuệ của Đậu Vui Vẻ - Trang web về chăm sóc và nuôi dạy trẻ nhỏ",
};

export default function IntellectualPropertyPage() {
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
          Quyền sở hữu trí tuệ
        </span>
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">
          Quyền sở hữu trí tuệ
        </h1>
        <div className="prose prose-blue dark:prose-invert max-w-none">
          <p>
            <strong>Cập nhật lần cuối:</strong> 01/05/2023
          </p>

          <h2>1. Quyền sở hữu nội dung</h2>
          <p>
            Trang web Đậu Vui Vẻ.vn và tất cả nội dung, tính năng và chức năng
            của nó (bao gồm nhưng không giới hạn ở tất cả thông tin, phần mềm,
            văn bản, hình ảnh, âm thanh, video, biểu tượng, thiết kế) đều thuộc
            sở hữu của Đậu Vui Vẻ, các bên cấp phép hoặc các nhà cung cấp nội
            dung khác và được bảo vệ bởi luật bản quyền, thương hiệu, bằng sáng
            chế, bí mật thương mại và các quyền sở hữu trí tuệ hoặc quyền sở hữu
            khác theo luật pháp Việt Nam và quốc tế.
          </p>

          <h2>2. Giấy phép sử dụng</h2>
          <p>
            Đậu Vui Vẻ cấp cho bạn giấy phép có giới hạn, không độc quyền, không
            thể chuyển nhượng, có thể thu hồi để truy cập và sử dụng Trang web
            chỉ cho mục đích cá nhân, phi thương mại của bạn. Giấy phép này
            không bao gồm:
          </p>
          <ul>
            <li>
              Bất kỳ việc bán hoặc sử dụng thương mại nào của Trang web hoặc nội
              dung của nó
            </li>
            <li>
              Bất kỳ việc sao chép, phân phối, trình diễn công khai hoặc sử dụng
              phái sinh nào
            </li>
            <li>
              Bất kỳ việc sử dụng kỹ thuật khai thác dữ liệu, robot hoặc các
              phương pháp thu thập và trích xuất dữ liệu tương tự
            </li>
            <li>
              Bất kỳ việc sử dụng Trang web hoặc nội dung của nó ngoài các chức
              năng được thiết kế
            </li>
            <li>
              Bất kỳ việc sử dụng nào có thể gây hại cho Trang web hoặc ảnh
              hưởng đến khả năng sử dụng của người khác
            </li>
          </ul>
          <p>
            Bất kỳ việc sử dụng Trang web không được cho phép rõ ràng trong các
            Điều khoản sử dụng đều bị nghiêm cấm và sẽ chấm dứt giấy phép được
            cấp bởi Đậu Vui Vẻ.
          </p>

          <h2>3. Thương hiệu</h2>
          <p>
            Tên &quot;Đậu Vui Vẻ&quot;, logo Đậu Vui Vẻ và tất cả các tên, logo,
            tên sản phẩm và dịch vụ, thiết kế và khẩu hiệu liên quan đều là
            thương hiệu của Đậu Vui Vẻ hoặc các chi nhánh hoặc bên cấp phép của
            nó. Bạn không được sử dụng các thương hiệu này mà không có sự cho
            phép trước bằng văn bản của Đậu Vui Vẻ. Tất cả các thương hiệu khác,
            tên đã đăng ký hoặc tên thương mại xuất hiện trên Trang web đều là
            tài sản của chủ sở hữu tương ứng.
          </p>

          <h2>4. Vi phạm bản quyền</h2>
          <p>
            Đậu Vui Vẻ tôn trọng quyền sở hữu trí tuệ của người khác và yêu cầu
            người dùng của mình cũng làm như vậy. Nếu bạn tin rằng bất kỳ nội
            dung nào trên Trang web vi phạm bản quyền của bạn, vui lòng gửi
            thông báo vi phạm bản quyền đến địa chỉ email: {WEB_INFO.email}
            với các thông tin sau:
          </p>
          <ul>
            <li>
              Chữ ký điện tử hoặc vật lý của người được ủy quyền hành động thay
              mặt cho chủ sở hữu quyền lợi độc quyền bị vi phạm
            </li>
            <li>
              Mô tả về tác phẩm có bản quyền mà bạn cho rằng đã bị vi phạm
            </li>
            <li>
              Mô tả về nội dung bạn cho là vi phạm và vị trí của nó trên Trang
              web
            </li>
            <li>Địa chỉ, số điện thoại và địa chỉ email của bạn</li>
            <li>
              Tuyên bố rằng bạn tin tưởng một cách thiện chí rằng việc sử dụng
              nội dung không được phép bởi chủ sở hữu bản quyền, đại diện của họ
              hoặc luật pháp
            </li>
            <li>
              Tuyên bố rằng thông tin trong thông báo của bạn là chính xác và,
              dưới hình phạt của tội khai man, bạn là chủ sở hữu bản quyền hoặc
              được ủy quyền hành động thay mặt cho chủ sở hữu bản quyền
            </li>
          </ul>

          <h2>5. Nội dung người dùng</h2>
          <p>
            Nếu bạn đăng, tải lên, gửi hoặc cung cấp bất kỳ nội dung nào trên
            Trang web, bạn cấp cho Đậu Vui Vẻ quyền không độc quyền, miễn phí
            bản quyền, vĩnh viễn, không thể thu hồi và có thể cấp phép lại để sử
            dụng, sao chép, sửa đổi, điều chỉnh, xuất bản, dịch thuật, tạo các
            tác phẩm phái sinh, phân phối, thực hiện và hiển thị nội dung đó
            trên Trang web và trên các phương tiện truyền thông khác.
          </p>
          <p>
            Bạn tuyên bố và đảm bảo rằng bạn sở hữu hoặc kiểm soát tất cả các
            quyền đối với nội dung bạn đăng; nội dung là chính xác và không gây
            hiểu lầm; và việc sử dụng nội dung bạn cung cấp không vi phạm các
            Điều khoản sử dụng này và sẽ không gây hại cho bất kỳ cá nhân hoặc
            tổ chức nào.
          </p>

          <h2>6. Liên hệ</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về Chính sách quyền sở hữu trí tuệ
            này, vui lòng liên hệ với chúng tôi tại:
            {WEB_INFO.email}
          </p>
        </div>
      </div>
    </div>
  );
}
