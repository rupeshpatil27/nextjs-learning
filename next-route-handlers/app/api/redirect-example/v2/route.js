export function GET() {
  const user = [
    {
      userId: "U88291A",
      name: {
        first: "Mason",
        last: "Williams",
      },
      contact: {
        email: "mason.williams@example.com",
        phone: "+1-555-0199",
      },
      address: {
        street: "123 Maple Street",
        city: "Springfield",
        zipCode: "12345",
        country: "USA",
      },
      role: "Administrator",
      activeStatus: true,
    },
    {
      userId: "U99382B",
      name: {
        first: "Sophia",
        last: "Brown",
      },
      contact: {
        email: "sophia.b@example.com",
        phone: "+1-555-0102",
      },
      address: {
        street: "45 Oak Avenue",
        city: "Springfield",
        zipCode: "12345",
        country: "USA",
      },
      role: "Editor",
      activeStatus: false,
    },
  ];
  return Response.json(user);
}
