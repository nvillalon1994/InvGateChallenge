import { Tag } from "../../../../models";

export default function Tags({
  tags,
  setSelectedTag,
}: {
  tags: Tag[];
  setSelectedTag: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex gap-4">
      {tags.map((tag: Tag, index: number) => (
        <div
          onClick={() => {
            setSelectedTag(tag.id);
          }}
          key={index}
          className={`
            ${tag.id === "design" && "bg-[#F5F9FC] hover:bg-[#D9E6F3] text-[#256BA5]"}
            ${tag.id === "research" && "bg-indigo-50 hover:bg-indigo-100 text-indigo-700"}
            ${tag.id === "presentation" && "bg-pink-50 hover:bg-pink-100 text-pink-700"}
            ${tag.id === "product" && "bg-[#F0F9FF] hover:bg-[#CCE4FF] text-[#026AA2]"}
            ${
              tag.id === "frameworks" &&
              "bg-orange-50 hover:bg-orange-100 text-orange-800"
            }
            ${tag.id === "management" && "bg-pink-50 hover:bg-pink-100 text-pink-700"}
            ${tag.id === "leadership" && "bg-[#F5F9FC] hover:bg-[#D9E6F3] text-[#256BA5]"}

            text-sm rounded-lg px-1 text-bold cursor-pointer
          `}
        >
          {tag.name}
        </div>
      ))}
    </div>
  );
}
