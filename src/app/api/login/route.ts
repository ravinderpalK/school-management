import db from "@/db/db"
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data  =await req.json()
  const respone = await db.users.findUnique({
    where : {
      username : data.username,
      password: data.password
    }
  })
  if (!respone) return NextResponse.json({status: 400});
  const {password, ...rest} = respone;
  return NextResponse.json(rest);
} 