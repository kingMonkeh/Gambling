import Image from "next/image";
import HomeButton from "@/components/HomeButton";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-2">
      <h1 className="text-9xl">Gambling 101</h1>
      <h5 className="text-2xl">Have no money? Fret not! Since we use Geese Coins</h5>
      <HomeButton></HomeButton>
    </div>
  );
}
