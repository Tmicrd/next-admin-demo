import React from "react";

const page = () => {
  const handleForm = async (formData) => {
    "use server";
    const username = formData.get("username");
    console.log("username: ", username);
  };

  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default page;
