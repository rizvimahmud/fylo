import { featureItems } from "../data/features";

export const Features = () => {
  return (
    <div id="features" className="min-h-screen bg-primary-blue-3 mt-16">
      <section className=" max-w-5xl mx-auto px-6 pt-36 pb-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-16">
          {featureItems.map(({ heading, description, Icon }, index) => (
            <article
              key={index.toString()}
              className="flex flex-col justify-center items-center"
            >
              <div className="">
                <Icon />
              </div>
              <h3 className="font-heading text-white text-lg font-semibold tracking-wider mt-6">
                {heading}
              </h3>
              <p className=" md:max-w-sm text-gray-300 text-center leading-6 mt-3">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
