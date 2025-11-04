import { mockUsers } from "../data";

export async function GET(request, {params}) {
    const {id} = await params;
    const user = mockUsers.find(u => u.id === parseInt(id));

    if (!user) {
        // Return 404 Not Found
        return new Response(`User with ID ${id} not found`, { status: 404 });
    }

    return Response.json(user);
}


export async function PUT(request, {params}) {
    const {id} = await params;
    const body = await request.json();

    const userIndex = mockUsers.findIndex(u => u.id === parseInt(id));

    if (userIndex === -1) {
        return new NextResponse('User not found', { status: 404 });
    }
    
    mockUsers[userIndex] = { ...mockUsers[userIndex], ...body };

    return Response.json(mockUsers[userIndex]);
}


export async function DELETE(request, {params}) {
    const {id} = await params;

    const userIndex = mockUsers.findIndex(u => u.id === parseInt(id));

    const deletedUser=mockUsers[userIndex]

    mockUsers.splice(userIndex, 1)
    
    return Response.json(deletedUser); 
}