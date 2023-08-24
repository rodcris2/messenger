import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/"
    }
});

export const confg = {
    matcher: [
        "/conversations/:path*",
        "/users/:path*",
    ]
};