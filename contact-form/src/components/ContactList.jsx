import React from "react";
import UserItem from "./UserItem";

const ContactList = ({ userList,handleDelete }) => {
  return (
    <div className="m-4 p-8 w-100 md:w-3/5 rounded-lg shadow-sm bg-white">
      <h2 className="text-2xl font-semibold">Your Friends</h2>
      <p className="text-neutral-400 text-sm">{userList.length} total friends</p>

      <div className="list-container  overflow-y-auto h-4/5 mt-10 flex gap-6 flex-wrap justify-between">
       <UserItem handleDelete={handleDelete} userList={userList}/>
      </div>
    </div>
  );
};

export default ContactList;
