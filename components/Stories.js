import StoryCard from "./StoryCard";

const stories = [
  {
    name: "sonny Sangha",
    src: "https://pbs.twimg.com/profile_images/1339192504382590976/2WxMn8cm_400x400.jpg",
    profile:
      "https://pbs.twimg.com/profile_images/1339192504382590976/2WxMn8cm_400x400.jpg",
  },
  {
    name: "elon Musk",
    src: "https://pbs.twimg.com/media/FPfovhpWUAIshD_.jpg",
    profile: "https://pbs.twimg.com/media/FPfovhpWUAIshD_.jpg",
  },
  {
    name: "BTS",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROB4Ugmsv_2srPaTUmVG-MtRbDbszbIzppbA&usqp=CAU",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROB4Ugmsv_2srPaTUmVG-MtRbDbszbIzppbA&usqp=CAU",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center  mx-auto">
      {stories.map((story) => (
        <StoryCard story={story} />
      ))}
    </div>
  );
};

export default Stories;
