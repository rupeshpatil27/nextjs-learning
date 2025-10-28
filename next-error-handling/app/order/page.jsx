
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Order Page",
  description: "Order details",
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default async function Orders() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("delay");
    }, 2000);
  });

  const random = getRandomInt(0, 1);

  if (random === 1) {
    throw new Error("Error !.. - in Order Page");
  }

  return (
    <>
      <h1 className="text-4xl text-center">Order Page</h1>
    </>
  );
}
