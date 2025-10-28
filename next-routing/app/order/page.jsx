export const metadata = {
  title: "Order Page",
  description: "Order details",
};

export default async function Orders() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("delay");
    }, 2000);
  });

  return (
    <>
      <h1 className="text-4xl text-center">Order Page</h1>
    </>
  );
}
