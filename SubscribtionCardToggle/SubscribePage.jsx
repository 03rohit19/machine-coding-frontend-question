import React, { useState } from "react";
import PricingPlan from "./PricingPan"; // using your provided PricingPlan component

const subscriptionOptions = {
  monthly: [
    {
      starterText: "Starter",
      priceText: "$20",
      monthText: "/month",
      accessAllNewsText: "Access All News",
      latestNewsNotificationText: "Latest News Notification",
      sendNewsArticleText: "Send News Article",
      latestMovieRecommendationText: "Latest Movie Recommendation",
      updatedNewsText: "Updated News",
      subscribeButton: "Subscribe",
    },
    {
      starterText: "Pro",
      priceText: "$40",
      monthText: "/month",
      accessAllNewsText: "Access All News",
      latestNewsNotificationText: "Latest News Notification",
      sendNewsArticleText: "Send News Article",
      latestMovieRecommendationText: "Latest Movie Recommendation",
      updatedNewsText: "Updated News",
      subscribeButton: "Subscribe",
    },
    {
      starterText: "Enterprise",
      priceText: "$100",
      monthText: "/month",
      accessAllNewsText: "Access All News",
      latestNewsNotificationText: "Latest News Notification",
      sendNewsArticleText: "Send News Article",
      latestMovieRecommendationText: "Latest Movie Recommendation",
      updatedNewsText: "Updated News",
      subscribeButton: "Subscribe",
    },
  ],
  yearly: [
    {
      starterText: "Starter",
      priceText: "$200",
      monthText: "/year",
      accessAllNewsText: "Access All News",
      latestNewsNotificationText: "Latest News Notification",
      sendNewsArticleText: "Send News Article",
      latestMovieRecommendationText: "Latest Movie Recommendation",
      updatedNewsText: "Updated News",
      subscribeButton: "Subscribe",
    },
    {
      starterText: "Pro",
      priceText: "$400",
      monthText: "/year",
      accessAllNewsText: "Access All News",
      latestNewsNotificationText: "Latest News Notification",
      sendNewsArticleText: "Send News Article",
      latestMovieRecommendationText: "Latest Movie Recommendation",
      updatedNewsText: "Updated News",
      subscribeButton: "Subscribe",
    },
    {
      starterText: "Enterprise",
      priceText: "$1000",
      monthText: "/year",
      accessAllNewsText: "Access All News",
      latestNewsNotificationText: "Latest News Notification",
      sendNewsArticleText: "Send News Article",
      latestMovieRecommendationText: "Latest Movie Recommendation",
      updatedNewsText: "Updated News",
      subscribeButton: "Subscribe",
    },
  ],
};

const Subscribe = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [isFading, setIsFading] = useState(false); // New state to handle transition

  const handleTabChange = (planType) => {
    setIsFading(true); // Start fading out
    setTimeout(() => {
      setSelectedPlan(planType); // Change the plan after fading out
      setIsFading(false); // Fade in the new plan
    }, 300); // Delay matches the transition duration (300ms)
  };

  return (
    <div className="w-full">
      <div className="mt-12 mb-12 flex flex-col items-center gap-12">
        <div className="container-xs px-4 md:px-5">
          <div className="flex flex-col gap-12 justify-center">
            {/* Heading */}
            <div className="text-center px-4 md:px-0">
              <h1 className="text-2xl md:text-3xl font-semibold">
                Subscribe now for the latest and exclusive information alerts
              </h1>
              <p className="text-sm md:text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => handleTabChange("monthly")}
                className={`px-4 py-2 mx-1 sm:px-6 sm:py-2 sm:mx-2 transition duration-300 ${
                  selectedPlan === "monthly"
                    ? "bg-gray-900 text-white"
                    : "bg-white text-black"
                } border border-black rounded-lg`}
              >
                MONTHLY
              </button>
              <button
                onClick={() => handleTabChange("yearly")}
                className={`px-4 py-2 mx-1 sm:px-6 sm:py-2 sm:mx-2 transition duration-300 ${
                  selectedPlan === "yearly"
                    ? "bg-gray-900 text-white"
                    : "bg-white text-black"
                } border border-black rounded-lg`}
              >
                YEARLY
              </button>
            </div>

            {/* Pricing Plan Display with fade-in/out transition */}
            <div
              className={`flex flex-col md:flex-row justify-center mt-10 gap-4 md:gap-6 transition-opacity duration-300 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {(selectedPlan === "monthly"
                ? subscriptionOptions.monthly
                : subscriptionOptions.yearly
              ).map((plan, index) => (
                <PricingPlan
                  key={index}
                  starterText={plan.starterText}
                  priceText={plan.priceText}
                  monthText={plan.monthText}
                  accessAllNewsText={plan.accessAllNewsText}
                  latestNewsNotificationText={plan.latestNewsNotificationText}
                  sendNewsArticleText={plan.sendNewsArticleText}
                  latestMovieRecommendationText={
                    plan.latestMovieRecommendationText
                  }
                  updatedNewsText={plan.updatedNewsText}
                  subscribeButton={plan.subscribeButton}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
