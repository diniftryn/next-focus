import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="border-b max-w-3xl mx-auto p-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-base font-medium px-2">
          <h1 className="flex text-xl font-semibold">
            f
            <Image className="mx-[2px]" src="/icon.png" alt="logo" width={25} height={10} />
            cus
          </h1>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
