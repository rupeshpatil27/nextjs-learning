import Link from "next/link";

export const metadata = {
  title: "Order Page",
  description: "Order details",
};

export default async function Orders() {

  await new Promise(resolve=>{
    setTimeout(()=>{
      resolve("delay")
    },2000)
  })
  return (
    <>
      <div className="main-container">
        <h1 className="text-4xl">Order Page</h1>
      </div>
    </>
  );
}
