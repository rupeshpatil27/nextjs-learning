function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function CartLayout({ children }) {
  const random = getRandomInt(2, 3);

  if (random === 3) {
    throw new Error("Error !.. - in cart Layout");
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-cyan-500 my-10 text-center">
        Cart Layout
      </h1>
      <div className="bg-[#fcfbfb] flex justify-start gap-5 flex-col p-10 rounded-md">
        {children}
      </div>
    </>
  );
}
