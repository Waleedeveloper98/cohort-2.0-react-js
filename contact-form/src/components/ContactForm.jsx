import React from "react";

const ContactForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="w-2/5 shadow-sm bg-white rounded-lg py-10 px-6">

        <h2 className="text-3xl font-semibold mb-8">Contact Form</h2>
        
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-8">
        <div className="form-input flex flex-col gap-1">
          <label className="font-medium" htmlFor="fullName">
            Full Name
          </label>
          <input
            name="fullname"
            id="fullName"
            className="bg-zinc-200 py-2 px-3 rounded-lg border-none outline-none"
            type="text"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="form-input flex flex-col gap-1">
          <label className="font-medium" htmlFor="phone">
            Phone No
          </label>
          <input
            name="phone"
            className="bg-zinc-200 py-2 px-3 rounded-lg border-none outline-none"
            type="text"
            placeholder="+1 234 567 89"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-input flex flex-col gap-1">
          <label className="font-medium" htmlFor="profile">
            Profile Image
          </label>
          <input
            name="profile"
            className="bg-zinc-200 py-2 px-3 rounded-lg border-none outline-none"
            type="text"
            placeholder="Profile url"
            value={formData.profile}
            onChange={handleChange}
          />
        </div>
        <button
        onClick={()=> console.log("clicked")}
          className="bg-black text-white font-medium cursor-pointer transition-all rounded-lg py-2 active:scale-95"
          type="submit"
        >
          Add to Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
