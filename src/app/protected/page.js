// app/protected/page.tsx
import { auth } from '@clerk/nextjs/server';

export default async function ProtectedPage() {
  const { userId } = await auth();

  if (!userId) {
    return <div>You must be signed in.</div>;
  }

  return <div>Welcome, user {userId}!</div>;
}