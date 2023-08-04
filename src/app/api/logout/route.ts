import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  cookies().set("token", "", {
    expires: new Date("1957-08-31"),
    path: "/",
  });

  return NextResponse.json(
    { success: true },
    {
      status: 200,
    },
  );
}
