import Image from "next/image";
import { reviews } from "../data/reviews";
import { ReviewCard } from "./ReviewCard";
import QuotesImage from "../public/assets/images/bg-quotes.png";

export const Reviews = () => {
  return (
    <section className=" pt-40 pb-64 px-6 md:px-16 bg-primary-blue-3">
      <div className="relative z-0">
        <ul className="flex flex-col md:flex-row gap-8 md:gap-6">
          {reviews.map((review) => (
            <li key={review.name}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
        <div className="absolute -top-8 -left-2  z-[-1]">
          <Image src={QuotesImage} alt="Quotes Image" width={50} height={40} />
        </div>
      </div>
    </section>
  );
};
