import dataWithSlugs from "@/app/data/data";
import Head from "next/head";

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
      <Head>
        <title>{blog.title} - My Blog</title>
        <meta name="description" content={blog.description} />
      </Head>
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 text-xl">
        By {blog.author} on {blog.date}
      </p>
      <p className="mt-4 text-lg">{blog.content}</p>
    </div>
  );
};

export default BlogPost;
