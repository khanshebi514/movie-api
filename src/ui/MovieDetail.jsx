export default function MovieDetail({products}) {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Genre</th>
            <th className="py-3 px-6 text-left">Year</th>
            <th className="py-3 px-6 text-left">Rating</th>
            <th className="py-3 px-6 text-left">Duration</th>
            <th className="py-3 px-6 text-left">Box office Collection</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b text-black hover:bg-gray-100">
            <td className="py-3 px-6">{products.title}</td>
            <td className="py-3 px-6">{products.genre}</td>
            <td className="py-3 px-6">{products.year}</td>
            <td className="py-3 px-6">{products.rating}</td>
            <td className="py-3 px-6">{products.runtime}</td>
            <td className="py-3 px-6">{products.boxOffice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
