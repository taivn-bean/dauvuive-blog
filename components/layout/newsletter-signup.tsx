export default function NewsletterSignup() {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-50">
        Đăng ký nhận bản tin
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Nhận những thông tin mới nhất về chăm sóc trẻ em qua email.
      </p>
      <form className="space-y-2">
        <input
          type="email"
          placeholder="Email của bạn"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm bg-background"
          required
        />
        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
}
