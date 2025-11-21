import { mockUsers } from "./data";

export async function GET() {
  return Response.json({
    data: mockUsers,
    total: mockUsers.length,
  });
}

export async function POST(request) {
  const body = await request.json(); // Read the JSON body

  const newUser = {
    id: Date.now(),
    name: body.name,
    role: body.role,
  };

  mockUsers.push(newUser);

  return Response.json(newUser, {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}
