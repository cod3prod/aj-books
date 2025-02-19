"use client";

export default function SkeletonBookDetail() {
  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* 이미지 섹션 */}
        <div className="relative">
          <div className="w-full h-96 bg-gray-200 animate-pulse" />
          <div className="absolute bottom-4 right-4 w-20 h-8 bg-gray-300 rounded-md animate-pulse" />
        </div>

        {/* 상세 정보 섹션 */}
        <div className="p-8 space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="h-6 w-40 bg-gray-300 rounded-md animate-pulse" />
              <div className="h-4 w-32 bg-gray-300 rounded-md animate-pulse" />
            </div>
            <div className="h-6 w-24 bg-gray-300 rounded-md animate-pulse" />
          </div>

          {/* 버튼 */}
          <div className="flex gap-4 pt-6 border-t border-slate-200">
            <div className="h-12 flex-1 bg-gray-300 rounded-md animate-pulse" />
            <div className="h-12 flex-1 bg-gray-300 rounded-md animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
