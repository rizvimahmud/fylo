import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { CurveSVG } from "./Icons";

export const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center px-6 z-0">
      <div className="absolute -bottom-16 lg:-bottom-32 left-0 right-0  flex flex-col justify-center items-center md:justify-end overflow-x-hidden -z-10 pointer-events-none">
        <CurveSVG />
      </div>
      <Image
        src={"/assets/images/illustration-intro.png"}
        alt="Hero Illustration"
        width={1200 / 2}
        height={1000 / 2}
        priority
      />
      <div className="mt-14 text-center">
        <h1 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-wider leading-10">
          <span className="block">All your files in one secure location,</span>
          <span className="block">accesible, anywhere</span>
        </h1>
        <p className="max-w-md mx-auto mt-8 text-gray-400">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <div className="mt-6 w-64 mx-auto">
          <Link href="#signin">
            <a>
              <Button width={"100%"}>Get Started</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
