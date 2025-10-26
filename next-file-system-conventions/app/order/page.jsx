import Link from "next/link";

export const metadata = {
  title: "Order Page",
  description: "Order details",
};

function getRandomInt(num) {
  return Math.floor(Math.random() * num);
}

export default async function Orders() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("delay");
    }, 2000);
  });

  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error !.. - in Order Page");
  }

  return (
    <>
      <div className="main-container">
        <h1 className="text-4xl">Order Page</h1>
      </div>
    </>
  );
}
