import React from "react";

const BlogGrid = () => {
  const blogPosts = [
    {
      title:
        "Wiz Acquired by Google — A Milestone Moment for a Former Juice Client",
      image:
        "https://cdn.sanity.io/images/gzgwyya5/production/6d877d2af96a85a9594cc9f569d7ab177ca0add0-1000x667.webp?w=600&h=400&auto=format",
      tag: "NEWS",
      tagColor: "bg-orange-500 border-orange-500 text-white",
    },
    {
      title: "Design That Sticks: The Graphic Brilliance Behind TV and Film",
      image:
        "https://cdn.sanity.io/images/gzgwyya5/production/9404e7382a61f62482b50bc01aadcd3319ba19d0-3001x1994.webp?rect=6,0,2991,1994&w=600&h=400&auto=format",
      tag: "PULP FICTIONS",
      tagColor: "bg-pink-400 border-pink-400 text-white",
    },
    {
      title: "Repositioning Juice: The story behind the rebrand",
      image:
        "https://cdn.sanity.io/images/gzgwyya5/production/ed3fbb4fc199af9a71b263cde2857c4eefba0f93-3001x1994.webp?rect=6,0,2991,1994&w=600&h=400&auto=format",
      tag: "NEWS",
      tagColor: "bg-orange-500 border-orange-500 text-white",
    },
    {
      title: "How a Pizza Oven Made Us Rethink Brand Illustration",
      image:
        "https://cdn.sanity.io/images/gzgwyya5/production/ae866d4dd5b4e9f00cf2c53f99156357831cfeb6-3001x1994.webp?rect=6,0,2991,1994&w=600&h=400&auto=format",
      tag: "INSIGHTS",
      tagColor: "bg-yellow-300 border-yellow-300 text-black",
    },
  ];

  return (
    <section className="w-full px-4 py-10 mx-auto max-w-7xl bg-[#F8F7E9]">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-manrope">LATEST</h2>
        <h2 className="font-normal underline md:text-md">VIEW ALL→</h2>
      </div>
     

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="flex flex-col gap-4 cursor-default group max-sm:flex-row"
          >
            <figure className="relative w-full overflow-hidden rounded-md max-sm:w-2/5">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
              />
            </figure>
            <div className="flex-1 max-sm:w-3/5">
              <p className="mb-3">
                <span className="text-lg font-medium">
                  {post.title}
                </span>
              </p>
              <div className="flex items-start">
                <span
                  className={`px-3 py-1 text-xs font-mono uppercase rounded-sm border ${post.tagColor}`}
                >
                  {post.tag}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;