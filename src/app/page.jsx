import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) {
    console.log(userId);
    redirect("/dashboard");
  }
 
  return (
    <main className="flex flex-col items-center justify-center">
      <h1>JOURNEY</h1>
        <a href="/sign-in">
          <div className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32">
            Sign In
          </div>
        </a>
     
    </main>
  );
}
