import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Giới thiệu - KidCare",
  description: "Giới thiệu về KidCare - Trang web về chăm sóc và nuôi dạy trẻ nhỏ",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-6 text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
          Trang chủ
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-900 dark:text-gray-100">Giới thiệu</span>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">Về KidCare</h1>

        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Đội ngũ KidCare"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-blue dark:prose-invert max-w-none">
          <h2>Sứ mệnh của chúng tôi</h2>
          <p>
            KidCare ra đời với sứ mệnh cung cấp thông tin đáng tin cậy, khoa học và thực tiễn về chăm sóc và nuôi dạy
            trẻ em từ 0-10 tuổi cho các bậc phụ huynh Việt Nam. Chúng tôi tin rằng mỗi đứa trẻ đều xứng đáng được phát
            triển toàn diện trong một môi trường an toàn, lành mạnh và đầy tình yêu thương.
          </p>

          <h2>Câu chuyện của chúng tôi</h2>
          <p>
            KidCare được thành lập vào năm 2020 bởi một nhóm các chuyên gia trong lĩnh vực y tế, giáo dục và tâm lý trẻ
            em. Xuất phát từ những trăn trở khi nhận thấy nhiều phụ huynh Việt Nam đang gặp khó khăn trong việc tiếp cận
            thông tin chính xác và phù hợp về chăm sóc con cái, chúng tôi quyết định xây dựng một nền tảng trực tuyến
            cung cấp kiến thức toàn diện về nuôi dạy trẻ.
          </p>
          <p>
            Sau hơn 3 năm hoạt động, KidCare đã trở thành người bạn đồng hành đáng tin cậy của hàng trăm nghìn gia đình
            Việt Nam, giúp các bậc phụ huynh tự tin hơn trong hành trình nuôi dạy con.
          </p>

          <h2>Giá trị cốt lõi</h2>
          <ul>
            <li>
              <strong>Chính xác và khoa học:</strong> Mọi thông tin trên KidCare đều được nghiên cứu kỹ lưỡng, dựa trên
              cơ sở khoa học và được xem xét bởi các chuyên gia trong lĩnh vực liên quan.
            </li>
            <li>
              <strong>Thực tiễn và dễ áp dụng:</strong> Chúng tôi không chỉ cung cấp lý thuyết mà còn đưa ra những lời
              khuyên, giải pháp cụ thể và dễ thực hiện cho các gia đình Việt Nam.
            </li>
            <li>
              <strong>Tôn trọng sự đa dạng:</strong> Chúng tôi hiểu rằng mỗi đứa trẻ, mỗi gia đình đều khác biệt. Vì
              vậy, chúng tôi cung cấp nhiều góc nhìn và phương pháp khác nhau để phụ huynh có thể lựa chọn phù hợp với
              hoàn cảnh của mình.
            </li>
            <li>
              <strong>Cộng đồng và hỗ trợ:</strong> Chúng tôi xây dựng một cộng đồng nơi các bậc phụ huynh có thể chia
              sẻ, học hỏi và hỗ trợ lẫn nhau.
            </li>
          </ul>

          <h2>Đội ngũ của chúng tôi</h2>
          <p>
            KidCare quy tụ đội ngũ chuyên gia đa dạng từ nhiều lĩnh vực khác nhau, bao gồm bác sĩ nhi khoa, chuyên gia
            dinh dưỡng, nhà tâm lý học trẻ em, giáo viên và các nhà nghiên cứu giáo dục. Đội ngũ biên tập viên của chúng
            tôi làm việc chặt chẽ với các chuyên gia để đảm bảo mọi nội dung đều chính xác, cập nhật và dễ hiểu.
          </p>

          <h2>Các lĩnh vực chuyên môn</h2>
          <p>KidCare cung cấp thông tin toàn diện về các lĩnh vực:</p>
          <ul>
            <li>Sức khỏe và phát triển thể chất của trẻ</li>
            <li>Dinh dưỡng và chế độ ăn uống</li>
            <li>Phát triển trí tuệ và nhận thức</li>
            <li>Giáo dục và phương pháp dạy học</li>
            <li>Tâm lý và phát triển cảm xúc - xã hội</li>
            <li>Kỹ năng sống và giá trị sống</li>
            <li>Nuôi dạy con trong thời đại số</li>
          </ul>

          <h2>Cam kết của chúng tôi</h2>
          <p>
            Chúng tôi cam kết không ngừng cập nhật và nâng cao chất lượng nội dung, mở rộng các dịch vụ hỗ trợ, và xây
            dựng một cộng đồng phụ huynh vững mạnh. Mục tiêu cuối cùng của chúng tôi là góp phần vào sự phát triển khỏe
            mạnh, hạnh phúc và toàn diện của thế hệ trẻ Việt Nam.
          </p>

          <h2>Liên hệ với chúng tôi</h2>
          <p>
            Chúng tôi luôn mong muốn lắng nghe ý kiến đóng góp từ độc giả. Nếu bạn có bất kỳ câu hỏi, góp ý hoặc đề xuất
            hợp tác, vui lòng liên hệ với chúng tôi qua email <a href="mailto:info@kidcare.vn">info@kidcare.vn</a> hoặc{" "}
            <Link href="/contact" className="text-primary-600 dark:text-primary-400">
              trang liên hệ
            </Link>{" "}
            của chúng tôi.
          </p>
        </div>
      </div>
    </div>
  )
}
