export const dynamic = "force-dynamic";

export const metadata = {
  title: "cart Page",
  description: "cart details",
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Cart() {
  const random = getRandomInt(1, 2);

  if (random === 2) {
    throw new Error("Error !.. - in Cart Page");
  }

  return (
    <>
      <h1 className="text-4xl text-center">Cart Page</h1>
    </>
  );
}
