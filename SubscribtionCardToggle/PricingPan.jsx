import React from "react";

const PricingPlan = ({
  starterText = "Starter",
  priceText = "$20",
  monthText = "/month",
  accessAllNewsText = "Access All News",
  latestNewsNotificationText = "Latest News Notification",
  sendNewsArticleText = "Send News Article",
  latestMovieRecommendationText = "Latest Movie Recommendation",
  updatedNewsText = "Updated News",
  subscribeButton = "Subscribe",
  ...props
}) => {
  return (
    <div
      {...props}
      className="flex flex-col items-start justify-center w-full sm:w-[90%] md:w-[45%] lg:w-[30%] gap-5 px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-9 border-gray-400 border border-solid"
    >
      <h3 className="text-[24px] md:text-[28px] font-normal text-black">
        {starterText}
      </h3>

      <div className="flex flex-col gap-4 self-stretch">
        {/* Price Section */}
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold tracking-[-0.50px] text-black">
            {priceText}
          </h3>
          <h5 className="text-[16px] sm:text-[18px] font-normal text-black self-end">
            {monthText}
          </h5>
        </div>
        <div className="h-px bg-gray-200" />
      </div>

      {/* Features Section */}
      <div className="flex flex-col items-start gap-3 sm:gap-4">
        <h5 className="text-[14px] sm:text-[15px] font-normal text-black self-start">
          {accessAllNewsText}
        </h5>
        <h5 className="text-[14px] sm:text-[15px] font-normal text-black self-start">
          {latestNewsNotificationText}
        </h5>
        <h5 className="text-[14px] sm:text-[15px] font-normal text-black self-start">
          {sendNewsArticleText}
        </h5>
        <h5 className="text-[14px] sm:text-[15px] font-normal text-black self-start">
          {latestMovieRecommendationText}
        </h5>
      </div>

      {/* Subscribe Button */}
      <button className="border border-solid border-gray-400 px-5 py-2 mt-4 text-sm md:text-base tracking-[-0.50px] sm:px-8 sm:py-3">
        {subscribeButton}
      </button>
    </div>
  );
};

export default PricingPlan;
