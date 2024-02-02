import Nav from "../components/Nav";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "JOURNEY",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="min-h-screen">
          <Nav />
        <div className="flex justify-center items-center p-24">
          {children}
        </div>
      </body>
      </html>
      </ClerkProvider>
  );
}
