const Footer = () => {
  return (
    <footer className="bg-woffee-2 flex flex-col">
      <div className="container mx-auto font-sans antialiased">
        <div className="flex flex-col pt-3 items-end">
          <a
            className="text-white underline"
            href="https://rebrand.ly/woffeeapp-tw"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>

          <a
            className="text-white underline"
            href="https://rebrand.ly/woffeeapp-insta"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="text-white underline"
            href="https://rebrand.ly/Woffee-fb"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a
            className="text-white underline"
            href="mailto:hellowoffee@gmail.com?subject=Hey Woffee Team!"
          >
            Contact us
          </a>
        </div>
        <div className="text-center text-white py-3">
          Copyright © 2022 Woffee
        </div>
      </div>
    </footer>
  );
};

export default Footer;
