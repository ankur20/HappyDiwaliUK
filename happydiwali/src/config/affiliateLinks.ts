export interface GiftCard {
  id: string;
  name: string;
  brand: string;
  description: string;
  buyUrl: string;
  bgGradient: string; // Tailored gradients for premium presentation
}

export const affiliateConfig = {
  // Contextual Links used throughout the page descriptions/articles
  contextual: {
    mithaiUrl: "https://www.amazon.co.uk/s?k=diwali+mithai+sweets+box&tag=happydiwaliuk-21",
    diyaUrl: "https://www.amazon.co.uk/s?k=diwali+clay+diyas&tag=happydiwaliuk-21",
    candleUrl: "https://www.amazon.co.uk/s?k=diwali+candles+tealights&tag=happydiwaliuk-21",
  },

  // Main catalog products
  products: {
    clayDiyas: "https://www.amazon.co.uk/s?k=diwali+clay+diyas&tag=happydiwaliuk-21",
    curtainLights: "https://www.amazon.co.uk/s?k=diwali+led+curtain+lights&tag=happydiwaliuk-21",
    lotusHolders: "https://www.amazon.co.uk/s?k=crystal+lotus+tealight+holders&tag=happydiwaliuk-21",
    rangoliKit: "https://www.amazon.co.uk/s?k=diwali+rangoli+stencils+kit&tag=happydiwaliuk-21",
    hangingDiya: "https://www.amazon.co.uk/s?k=diwali+brass+hanging+diya+with+bells&tag=happydiwaliuk-21",
    stringLights: "https://www.amazon.co.uk/s?k=diwali+diya+led+string+lights&tag=happydiwaliuk-21",
  },

  // UK Festive Gift Cards from major retail brands
  giftCards: [
    {
      id: "amazon-uk",
      brand: "Amazon.co.uk",
      name: "Amazon UK Festive eGift Card",
      description: "Perfect for letting your friends and family choose their own lights, decorations, or sweets for Diwali.",
      buyUrl: "https://www.amazon.co.uk/dp/B07P7S2SS9?tag=happydiwaliuk-21",
      bgGradient: "from-amber-500 to-orange-600",
    },
    {
      id: "marks-spencer",
      brand: "Marks & Spencer",
      name: "M&S Diwali E-Gift Card",
      description: "Ideal for premium UK food boxes, festive hamper treats, clothing, and home accessories.",
      buyUrl: "https://www.amazon.co.uk/s?k=marks+and+spencer+gift+card&tag=happydiwaliuk-21",
      bgGradient: "from-emerald-600 to-teal-700",
    },
    {
      id: "john-lewis",
      brand: "John Lewis & Partners",
      name: "John Lewis Gift Voucher",
      description: "Treat your loved ones to premium home lighting, tableware, and festive dinner styling items.",
      buyUrl: "https://www.amazon.co.uk/s?k=john+lewis+gift+card&tag=happydiwaliuk-21",
      bgGradient: "from-stone-700 to-stone-900",
    },
    {
      id: "sainsburys",
      brand: "Sainsbury's",
      name: "Sainsbury's Groceries Gift Card",
      description: "Perfect for buying ingredients to cook traditional home-cooked Diwali feasts and sharing Mithai.",
      buyUrl: "https://www.amazon.co.uk/s?k=sainsburys+gift+card&tag=happydiwaliuk-21",
      bgGradient: "from-orange-500 to-red-700",
    }
  ] as GiftCard[],
};
