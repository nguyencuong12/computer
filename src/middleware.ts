import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest, res: NextResponse) {
  const response = NextResponse.next();
  //   const ss = req.cookies.get("cuong11");
  var object = {
    title: "sdq",
    id: "11",
  };
  var ss = [
    {
      id: "product-1",
      title: "Microphone shure",
      count: 1,
    },
    {
      id: "product-2",
      title: "Product 2",
      count: 2,
    },
  ];

  response.cookies.set("shoppingCart", JSON.stringify(ss));
  return response;
}
export const config = {
  matcher: "/gio-hang",
};
