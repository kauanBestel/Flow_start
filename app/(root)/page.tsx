import SearchForm from "@/components/searchForm";
import StartupCard from "@/components/startupCard";

interface StartupCardType {
  _createdAt: Date;
  views: number;
  author: { _id: number; name: string };
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
}

export default function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const { query } = searchParams;

  const posts: StartupCardType[] = [
    {
      _createdAt: new Date(),
      views: 56,
      author: { _id: 1, name: "Kauan" },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1513649718256-1a7162666bad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "restaurants",
      title: "Japan Eats",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading w-full">
          Pitch Your Startup,
          <br />
          Conect with Enterpreneuers
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, vote on Pitches, and get noticed in virtual competition
        </p>

        <SearchForm query={query} />
      </section>
      <section className="sextion_container px-12 mb-12">
        <h2 className="text-30-semibold">
          {query ? `search results for "${query}"` : "All Startups"}
        </h2>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
