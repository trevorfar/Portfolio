"use client";
const Contact = () => {
  return (
    <div className="bg-white justify-center mx-auto aspect-square rounded-xl py-4 w-1/3 border">
      <form
        onSubmit={(e) => {
          console.log("hey");
          e.preventDefault();
        }}
        className="flex flex-col"
      >
        <input
          className="m-6 border border-black"
          placeholder="Enter your email"
        ></input>
        <textarea
          className="m-6 border border-black aspect-square overflow-auto"
          placeholder="Leave a message"
        ></textarea>
      </form>
    </div>
  );
};
export default Contact;
