export const TextVariant = () => {
  return {
    // heading1: { as: "h1" },
    // heading2: { as: "h2" },
    // heading3: { as: "h3" },
    // heading4: { as: "h4" },
    // heading5: { as: "h5" },
    // heading6: { as: "h6" }
    heading1: () => `h1`,
    heading2: () => `h2`,
    heading3: () => `h3`,
    heading4: () => `h4`,
    heading5: () => `h5`,
    heading6: () => `h6`
  };
};

export default TextVariant;
