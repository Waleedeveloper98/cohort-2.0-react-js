import React from "react";
import { Bookmark, Star, BadgeCheck } from "lucide-react";

const UserCard = ({
  bannerImg,
  profileImg,
  name,
  role,
  rating,
  earned,
  perHourRate,
  verified,
}) => {
  return (
    <div className="w-[95%] font-['poppins'] max-w-76 rounded-3xl bg-white pb-0 relative">
      <div className="banner w-[96%] h-33 max-h-33 ml-[2%] mt-[2%] rounded-3xl absolute overflow-hidden">
        <div className="overlay w-full h-full bg-black/40 absolute inset-0"></div>
        <img className="size-full object-cover" src={bannerImg} alt={name} />
      </div>

      <div className="card-data h-full pt-22 pb-4 relative flex flex-col gap-5 items-center">
        <div className="profile w-22 h-22 rounded-full  border-3 border-transparent bg-[conic-gradient(#f58529,#dd2a7b,#ffff,#ffff,#515bd4,#f58529)] bg-origin-border">
          <div className="w-full h-full rounded-full bg-pink-200 overflow-hidden">
            <img
              className="size-full object-cover"
              src={profileImg}
              alt={name}
            />
          </div>
        </div>

        <div className="user-name-role-box text-center">
          <h3 className="text-xl font-semibold flex gap-1">
            {name}
            {verified ? (
              <div className="badge">
                <BadgeCheck size={16} color="white" fill="blue" />
              </div>
            ) : (
              ""
            )}
          </h3>
          <h5 className="font-medium text-xs text-gray-400">{role}</h5>
        </div>

        <div className="user-stats my-2 mb-3 flex justify-between w-full px-7 text-center">
          <div className="stat">
            <h4 className="font-semibold text-lg flex items-center justify-center gap-1">
              <Star size={18} fill="black" />
              {rating}
            </h4>
            <p className="text-gray-500 text-xs">rating</p>
          </div>
          <div className="stat">
            <h4 className="font-semibold text-lg">{earned}+</h4>
            <p className="text-gray-500 text-xs">earned</p>
          </div>
          <div className="stat">
            <h4 className="font-semibold text-lg">{perHourRate}</h4>
            <p className="text-gray-500 text-xs">rate</p>
          </div>
        </div>

        <div className="card-footer px-5 flex items-center justify-center gap-5 w-full">
          <button className="cursor-pointer text-sm bg-black text-white font-medium flex-1 rounded-full py-2 text-shadow-xs text-shadow-black shadow-md shadow-black/20">
            Get In Touch
          </button>
          <div className="bookmark border-[1.3px] border-zinc-300 rounded-full p-1.5">
            <Bookmark size={18} color="#555" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
