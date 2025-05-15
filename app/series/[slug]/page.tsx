// import type { Metadata } from "next";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronRight } from "lucide-react";
// import Sidebar from "@/components/layout/sidebar";
// import { AsyncPageProps } from "@/types/type";

import { AsyncPageProps } from "@/types/type";

// export async function generateMetadata({
//   params,
// }: AsyncPageProps): Promise<Metadata> {
//   const series = await getSeries((await params)?.slug ?? "");

//   if (!series) {
//     return {
//       title: "Series không tồn tại",
//       description: "Series này không tồn tại",
//     };
//   }

//   return {
//     title: `${series.title} - Series bài viết về chăm sóc trẻ`,
//     description: series.description,
//     openGraph: {
//       title: `${series.title} - Series bài viết về chăm sóc trẻ`,
//       description: series.description,
//       images: [
//         {
//           url: series.cover_image,
//           width: 1200,
//           height: 630,
//           alt: series.title,
//         },
//       ],
//     },
//   };
// }

// export default async function SeriesPage({
//   params,
// }: AsyncPageProps) {
//   const series = await getSeries((await params)?.slug ?? "");

//   if (!series) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <h1 className="text-3xl font-bold mb-4">Series không tồn tại</h1>
//         <p className="mb-8">
//           Series bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
//         </p>
//         <Link
//           href="/"
//           className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500"
//         >
//           Quay lại trang chủ
//         </Link>
//       </div>
//     );
//   }

//   const articles = await getArticlesBySeries(series.id);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex items-center text-sm mb-6 text-gray-500 dark:text-gray-400">
//         <Link
//           href="/"
//           className="hover:text-primary-600 dark:hover:text-primary-400"
//         >
//           Trang chủ
//         </Link>
//         <ChevronRight className="h-4 w-4 mx-1" />
//         <Link
//           href="/series"
//           className="hover:text-primary-600 dark:hover:text-primary-400"
//         >
//           Series
//         </Link>
//         <ChevronRight className="h-4 w-4 mx-1" />
//         <span className="text-gray-900 dark:text-gray-100">{series.title}</span>
//       </div>

//       <div className="flex flex-col md:flex-row gap-8">
//         <div className="w-full md:w-2/3">
//           <div className="relative w-full h-[300px] rounded-xl overflow-hidden mb-6">
//             <Image
//               src={series.cover_image || "/images/placeholder.png"}
//               alt={series.title}
//               fill
//               className="object-cover"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
//             <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//               <h1 className="text-3xl md:text-4xl font-bold mb-2">
//                 {series.title}
//               </h1>
//               <p className="text-gray-200">{articles.length} bài viết</p>
//             </div>
//           </div>

//           <div className="prose prose-lg max-w-none dark:prose-invert mb-8">
//             <p>{series.description}</p>
//           </div>

//           <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-50">
//             Danh sách bài viết
//           </h2>

//           <div className="space-y-6">
//             {articles.map((article, index) => (
//               <div
//                 key={article.id}
//                 className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
//               >
//                 <Link href={`/blog/${article.slug}`} className="block">
//                   <div className="flex flex-col md:flex-row">
//                     <div className="relative w-full md:w-1/3 aspect-video md:aspect-[4/3]">
//                       <Image
//                         src={article.cover_image || "/images/placeholder.png"}
//                         alt={article.title}
//                         fill
//                         className="object-cover"
//                       />
//                       <div className="absolute top-2 left-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
//                         Phần {article.seriesOrder || index + 1}/
//                         {articles.length}
//                       </div>
//                     </div>
//                     <div className="p-4 md:p-6 flex-1">
//                       <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-50 hover:text-primary-600 dark:hover:text-primary-400">
//                         {article.title}
//                       </h3>
//                       <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
//                         {article.description}
//                       </p>
//                       <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
//                         <span>{article.readingTime} phút đọc</span>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         <Sidebar className="w-full md:w-1/3 mt-8 md:mt-0" />
//       </div>
//     </div>
//   );
// }

export default async function SeriesPage({ params }: AsyncPageProps) {
  console.log(params);
  return (
    <div>
      <h1>Series Page</h1>
    </div>
  );
}
