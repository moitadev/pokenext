import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "http://localhost:3000/pokecolors.json"

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL)

    const pokecolors: Pokecolor = await res.json()

    return NextResponse.json(pokecolors)
}