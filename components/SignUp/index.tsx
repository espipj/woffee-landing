const SignUp = () => {
  return (
    <div className="flex space-x-3">
      <input
        type="email"
        className="basis-2/3 border border-slate-800 rounded-full px-3 font-sans antialiased"
        placeholder="Email"
      ></input>
      <button className="basis-1/3 px-4 py-2 font-semibold text-sm bg-woffee-1 hover:bg-woffee-1/90 text-white rounded-full shadow-sm">
        Sign-Up
      </button>
    </div>
  );
};

export default SignUp;
