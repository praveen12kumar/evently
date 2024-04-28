import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


// const isProtectedRoute = createRouteMatcher([
  
// ]);

export default clerkMiddleware((auth, req)=>{

},{debug:true})


 // if (isProtectedRoute(req)) auth().protect();


export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};