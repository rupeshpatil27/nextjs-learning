import Link from "next/link";

export const metadata = {
  title: "Book Page",
};

export default function BookList() {
  return (
    <div className="product-layout">
      <h1 className="text-4xl font-bold text-cyan-500 my-10">Book List</h1>
      <div className="bg-[#fcfbfb] flex justify-start gap-5 flex-col p-10 rounded-md">
        <Link href="/books/1?genre=fantasy&author=rowling">
          Book 1
        </Link>

        <Link href="/books/2?genre=thriller&author=grisham">
          Book 2
        </Link>
      </div>
    </div>
  );
}
