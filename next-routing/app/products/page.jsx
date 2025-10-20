import Link from "next/link";

export const metadata={
  title:"Product Page",
  description:"Production details"
}

export default function Products() {
  return (
  
      <>
        <Link href={"products/1"}>Product 1</Link>
        <Link href={"products/2"}>Product 2</Link>
      </>
   
  );
}
