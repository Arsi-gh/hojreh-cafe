import Header from "@/components/global/header";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import SearchProvider from "@/context/searchProvider";
import SearchModal from "@/components/modal/searchModal";
import Footer from "@/components/global/footer";
import ItemModalProvider from "@/context/itemModalProvider";
import ItemModal from "@/components/modal/itemModal";
import BasketProvider from "@/context/basketProvider";
import BasketModal from "@/components/modal/basketModal";


export const metadata = {
  title: "کافه حجره",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-ir" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="meta"/>
      </head>
      <body>
        <NextTopLoader color="#42b9f5"/>
            <BasketProvider>
              <ItemModalProvider>
                <SearchProvider>
                  <Header/>
                  {children}
                  <SearchModal/>
                  <ItemModal/>
                  <Footer/>
                  <BasketModal/>
                </SearchProvider>
              </ItemModalProvider>
            </BasketProvider>
      </body>
    </html>
  );
}
