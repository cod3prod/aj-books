export default function BookImage({
  img_url,
  price,
}: {
  img_url: string;
  price: number;
}) {
  return (
    <div className="relative h-96 bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <img
        src={img_url}
        alt="Book Cover"
        className="w-full h-full object-contain"
      />
      <div className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
        {price.toLocaleString()}원
      </div>
    </div>
  );
}
