import { NextResponse } from "next/server"
const API_URL = process.env.API_URL
export async function GET() {

    const response = await fetch(`${API_URL}/groups`, {
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