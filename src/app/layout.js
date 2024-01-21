
import "./globals.css";

export const metadata = {
  title: "JOURNEY",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex justify-center items-center p-24">{children}</body>
    </html>
  );
}
