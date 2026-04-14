export const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY?.trim() || "";

export const isClerkConfigured =
  clerkPublishableKey.length > 0 &&
  clerkPublishableKey !== "pk_test_d2lubmluZy1sZWVjaC0yOC5jbGVyay5hY2NvdW50cy5kZXYk" &&
  clerkPublishableKey.startsWith("pk_");
