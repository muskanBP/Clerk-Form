import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="form-container m-auto flex flex-col items-center justify-center h-screen mt-10">
      <h1 className="text-3xl font-bold text-center mb-10">Welcome to MyPlace</h1>
      <div className="form-wrapper">

        <SignIn  />
        <div className="button-container">
        
        </div>
      </div>
    </div>
  );
}
