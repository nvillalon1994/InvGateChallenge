import Page from "../../components/PageLayout/Page";
import Hero from "./components/01.Hero/Hero";
import RecentBlogs from "./components/02.RecentBloPost/RecentBlogs";
import PodcastHeader from "./components/03.PodcastHeader/PodcastHeader";

export default function Home() {
  return (
    <Page>
      <div className="px-6 lg:px-12 2xl:px-36">
        <Hero />
        <RecentBlogs />
      </div>
      <PodcastHeader />
    </Page>
  );
}
