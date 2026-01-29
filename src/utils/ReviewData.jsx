// import React from "react";
// import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // আইকন ইমপোর্ট

// const reviewsData = () => {
//   // রিভিউ ডাটা
//   const reviewsData = [
//     {
//       id: 1,
//       name: "Amir Uddin",
//       role: "UX Designer",
//       image: "https://i.pravatar.cc/150?u=1", // ডামি ইমেজ
//       review:
//         "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
//     },
//     {
//       id: 2,
//       name: "Salim Ahmed",
//       role: "UI Designer",
//       image: "https://i.pravatar.cc/150?u=2",
//       review:
//         "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
//     },
//     {
//       id: 3,
//       name: "Guy Hawkins",
//       role: "UX Designer",
//       image: "https://i.pravatar.cc/150?u=3",
//       review:
//         "We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",
//     },
//   ];

//   return (
//     <section className="container mx-auto mt-12 px-4 py-20 font-poppins">
//       {/* HEADER: Title & Arrows */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
//         <div>
//           <span className="border border-[#00B760] text-[#00B760] px-4 py-1 rounded-full text-sm font-medium">
//             Reviews
//           </span>
//           <h2 className="text-[32px] md:text-[45px] font-bold text-[#11142d] mt-4 leading-tight">
//             Our Customer Say <br /> Something{" "}
//             <span className="text-[#0DB720]">About Us</span>
//           </h2>
//         </div>

//         {/* Navigation Arrows */}
//         <div className="flex gap-4 mt-6 md:mt-0">
//           <button className="p-3 border border-gray-200 rounded-full hover:bg-[#0DB720] hover:text-white transition-all text-gray-400">
//             <FaArrowLeft />
//           </button>
//           <button className="p-3 border border-gray-200 rounded-full hover:bg-[#0DB720] hover:text-white transition-all text-gray-400">
//             <FaArrowRight />
//           </button>
//         </div>
//       </div>

//       {/* REVIEW CARDS GRID */}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {reviewsData.map((item) => (
//           <div
//             key={item.id}
//             className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
//           >
//             {/* 5 Stars */}
//             <div className="flex gap-1 text-[#FF8A71] mb-6">
//               {[...Array(5)].map((_, i) => (
//                 <FaStar key={i} />
//               ))}
//             </div>

//             {/* Review Text */}
//             <p className="text-[#434343] leading-[1.6] mb-8 italic">
//               "{item.review}"
//             </p>

//             {/* User Profile */}
//             <div className="flex items-center gap-4">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-12 h-12 rounded-full object-cover"
//               />
//               <div>
//                 <h4 className="font-bold text-[#11142d]">{item.name}</h4>
//                 <p className="text-sm text-gray-400">{item.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default reviewsData;
