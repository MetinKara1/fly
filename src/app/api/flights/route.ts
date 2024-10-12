import { NextRequest, NextResponse } from "next/server"
import {flights} from "../flights.json";


export const GET = () => {
    return NextResponse.json(flights, {
        status: 200
    })
}