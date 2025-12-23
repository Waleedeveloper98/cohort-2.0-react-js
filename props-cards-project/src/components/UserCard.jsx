import React from "react";
import { Bookmark, Star } from "lucide-react";

const UserCard = () => {
  return (
    <div className="w-[95%] font-['poppins'] max-w-76 rounded-3xl bg-white pb-0 relative">
      <div className="banner  w-[96%] p-16 ml-[2%] mt-[2%] bg-orange-600 rounded-3xl absolute overflow-hidden">
        <img className="size-full object-cover" src="" alt="" />
      </div>

      <div className="card-data h-full pt-22 pb-4 relative flex flex-col gap-5 items-center">
        <div className="profile w-22 h-22 rounded-full  border-3 border-transparent bg-[conic-gradient(#f58529,#dd2a7b,#ffff,#ffff,#515bd4,#f58529)] bg-origin-border">
          <div className="w-full h-full rounded-full bg-pink-200 overflow-hidden">
            <img className="size-full object-cover" src="" alt="" />
          </div>
        </div>

        <div className="user-name-role-box text-center">
          <h3 className="text-xl font-semibold ">Alexander Ross</h3>
          <h5 className="font-medium text-xs text-gray-400">Motion Designer</h5>
        </div>

        <div className="user-stats my-2 mb-3 flex justify-between w-full px-7 text-center">
          <div className="stat">
            <h4 className="font-semibold text-lg flex items-center justify-center gap-1">
              <Star size={18} fill="black" />
              4.9
            </h4>
            <p className="text-gray-500 text-xs">rating</p>
          </div>
          <div className="stat">
            <h4 className="font-semibold text-lg">$35k+</h4>
            <p className="text-gray-500 text-xs">earned</p>
          </div>
          <div className="stat">
            <h4 className="font-semibold text-lg">$45/hr</h4>
            <p className="text-gray-500 text-xs">rate</p>
          </div>
        </div>

        <div className="card-footer px-5 flex items-center justify-center gap-5 w-full">
          <button className="cursor-pointer text-sm bg-black text-white font-medium flex-1 rounded-full py-2">
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
