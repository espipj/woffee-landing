const SignUp = () => {
  return (
    <div className="flex space-x-1 sm:space-x-3">
      <input
        type="email"
        className="w-0 flex-1 sm:basis-3/4 border border-slate-800 rounded-full px-3 font-sans text-lg"
        placeholder="Email"
      ></input>
      <button className="min-w-fit flex-1 sm:basis-1/4 font-sans font-semibold  text-lg text-white antialiased bg-woffee-1 hover:bg-woffee-1/90 px-2 sm:px-3 py-1 rounded-full shadow-sm">
        Sign-Up
      </button>
    </div>
  );
};

export default SignUp;
