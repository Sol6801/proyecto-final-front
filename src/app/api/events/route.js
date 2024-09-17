import { NextResponse } from "next/server"
const API_URL = process.env.NEXT_PUBLIC_API_URL
export async function GET() {

    const response = await fetch(`${API_URL}/events`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return NextResponse.json({
        success: true,
        events: data,
    })
}

export async function POST() {

    const response = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return NextResponse.json({
        success: true,
        message: 'Nuevo evento creado',
    })
}