import { SignedIn, SignedOut, SignOutButton } from '@clerk/nextjs';

export default function SignOutPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center">Sign Out</h2>
        <SignedIn>
          <p className="text-center mb-4">You are signed in!</p>
          <SignOutButton />
        </SignedIn>
        <SignedOut>
          <p className="text-center mb-4">You are not signed in!</p>
        </SignedOut>
      </div>
    </div>
  );
}
