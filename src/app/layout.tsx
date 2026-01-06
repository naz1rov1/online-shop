import { Providers } from "./providers";
import './globals.css';
import Header from "../components/Header";
import Footer from "../components/Footer"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const totalCount = 0; 

  return (
    <html lang="en">
      <body>
        <Providers>
          <Header totalCount={totalCount} />

          <main>
            {children}
          </main>

          <Footer /> 
        </Providers>
      </body>
    </html>
  );
}
