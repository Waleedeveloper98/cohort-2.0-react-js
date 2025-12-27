import React from "react";

const UserItem = ({ userList }) => {
  return (
    <>
      {userList.map((data, idx) => {
        return (
          <li
            key={idx}
            className="list-none bg-zinc-100 rounded-xl px-6 py-3 w-[48%] flex items-start gap-4 shadow-sm"
          >
            <img
              className="size-12 object-cover rounded-full shadow-sm"
              src={data.profile}
              alt=""
            />
            <div className="details">
              <h3 className="font-semibold text-lg text-shadow-xs">
                {data.fullname}
              </h3>
              <h5 className="text-sm font-medium text-neutral-400">
                {data.phone}
              </h5>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default UserItem;
