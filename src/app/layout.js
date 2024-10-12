import Navbar from "@/components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

export const metadata = {
  title: "Web con Next.js",
  description: "Front end con Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" />
      </body>
    </html>
  );
}
