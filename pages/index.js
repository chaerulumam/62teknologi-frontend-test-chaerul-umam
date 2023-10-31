import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`w-full h-full flex flex-col first-letter:content-center items-center relative text-black font-nunito ${inter.className}`}
    >
      <h1>Helo</h1>
    </main>
  );
}
