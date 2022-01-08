import Link from "next/link";

const AppDownload = () => {
  return (
    <span className="flex">
      <Link href="/download" passHref>
        <img
          src="/appstore.svg"
          alt="Get it on the AppStore"
          width={135}
          height={40}
        />
      </Link>
      <span className="mx-1"></span>
      <Link href="/download" passHref>
        <img
          src="/playstore.svg"
          alt="Get it on the PlayStore"
          width={135}
          height={40}
        />
      </Link>
    </span>
  );
};

export default AppDownload;
