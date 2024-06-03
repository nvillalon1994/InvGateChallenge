

import { MdOutlineArrowOutward } from "react-icons/md";
import Tags from "./Tags";
import { Post } from "../../../../models";


export default function PostCard({
  post,
  setSelectedTag,
}: {
  post: Post;
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className=" flex-1  flex flex-col gap-1 md:gap-3 xl:h-auto h-fit ">
      <div className="max-h-56 overflow-hidden rounded-lg">
        <img
          src={post.image}
          alt=""
          className={` w-full h-56 object-cover hover:scale-110 transition-all duration-1000`}
        />
      </div>
      <div className="h-full  pt-5 flex flex-col gap-1 md:gap-4 justify-end ">
        <p className="text-[#256BA5] text-sm font-semibold">{post.author}</p>
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">{post.heading}</h3>
          <MdOutlineArrowOutward className="text-[#418FDE] text-2xl" />
        </div>
        <p className="text-neutral-500">{post.excerpt}</p>
        <Tags tags={post.tags} setSelectedTag={setSelectedTag} />
      </div>
    </div>
  );
}
