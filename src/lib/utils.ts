import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { KeyLike, SignJWT, jwtVerify } from 'jose'
import { SessionOptions } from "iron-session";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error message
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};

// ENCRYPT 
const key = new TextEncoder().encode(process.env.JWT_TOKEN_SECRET as string);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .sign(key)
};

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256']
  })
  return payload;
};


// SESSION OPTIONS
export const sessionOptions: SessionOptions = {
  password: process.env.JWT_TOKEN_SECRET!,
  cookieName: "auth-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.PRODUCTION == "PRODUCTION" ? true : false
  }

}

// DEFAULT SESSION IS-LOGIN VALUE
export const defaultSession: SessionOata = {
  isLogIn: false
}