import Footer from "@/components/Footer";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col space-y-10">
      <Image
        className="rounded-full"
        src="https://avatars.githubusercontent.com/u/68250402?v=4"
        height={128}
        width={128}
        alt="Sydney Newmark profile picture"
      />
      <Footer />
    </main>
  );
}
