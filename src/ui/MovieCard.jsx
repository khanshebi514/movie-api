"use client";

export default function MovieCard({ products }) {
  const redirectToLink = (id) => {
    open(`movies-and-shows/${id}`);
  };



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
              <tr
                key={index}
                className="border-b text-black hover:bg-gray-100 cursor-pointer"
                onClick={() => redirectToLink(movie.id)}
              >
                <td className="py-3 px-6">{movie.title}</td>
                <td className="py-3 px-6">{movie.genre}</td>
                <td className="py-3 px-6">{movie.year}</td>
                <td className="py-3 px-6">{movie.rating}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
