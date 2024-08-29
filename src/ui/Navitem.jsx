import Link from "next/link";


export default function Navitem() {
  return (
    <nav className="h-[75px] bg-transparent flex justify-center items-center">
      <ul className="flex justify-center items-center gap-3 border-2 border-gray-700 shadow-lg rounded-xl px-3 py-2">
        <li>
          <Link className="p-2 hover:bg-[#1a1a1a]" href="/">Home</Link>
        </li>
        <li>
          <Link href="/movies-and-shows">Movies & Shows</Link>
        </li>
        <li>
          <Link href="/support">Support</Link>
        </li>
        <li>
          <Link href="/subscription">Subscription</Link>
        </li>
      </ul>
    </nav>
  );
}
