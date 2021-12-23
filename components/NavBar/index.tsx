import Image from "next/image";
const NavBar = () => {
  return (
    <div className="sticky md:top-2 md:mx-2 top-1 mx-1 my-1 z-40 backdrop-blur-xs rounded-2xl max-w-fit">
      <div className="max-w-8xl mx-auto">
        <div className="md:pt-2 md:pb-1 md:px-8 sm:py-2 sm:px-3">
          <Image src="/woffee.svg" alt="Woffee Logo" width={180} height={40} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
