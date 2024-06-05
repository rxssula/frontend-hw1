import Card from "../components/layouts/card";
import dataWithSlugs from "../data/data";

export default function Blogs() {
  return (
    <div className="container mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {dataWithSlugs.map((data, index) => (
        <Card
          key={index}
          slug={data.slug}
          title={data.title}
          author={data.author}
          date={data.date}
          description={data.description}
        />
      ))}
    </div>
  );
}
