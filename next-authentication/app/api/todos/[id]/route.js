import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import Todo from '@/models/todoModel';
import connectDB from '@/lib/connectDB';


// Helper to check authentication
async function isAuthenticated() {
    const cookieStore = await cookies();
    const userId = cookieStore.get('userId')?.value;
    return userId;
}

// DELETE handler
export async function DELETE(request, { params }) {
    await connectDB();
    const userId = await isAuthenticated();

    const {id}=await params

    if (!userId) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });

    try {
        const result = await Todo.deleteOne({ _id: id, userId });
        if (result.deletedCount === 0) {
            return NextResponse.json({ error: 'Todo not found or unauthorized' }, { status: 404 });
        }
        return NextResponse.json({ success: true, message: 'Todo deleted' });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting todo' }, { status: 500 });
    }
}

// PUT handler (Toggle completion status)
export async function PUT(request, { params }) {
    await connectDB();
    const userId = await isAuthenticated();

    const {id}=await params
    if (!userId) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });

    try {
        const body = await request.json();
        
        const updateData = {};
        if (body.hasOwnProperty('completed')) {
            updateData.completed = body.completed;
        }
        if (body.hasOwnProperty('task') && typeof body.task === 'string' && body.task.trim() !== '') {
            updateData.task = body.task;
        }

        if (Object.keys(updateData).length === 0) {
             return NextResponse.json({ error: 'No valid fields provided for update' }, { status: 400 });
        }

        const updatedTodo = await Todo.findOneAndUpdate(
            { _id: id, userId },
            { $set: updateData }, // Use $set for dynamic updates
            { new: true }
        );

        if (!updatedTodo) {
            return NextResponse.json({ error: 'Todo not found or unauthorized' }, { status: 404 });
        }
        return NextResponse.json(updatedTodo);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating todo' }, { status: 500 });
    }
}
