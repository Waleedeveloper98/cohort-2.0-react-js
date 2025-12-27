import React, { useState } from "react";
import ContactForm from "./components/ContactForm";

const App = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    profile: "",
  });

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
    console.log(formData)
  };

  return (
    <div className="w-full h-screen min-h-screen bg-zinc-100 p-4 flex">
      <ContactForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
