import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `${process.env.NEXT_PUBLIC_SITE_URL}/pokecolors.json`

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL)

    const pokecolors: Pokecolor = await res.json()

    return NextResponse.json(pokecolors)
}