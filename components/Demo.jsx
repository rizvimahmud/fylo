import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const Demo = () => {
  return (
    <section id="team" className="pt-36 px-6 md:px-16 bg-primary-blue-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <Image
          src={"/assets/images/illustration-stay-productive.png"}
          alt="Stay Productive"
          width={1000 / 2}
          height={800 / 2}
          layout="responsive"
          priority
        />
        <div>
          <h2 className="flex flex-row md:flex-col font-heading text-base md:text-3xl text-white font-bold leading-10 tracking-wider">
            <span>Stay productive,</span>
            <span>wherever you are</span>
          </h2>
          <p className="max-w-lg text-gray-300 leading-6 mt-4">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="max-w-lg text-gray-300 leading-6 mt-4">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <Link href="#">
            <a className="inline-flex items-center gap-3 mt-5 text-accent-cyan border-b border-accent-cyan hover:text-white hover:border-white">
              <span>See how Fylo works</span>
              <FaArrowAltCircleRight className="w-3 h-3" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
