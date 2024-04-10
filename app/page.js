import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <h1 className="text-6xl font-bold">Hi Ima Avidu</h1>
      <Button>
        This is button
      </Button>
    </main>
  );
}
