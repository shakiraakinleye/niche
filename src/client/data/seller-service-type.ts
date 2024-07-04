export const selfServices = {
  steps: [
    "welcome",
    "setup-shop",
    "about-shop",
    "kyc",
    "setup-payout",
    "add-listing",
    "application-completed",
  ],
  prompts: [
    {
      title: "Setup shop",
      description:
        "Provide information about your shop, such as its name, location, and a brief description.",
      steps: ["setup-shop"],
      contextId: "setupShopData",
    },
    {
      title: "Complete shop setup",
      description:
        "Provide information about your shop, such as its name, location, and a brief description.",
      steps: ["about-shop"],
      contextId: "aboutShopData",
    },
    {
      title: "KYC Information",
      description:
        "To ensure a safe and secure selling environment for all our users, we kindly request you to provide us with some essential KYC information.",
      steps: ["kyc"],
      contextId: "kycData",
    },
    {
      title: "Add payout details",
      description: "How would you like to be paid.",
      steps: ["setup-payout"],
      contextId: "setupPayoutData",
    },
    {
      title: "Create your first listing",
      description: "Start Selling Today - Add your first product listing!",
      steps: ["add-listing"],
      contextId: "isFirstListingAdded",
    },
  ],
  headers: [
    {},
    { title: "Finish shop setup" },
    { title: "Tell us a bit more" },
    {
      title: "KYC Information",
      subtitle:
        "To streamline your payout setup, please provide us with the necessary information required to process your payment efficiently.",
    },
    {
      title: "Let’s finish setting up your account",
      subtitle: "How would you like to get paid?",
    },
    {
      title: "Create your first listing",
      subtitle:
        "Add some photos and details about your product - You’ll be able to edit this later",
    },
    {},
  ],
};

export const managedServices = {
  steps: ["pickup-request", "pickup-request-completed"],
  prompts: [
    {
      title: "Request Pickup",
      description: "Request for your items to be picked up for free!",
      steps: ["pickup-request"],
      contextId: "pickupRequestData",
    },
  ],
  headers: [
    {
      title: "Create Pickup Request",
      subtitle:
        "Request a pickup for your items. Please provide the necessary details to ensure a smooth and timely pickup process.",
    },
    {},
  ],
};
