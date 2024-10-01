const Contact = () => {
  const handleSubmit = () => {
    alert("Working!");
  };

  return (
    <div>
      <form
        action=""
        className="flex-col items-center text-center justify-center rounded-2xl flex-wrap"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <h1 className="text-5xl font-bold text-orange-400 pt-3">Apply Today!</h1>
        </div>

        <div className="flex justify-center items-center">

            <div className="flex-col w-2/3">

              <div className="formDiv">
                <label className="label">First Name:</label>
                <input type="text" name="name" className="input w-5/6" />
              </div>

              <div className="formDiv">
                <label className="label">Last Name:</label>
                <input type="text" name="name" className="input w-5/6" />
              </div>

              <div className="formDiv">
                <label className="label">Email:</label>
                <input type="text" name="name" className="input w-5/6" />
              </div>

              <div className="py-4 pl-4 flex">
                <div className="flex justify-start items-start w-1/3">
                  <label className="label">Phone:</label>
                  <input type="text" name="name" className="input w-full" />
                </div>
                <div className="flex justify-start items-start w-1/2">
                  <label className="label">Zip Code:</label>
                  <input type="text" name="name" className="input w-3/4" />
                </div>
              </div>
            </div>

        </div>
        <button
          className="bg-yellow-300 font-bold 
        rounded-3xl py-4 px-20 text-white shadow-xl hover:border-yellow-400 
        cursor-pointer hover:bg-pink-300 transition duration-500 mb-10"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
