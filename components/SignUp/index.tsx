const SignUp = () => {
  return (
    <form
      className="flex space-x-1 sm:space-x-3"
      onSubmit={(e) => {
        e.preventDefault();
        const options = {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(
            Object.fromEntries(new FormData(e.target as HTMLFormElement))
          ),
        };
        console.log(options);
        fetch(
          "https://script.google.com/macros/s/AKfycbws9ux0gPFCbZUimjvK92yH8WALIcfkt0mtma6JbeeWQJZamS8tbbqF6T2igW65nJ8W/exec",
          options
        )
          .then((response) => console.log("signed UP! " + response))
          .catch((err) => console.error(err));
      }}
    >
      <input
        type="email"
        name="email"
        className="w-0 flex-1 sm:basis-3/4 border border-slate-800 rounded-full px-3 font-sans text-lg"
        placeholder="Email"
      ></input>
      <button
        type="submit"
        className="min-w-fit flex-1 sm:basis-1/4 font-sans font-semibold  text-lg text-white antialiased bg-woffee-1 hover:bg-woffee-1/90 px-2 sm:px-3 py-1 rounded-full shadow-sm ease-in-out duration-150"
      >
        Sign-Up
      </button>
    </form>
  );
};

export default SignUp;
