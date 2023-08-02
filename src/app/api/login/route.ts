import { z } from "zod";
import { NextResponse } from "next/server";

const schema = z
  .object({
    username: z.string().min(1, "username is required"),
    password: z.string().min(1, "password is required"),
  })
  .refine(
    (value) =>
      value.username === process.env.DEMO_USERNAME &&
      value.password === process.env.DEMO_PASSWORD,
    {
      message: "invalid username/password",
    },
  );

export async function POST(request: Request) {
  const validation = schema.safeParse(await request.json());

  if (!validation.success) {
    return NextResponse.json(
      {
        message: validation.error.format()._errors.at(0),
      },
      {
        status: 400,
      },
    );
  }

  return NextResponse.json(
    { success: true },
    {
      status: 200,
    },
  );
}
