import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

export default function NavMenu() {
  return (
    <nav className="flex w-full flex-row items-center">
      <Link href="/">
        <Image src={"/logo.svg"} width={150} height={150} />
      </Link>

      <ul className="mx-8 hidden flex-row gap-2 md:flex">
        <li>
          <Link href="/">For Sale</Link>
        </li>

        <li>
          <Link href="/">For Rent</Link>
        </li>

        <li>
          <Link href="/">Agent Finder</Link>
        </li>
      </ul>

      <div className="ms-center gap flex flex-row gap-4">
        <Button>
          <Plus /> Post Your Add
        </Button>
        <Button variant="outline">Lolgin</Button>
      </div>
    </nav>
  );
}
