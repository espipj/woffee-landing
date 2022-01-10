const NavBar = () => {
  return (
    <div className="sticky md:mx-9 top-0 z-40 backdrop-blur bg-white/80">
      <div className="max-w-8xl mx-auto">
        <div className="md:pt-2 md:pb-1 md:px-4 pt-2 pb-1 px-3">
          <img
            src={`${process.env.BASE_URL || "/woffee-landing"}/woffee.svg`}
            alt="Woffee Logo"
            width={180}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
