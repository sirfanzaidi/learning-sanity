import { client } from "@/sanity/lib/client";

interface Showroom {
  make: string;
  model: number;
  owner: string;
}

export default async function Home() {
  const res: Showroom[] = await client.fetch('*[_type == "cars"]');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-purple-800 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl">
        {res.map((data, index) => (
          <div
            key={index}
            className="bg-white shadow-2xl rounded-2xl p-12 border border-gray-200 hover:scale-110 transition-transform duration-300"
          >
            <h1 className="text-4xl font-extrabold text-purple-700">
              {data.make} {data.model}
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Owner: <span className="text-purple-500">{data.owner}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
