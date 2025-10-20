import BooksFilter from "./BooksFilter";

export default async function userDetails(props) {
  const { bookId } = await props.params;

  return (
    <>
      <h1 className="text-center text-3xl font-bold">Product Details</h1>
      <BooksFilter />
      <span className="text-2xl">Book {bookId}</span>
    </>
  );
}
