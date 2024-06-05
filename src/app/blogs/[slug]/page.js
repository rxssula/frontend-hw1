import dataWithSlugs from "@/app/data/data";

export async function generateStaticParams() {
  return dataWithSlugs.map((data) => ({
    slug: data.slug,
  }));
}

const BlogPost = ({ params }) => {
  const blog = dataWithSlugs.find((data) => data.slug === params.slug);

  if (!blog) {
    return <div>404 | Page Not Found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700">
        By {blog.author} on {blog.date}
      </p>
      <p className="mt-4">{blog.description}</p>
    </div>
  );
};

export default BlogPost;
