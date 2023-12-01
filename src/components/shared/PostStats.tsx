import { Models } from "appwrite";

type PostStatsProps = {
  post: Models.Document;
  usedId: string;
};

const PostStats = ({ post, userId }: PostStatsProps) => {
  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img
          src={"/assets/icons/like.svg"}
          height={20}
          width={20}
          onClick={() => {}}
          className="cursor-pointer"
        />
        <p className="small-medium">0</p>
      </div>

      <div className="flex gap-2">
        <img
          src={"/assets/icons/save.svg"}
          height={20}
          width={20}
          onClick={() => {}}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PostStats;
