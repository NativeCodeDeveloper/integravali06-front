import { auth, currentUser } from "@clerk/nextjs/server";

export async function getDashboardRole() {
    const clerkEnabled = Boolean(
        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY
    );

    if (!clerkEnabled) {
        return "admin";
    }

    const user = await currentUser();
    const publicMetadataRole = user?.publicMetadata?.role;

    if (typeof publicMetadataRole === "string" && publicMetadataRole.length > 0) {
        return publicMetadataRole;
    }

    const { sessionClaims } = await auth();

    return (
        sessionClaims?.metadata?.role ??
        sessionClaims?.publicMetadata?.role ??
        sessionClaims?.public_metadata?.role ??
        sessionClaims?.role ??
        ""
    );
}
