import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Điều khoản sử dụng - Đậu Vui Vẻ",
  description: "Điều khoản sử dụng của Đậu Vui Vẻ - Trang web về chăm sóc và nuôi dạy trẻ nhỏ",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-6 text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
          Trang chủ
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900 dark:text-gray-100">Điều khoản sử dụng</span>
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">Điều khoản sử dụng</h1>
        <div className="prose prose-blue dark:prose-invert max-w-none">
          <p>
            <strong>Cập nhật lần cuối:</strong> 01/05/2023
          </p>

          <h2>1. Chấp nhận điều khoản</h2>
          <p>
            Bằng cách truy cập hoặc sử dụng trang web Dauvuive.vn (&quot;Trang web&quot;), bạn đồng ý tuân theo và chịu ràng buộc
            bởi các Điều khoản sử dụng này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, bạn không
            được phép truy cập hoặc sử dụng Trang web.
          </p>

          <h2>2. Thay đổi điều khoản</h2>
          <p>
            Chúng tôi có thể sửa đổi hoặc cập nhật các Điều khoản sử dụng này theo thời gian mà không cần thông báo
            trước. Việc bạn tiếp tục sử dụng Trang web sau khi thay đổi được đăng tải đồng nghĩa với việc bạn chấp nhận
            và đồng ý với các thay đổi đó. Bạn nên kiểm tra trang này định kỳ để cập nhật về các thay đổi.
          </p>

          <h2>3. Quyền sở hữu trí tuệ</h2>
          <p>
            Trang web và tất cả nội dung, tính năng và chức năng của nó (bao gồm nhưng không giới hạn ở tất cả thông
            tin, phần mềm, văn bản, hình ảnh, âm thanh, video, biểu tượng, thiết kế) đều thuộc sở hữu của Đậu Vui Vẻ, các
            bên cấp phép hoặc các nhà cung cấp nội dung khác và được bảo vệ bởi luật bản quyền, thương hiệu, bằng sáng
            chế, bí mật thương mại và các quyền sở hữu trí tuệ hoặc quyền sở hữu khác.
          </p>

          <h2>4. Giới hạn sử dụng</h2>
          <p>Bạn đồng ý không:</p>
          <ul>
            <li>Sử dụng Trang web theo bất kỳ cách nào vi phạm luật pháp hoặc quy định hiện hành</li>
            <li>Sử dụng Trang web để gửi quảng cáo hoặc tài liệu khuyến mại không được yêu cầu hoặc không được phép</li>
            <li>
              Giả mạo hoặc cố gắng giả mạo danh tính của người khác khi sử dụng Trang web hoặc gửi nội dung hoặc bình
              luận
            </li>
            <li>
              Thu thập hoặc lưu trữ dữ liệu cá nhân về người dùng khác mà không có sự đồng ý của họ hoặc tham gia vào
              bất kỳ hành vi nào khác xâm phạm quyền riêng tư của người khác
            </li>
            <li>
              Tải lên, đăng tải, gửi email hoặc truyền tải nội dung bất hợp pháp, có hại, đe dọa, lạm dụng, quấy rối,
              phỉ báng, khiêu dâm, xúc phạm, xâm phạm quyền riêng tư của người khác, thù địch hoặc phân biệt chủng tộc,
              dân tộc hoặc phản cảm
            </li>
            <li>
              Tải lên, đăng tải, gửi email hoặc truyền tải bất kỳ tài liệu nào chứa virus phần mềm hoặc mã, tệp hoặc
              chương trình máy tính khác được thiết kế để gây cản trở, phá hủy hoặc hạn chế chức năng của phần mềm hoặc
              phần cứng máy tính hoặc thiết bị viễn thông
            </li>
          </ul>

          <h2>5. Nội dung người dùng</h2>
          <p>
            Nếu bạn đăng, tải lên, gửi hoặc cung cấp bất kỳ nội dung nào trên Trang web, bạn cấp cho chúng tôi quyền
            không độc quyền, miễn phí bản quyền, vĩnh viễn, không thể thu hồi và có thể cấp phép lại để sử dụng, sao
            chép, sửa đổi, điều chỉnh, xuất bản, dịch thuật, tạo các tác phẩm phái sinh, phân phối, thực hiện và hiển
            thị nội dung đó trên Trang web và trên các phương tiện truyền thông khác.
          </p>
          <p>
            Bạn tuyên bố và đảm bảo rằng bạn sở hữu hoặc kiểm soát tất cả các quyền đối với nội dung bạn đăng; nội dung
            là chính xác và không gây hiểu lầm; và việc sử dụng nội dung bạn cung cấp không vi phạm các Điều khoản sử
            dụng này và sẽ không gây hại cho bất kỳ cá nhân hoặc tổ chức nào.
          </p>

          <h2>6. Liên kết đến trang web khác</h2>
          <p>
            Trang web có thể chứa các liên kết đến các trang web của bên thứ ba không thuộc sở hữu hoặc kiểm soát của
            Đậu Vui Vẻ. Đậu Vui Vẻ không có quyền kiểm soát và không chịu trách nhiệm về nội dung, chính sách bảo mật hoặc
            thực tiễn của bất kỳ trang web hoặc dịch vụ bên thứ ba nào. Bạn thừa nhận và đồng ý rằng Đậu Vui Vẻ sẽ không
            chịu trách nhiệm hoặc có nghĩa vụ, trực tiếp hoặc gián tiếp, đối với bất kỳ thiệt hại hoặc mất mát nào gây
            ra hoặc bị cáo buộc là do hoặc liên quan đến việc sử dụng hoặc tin tưởng vào bất kỳ nội dung, hàng hóa hoặc
            dịch vụ nào có sẵn trên hoặc thông qua bất kỳ trang web hoặc dịch vụ nào như vậy.
          </p>

          <h2>7. Từ chối bảo đảm</h2>
          <p>
            Trang web được cung cấp trên cơ sở &quot;nguyên trạng&quot; và &quot;sẵn có&quot;. Đậu Vui Vẻ từ chối mọi bảo đảm dưới bất kỳ hình
            thức nào, rõ ràng hay ngụ ý, bao gồm nhưng không giới hạn ở các bảo đảm ngụ ý về tính thương mại, sự phù hợp
            cho một mục đích cụ thể và không vi phạm. Đậu Vui Vẻ không đảm bảo rằng Trang web sẽ đáp ứng yêu cầu của bạn,
            hoặc Trang web sẽ không bị gián đoạn, kịp thời, an toàn hoặc không có lỗi.
          </p>

          <h2>8. Giới hạn trách nhiệm</h2>
          <p>
            Trong mọi trường hợp, Đậu Vui Vẻ, các giám đốc, nhân viên, đối tác, đại lý, nhà cung cấp hoặc chi nhánh của
            Đậu Vui Vẻ sẽ không chịu trách nhiệm về bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, hậu quả hoặc trừng
            phạt nào, bao gồm nhưng không giới hạn ở, mất lợi nhuận, dữ liệu, sử dụng, uy tín hoặc các tổn thất vô hình
            khác, phát sinh từ (i) việc bạn truy cập hoặc sử dụng hoặc không thể truy cập hoặc sử dụng Trang web; (ii)
            bất kỳ hành vi hoặc nội dung nào của bất kỳ bên thứ ba nào trên Trang web; (iii) bất kỳ nội dung nào có được
            từ Trang web; và (iv) truy cập, sử dụng hoặc thay đổi trái phép các bài đăng hoặc nội dung của bạn.
          </p>

          <h2>9. Bồi thường</h2>
          <p>
            Bạn đồng ý bồi thường, bảo vệ và giữ cho Đậu Vui Vẻ và các công ty con, chi nhánh, đối tác, nhân viên, nhà
            thầu, nhà cung cấp dịch vụ, đại lý và nhà cấp phép của Đậu Vui Vẻ không bị tổn hại từ và chống lại bất kỳ khiếu
            nại, trách nhiệm, thiệt hại, phán quyết, giải thưởng, tổn thất, chi phí, chi phí hoặc phí (bao gồm cả phí
            luật sư hợp lý) phát sinh từ hoặc liên quan đến việc bạn vi phạm các Điều khoản sử dụng này.
          </p>

          <h2>10. Luật áp dụng</h2>
          <p>
            Các Điều khoản sử dụng này sẽ được điều chỉnh và giải thích theo luật pháp của Việt Nam, không tính đến các
            nguyên tắc xung đột pháp luật.
          </p>

          <h2>11. Chấm dứt</h2>
          <p>
            Chúng tôi có thể chấm dứt hoặc đình chỉ quyền truy cập của bạn vào Trang web ngay lập tức, mà không cần
            thông báo trước hoặc trách nhiệm pháp lý, vì bất kỳ lý do gì, bao gồm nhưng không giới hạn nếu bạn vi phạm
            các Điều khoản sử dụng.
          </p>

          <h2>12. Liên hệ</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về các Điều khoản sử dụng này, vui lòng liên hệ với chúng tôi tại:
            terms@dauvuive.vn
          </p>
        </div>
      </div>
    </div>
  )
}
