import { redirect } from "next/navigation";

export async function GET() {
  redirect("/api/redirect-example/v2");

  const user = [
    {
      id: 101,
      firstName: "Liam",
      lastName: "Johnson",
      username: "liamj",
    },
    {
      id: 102,
      firstName: "Olivia",
      lastName: "Smith",
      username: "olivias",
    },
  ];

  return Response.json(user);
}
