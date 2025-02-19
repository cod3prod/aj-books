import Loader from "@/components/ui/loader";
import { useRefresh } from "@/hooks/use-refresh";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function BookAction({ id }: { id: string }) {
  const BASE_URL =
    process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";
  const url = `${BASE_URL}/api/books/${id}`;
  const { fetchData: fetchDataWithAuth, isLoading, error } = useRefresh<null>();
  const router = useRouter();
  const { tokens } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (error) {
      toast.error("삭제할 수 없습니다.");
    }
  }, [error]);

  const handleDelete = async () => {
    if (!tokens) {
      toast.error("로그인이 필요합니다!");
      return;
    }
    await fetchDataWithAuth(url, "DELETE");
    router.push("/");
  };

  return (
    <>
      <div className="flex gap-4 pt-6 border-t border-slate-200">
        <Link
          href={`/edit/${id}`}
          className="text-center flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-colors cursor-pointer"
        >
          수정하기
        </Link>
        <button
          onClick={handleDelete}
          className="flex-1 py-3 bg-red-600 hover:bg-red-500 text-white rounded-full transition-colors cursor-pointer"
        >
          삭제하기
        </button>
      </div>
      {isLoading && <Loader />}
    </>
  );
}
