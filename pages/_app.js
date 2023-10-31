import BusinessProvider from "@/context/business";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <BusinessProvider>
      <div className="w-screen h-screen bg-gray-300 fixed -z-10">
        <Component {...pageProps} />
      </div>
    </BusinessProvider>
  );
}
