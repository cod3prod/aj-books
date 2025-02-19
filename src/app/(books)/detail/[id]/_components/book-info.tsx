export default function BookInfo({
  title,
  author,
  amount,
}: {
  title: string;
  author: string;
  amount: number;
}) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-xl text-slate-600 mb-4">{author}</p>
      </div>
      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
        재고: {amount.toLocaleString()}
      </span>
    </div>
  );
}
