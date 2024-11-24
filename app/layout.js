import "./globals.css";
import Layout from "./components/Layout";

export const metadata = {
  title: "GreenScape - Professional Landscaping Services",
  description: "Transform your outdoor space with our professional landscaping services. We create beautiful, sustainable landscapes that enhance your property's value.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
