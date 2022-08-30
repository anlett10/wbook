import { allPosts, Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { FeaturedPost, Hero } from "~/components/Home";
import Wrapper from "~/components/Wrapper";

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = allPosts
    .filter((post: Post) => !post.draft)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .slice(0, 4);

  return {
    props: {
      latestPosts,
    },
    revalidate: 3600,
  };
};

type PinnedRepo = {
  owner: string;
  repo: string;
  description: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: string;
};

const HomePage: NextPage<{
  latestPosts: Post[];
}> = ({ latestPosts }) => {
  return (
    <Wrapper title="anlett10 • home" description="entrepreneur developer">
      <Hero />
      <div className="flex flex-col">
        <h3 className="pb-6 text-4xl font-bold">Recent posts</h3>

        <div className="flex flex-col gap-1">
          {latestPosts.map((post) => (
            <FeaturedPost key={post._id} {...post} />
          ))}
        </div>

        <Link href="/blog">
          <a>
            <p className="flex items-center gap-1 pt-4 pl-4 text-lg transition-opacity duration-300 opacity-75 hover:opacity-100 text-teal-400">
              Go to the blog
              <FiArrowRight size={20} />
            </p>
          </a>
        </Link>
      </div>
    </Wrapper>
  );
};

export default HomePage;
