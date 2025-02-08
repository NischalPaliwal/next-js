import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, res: NextResponse) {
    return NextResponse.json({
        name: "Nischal Paliwal",
        email: "nischalpaliwal09@gmail.com"
    })
}

export async function POST(req: NextRequest) {
    // body
    const body = await req.json();
    // headers
    console.log(req.headers.get("Authorization"));
    // query params
    console.log(req.nextUrl.searchParams.get("id"));

    return NextResponse.json({
        message: "success"
    })
}