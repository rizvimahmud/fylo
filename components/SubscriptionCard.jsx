import { Button } from "./Button";

export const SubscriptionCard = () => {
  return (
    <div
      id="signin"
      className="absolute top-[0%] transform -translate-y-[50%] w-full"
    >
      <div className="w-[90%] md:w-[60%] mx-auto p-8 lg:p-12 bg-primary-blue-1 rounded-md shadow-md">
        <h4 className="font-heading text-white text-lg md:text-2xl font-semibold leading-8 text-center">
          Get early access today
        </h4>
        <p className="text-sm text-gray-300 leading-5 text-center lg:max-w-xl mx-auto mt-6">
          {" "}
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <div className="flex-1">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@email.com"
                className="inline-block w-full px-4 py-3 bg-white text-gray-700 rounded-full"
              />
            </div>
            <div>
              <Button width={"100%"} type="submit">
                Get Started For Free
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
