import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    profile: "",
  });

  const [userList, setUserList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.fullname || !formData.phone || !formData.profile){
      alert("Please fill all the fields correctly!")
      return
    }
    setUserList([...userList, formData]);
    setFormData({
      fullname: "",
      phone: "",
      profile: "",
    });
  };

  return (
    <div className="w-full min-h-screen bg-zinc-100 flex flex-col items-center md:flex-row md:items-start gap-4">
      <ContactForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ContactList userList={userList} />
    </div>
  );
};

export default App;
