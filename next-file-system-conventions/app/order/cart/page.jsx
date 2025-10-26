export const metadata = {
  title: "cart Page",
  description: "cart details",
};

function getRandomInt(num) {
  return Math.floor(Math.random() * num);
}

export default function Cart() {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error !.. - in Cart Page");
  }

  return (
    <div className="main-container">
      <h1 className="text-4xl">Cart Page</h1>
    </div>
  );
}
