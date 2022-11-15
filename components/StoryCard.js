import Image from "next/image";

const StoryCard = ({ story }) => {
  return (
    <div className="relative h-14 w-14 p-3 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer">
      {/* 얼굴만 나오는 작은 동그라미 hidden lg:block */}
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={story.profile}
        alt="profile pic"
        width="40"
        height="40"
        style={{ objectFit: "cover" }}
      />
      {/* 배경의 큰 화면 */}
      <Image
        className="filter object-cover brightness-75 rounded-full lg:rounded-3xl"
        src={story.src}
        alt="story pic"
        fill
      />
      <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6  text-white text-sm truncate">
        {story.name}
      </p>
    </div>
  );
};

export default StoryCard;
