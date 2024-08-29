import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ products }) {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Genre</th>
            <th className="py-3 px-6 text-left">Year</th>
            <th className="py-3 px-6 text-left">Rating</th>
          </tr>
        </thead>
        <tbody>
          {
          products.map((movie, index) => (
           <Link href={``} key={index} >
            <tr  className="border-b text-black hover:bg-gray-100">
              <td className="py-3 px-6">{movie.title}</td>
              <td className="py-3 px-6">{movie.genre}</td>
              <td className="py-3 px-6">{movie.year}</td>
              <td className="py-3 px-6">{movie.rating}</td>
            </tr>
            </Link>
           
          ))}
        </tbody>
      </table>
    </div>
  );
}
