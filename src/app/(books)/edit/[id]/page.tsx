"use client";

export default function BookDetailPage() {
  return (
    <article className="py-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* 이미지 섹션 */}
          <div className="relative h-96 bg-gradient-to-br from-slate-50 to-slate-100 p-8">
            <img
              src="https://via.placeholder.com/400x500"
              alt="Book Cover"
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
              25,000원
            </div>
          </div>

          {/* 상세 정보 섹션 */}
          <div className="p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">Book Title</h1>
                <p className="text-xl text-slate-600 mb-4">Author Name</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                재고: 15
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-slate-600">
              <div>
                <p className="font-medium">출판사</p>
                <p>Publisher Name</p>
              </div>
              <div>
                <p className="font-medium">장르</p>
                <p>Fiction</p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="flex gap-4 pt-6 border-t border-slate-200">
              <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-colors">
                수정하기
              </button>
              <button className="flex-1 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full transition-colors">
                삭제하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}