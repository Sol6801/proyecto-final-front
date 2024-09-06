import { NextResponse } from "next/server"

export async function GET() {
    'http://localhost:5001/api/movies'
    const response = await fetch('http://localhost:5001/api/movies', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return NextResponse.json({
        success: true,
        movies: data,
    })
}