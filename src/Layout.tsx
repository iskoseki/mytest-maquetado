import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Navigation />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
