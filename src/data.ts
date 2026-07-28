import { ProductType } from "./types";

export interface ProductDetail {
  id: ProductType;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string; // We'll render custom canvas mockups or CSS illustrations
  icon: string; // lucide icon name
  minOrder: number;
  recommendedSpecs: {
    material: string;
    thickness: string;
    resolution: string;
    bleed: string;
    format: string;
  };
  options: {
    materials: { label: string; value: string; multiplier: number }[];
    finishes: { label: string; value: string; multiplier: number }[];
    sizes: { label: string; value: string; width: number; height: number }[];
  };
}

export const PRODUCTS_DATA: ProductDetail[] = [
  {
    id: "garment_tags",
    title: "Garment Tags & Clothing Labels",
    shortDesc: "Premium swing tags and labels to elevate your clothing brand.",
    longDesc: "Expertly crafted swing tags, hang tags, and woven clothing labels that make your garments stand out on the rack. Available in luxurious matte, gloss, recycled kraft, and textured paper with option for metallic hot-foil stamping, metal eyelets, and custom strings.",
    icon: "Tag",
    minOrder: 1000,
    image: "garment_tag_mock",
    recommendedSpecs: {
      material: "Premium Art Card or Kraft Paper",
      thickness: "350gsm to 450gsm for rigidity",
      resolution: "300+ DPI (Vector PDF strongly preferred)",
      bleed: "3mm on all outer edges",
      format: "Convert all fonts to outlines / paths",
    },
    options: {
      materials: [
        { label: "Premium 350gsm Art Card (Classic Matte/Gloss)", value: "art_350", multiplier: 1.0 },
        { label: "Ultra Premium 400gsm Art Card", value: "art_400", multiplier: 1.2 },
        { label: "Rustic Eco Kraft Card (Organic Feel)", value: "kraft_350", multiplier: 1.1 },
        { label: "Premium Textured Royal Paper", value: "textured", multiplier: 1.4 },
      ],
      finishes: [
        { label: "Elegant Soft Touch Matte Lamination", value: "matte", multiplier: 1.1 },
        { label: "Brilliant High-Gloss Lamination", value: "gloss", multiplier: 1.0 },
        { label: "Luxury Spot UV / Gold Foil Accents", value: "spot_foil", multiplier: 1.4 },
        { label: "Classic Natural Unlaminated Finish", value: "unlaminated", multiplier: 0.95 },
      ],
      sizes: [
        { label: "Standard Clothing Tag (2\" x 3.5\")", value: "std_vertical", width: 2, height: 3.5 },
        { label: "Slim Modern Tag (1.5\" x 4\")", value: "slim_vertical", width: 1.5, height: 4 },
        { label: "Bold Square Tag (2.5\" x 2.5\")", value: "square", width: 2.5, height: 2.5 },
        { label: "Large Display Tag (3\" x 4\")", value: "large", width: 3, height: 4 },
      ],
    },
  },
  {
    id: "custom_boxes",
    title: "Boxes & Brand Packaging",
    shortDesc: "Corrugated, rigid, and custom tuck boxes built to protect and impress.",
    longDesc: "Transform your shipping and unboxing experience with brand-calibrated custom boxes. We manufacture high-strength corrugated mailers, luxury rigid keepsake boxes, product tuck-end display boxes, and cardboard sleeves with custom precision sizing.",
    icon: "Package",
    minOrder: 250,
    image: "box_mock",
    recommendedSpecs: {
      material: "Duplex Board, Corrugated E-Flute, or Rigid Chipboard",
      thickness: "1.5mm (corrugated) or 1000-1500gsm (rigid box)",
      resolution: "300 DPI high-res layout template",
      bleed: "3mm inside cutting die-lines",
      format: "Provide layered AI, PSD, or PDF files",
    },
    options: {
      materials: [
        { label: "Eco-Friendly Kraft Corrugated (E-Flute)", value: "kraft_corr", multiplier: 1.0 },
        { label: "White Premium Clay Corrugated", value: "white_corr", multiplier: 1.15 },
        { label: "Heavy Duplex Folding Board (Tuck boxes)", value: "duplex", multiplier: 0.9 },
        { label: "Luxury Rigid Board (Sturdy Gift Box)", value: "rigid_board", multiplier: 2.2 },
      ],
      finishes: [
        { label: "Matte Laminated Finish", value: "matte", multiplier: 1.0 },
        { label: "High-Gloss Waterproof Lamination", value: "gloss", multiplier: 0.95 },
        { label: "Double-sided Coating (Internal Printing)", value: "double_print", multiplier: 1.4 },
        { label: "Premium Gold Hot-Stamping Logo", value: "gold_stamping", multiplier: 1.3 },
      ],
      sizes: [
        { label: "Compact Product Box (4\" x 4\" x 2\")", value: "compact", width: 4, height: 4 },
        { label: "Standard Shipping Mailer (8\" x 6\" x 3\")", value: "standard", width: 8, height: 6 },
        { label: "Large Merchandise Box (10\" x 10\" x 4\")", value: "large", width: 10, height: 10 },
        { label: "Slim Sleeve Box (6\" x 3\" x 1\")", value: "sleeve", width: 6, height: 3 },
      ],
    },
  },
  {
    id: "stickers_labels",
    title: "Premium Stickers & Product Labels",
    shortDesc: "Waterproof, custom die-cut vinyl and transparent brand labels.",
    longDesc: "Enhance your product packaging instantly with high-fidelity, vibrant labels. Perfect for jars, cosmetic tubes, food containers, envelope seals, and laptop decals. Fully waterproof, fade-resistant, and cut to any custom contour shape.",
    icon: "Layers",
    minOrder: 1000,
    image: "sticker_mock",
    recommendedSpecs: {
      material: "Polypropylene (BOPP) or Polymeric Vinyl",
      thickness: "80 to 100 microns with permanent adhesive",
      resolution: "300 DPI vector lines for cut contours",
      bleed: "2mm border or full bleed with cutline",
      format: "Separate vector layer for Kiss-Cut or Die-Cut",
    },
    options: {
      materials: [
        { label: "White Waterproof Premium Vinyl", value: "white_vinyl", multiplier: 1.0 },
        { label: "Elegant Clear/Transparent Vinyl", value: "clear_vinyl", multiplier: 1.25 },
        { label: "Brilliant Metallic Gold/Silver Foil Sticker", value: "metallic_sticker", multiplier: 1.4 },
        { label: "Classic Glossy Paper Sticker", value: "gloss_paper", multiplier: 0.7 },
      ],
      finishes: [
        { label: "Durable Scratch-Resistant Matte UV Coating", value: "matte", multiplier: 1.0 },
        { label: "Brilliant High-Gloss Laminate", value: "gloss", multiplier: 0.95 },
        { label: "Elegant Uncoated Kraft/Vintage", value: "uncoated", multiplier: 0.9 },
        { label: "Holographic Rainbow Foil Overlay", value: "holographic", multiplier: 1.5 },
      ],
      sizes: [
        { label: "Round Seal Sticker (2\" x 2\")", value: "round_2", width: 2, height: 2 },
        { label: "Rectangle Jar Label (3\" x 2\")", value: "rect_label", width: 3, height: 2 },
        { label: "Bold Square Sticker (3\" x 3\")", value: "square_3", width: 3, height: 3 },
        { label: "Large Mailing Label (4\" x 6\")", value: "large_label", width: 4, height: 6 },
      ],
    },
  },
  {
    id: "dtf_transfers",
    title: "DTF (Direct to Film) Prints",
    shortDesc: "Vibrant textile heat-transfers for custom clothing printing.",
    longDesc: "DTF (Direct to Film) represents the modern gold standard in custom apparel decoration. We print high-elasticity, rich-color ink transfers directly to specialty film rolls. Perfect for heat-press transfers onto t-shirts, caps, sports jerseys, hoodies, canvas bags, and masks. Durable through 60+ heavy washes without cracking.",
    icon: "Shirt",
    minOrder: 5, // Metres or pieces
    image: "dtf_mock",
    recommendedSpecs: {
      material: "PET Premium Coated Film & High-Elastic Polyurethane Powder",
      thickness: "Solid backing white ink layer",
      resolution: "300+ DPI with transparent background (PNG/TIFF)",
      bleed: "1.5mm distance between independent small text",
      format: "Strict transparent background; do not mirror artwork (we mirror it)",
    },
    options: {
      materials: [
        { label: "Premium Hot-Peel Textile Ink Transfer", value: "hot_peel", multiplier: 1.0 },
        { label: "Premium Cold-Peel Stretch-Max Transfer", value: "cold_peel", multiplier: 1.1 },
        { label: "Reflective / High-Visibility DTF Print", value: "reflective", multiplier: 1.5 },
        { label: "Metallic Glitter Sparkle DTF Transfer", value: "glitter", multiplier: 1.4 },
      ],
      finishes: [
        { label: "Standard High-Opacity White Backing", value: "std_backing", multiplier: 1.0 },
        { label: "Ultra-Soft Feel Breathable Texture", value: "soft_feel", multiplier: 1.15 },
        { label: "Anti-Migration Blockout (For Polyester)", value: "anti_migration", multiplier: 1.2 },
      ],
      sizes: [
        { label: "Logo Sheet (A4 - 8.3\" x 11.7\")", value: "a4", width: 8.3, height: 11.7 },
        { label: "Poster Sheet (A3 - 11.7\" x 16.5\")", value: "a3", width: 11.7, height: 16.5 },
        { label: "Bulk Roll Segment (24\" wide x 1 meter)", value: "roll_1m", width: 24, height: 39.3 },
        { label: "Bulk Roll Segment (24\" wide x 5 meters)", value: "roll_5m", width: 24, height: 196 },
      ],
    },
  },
  {
    id: "flyers_marketing",
    title: "Promotional Flyers & Collateral",
    shortDesc: "Vibrant brochures, advertising designs, and catalogues.",
    longDesc: "Make sure your company messaging reaches customers in ultra-vibrant colors. We provide high-speed, offset and digital print output for handbills, marketing handouts, bi-folds, tri-folds, company catalogues, poster placards, and custom booklets.",
    icon: "BookOpen",
    minOrder: 500,
    image: "flyer_mock",
    recommendedSpecs: {
      material: "Premium Double-Coated Art Paper",
      thickness: "130gsm (Standard Handbill) to 300gsm (Stiff Card Flyer)",
      resolution: "300 DPI minimum",
      bleed: "3mm safety margin with 5mm text clearance",
      format: "PDF or JPG in CMYK format",
    },
    options: {
      materials: [
        { label: "Standard 130gsm Lightweight Art Paper", value: "art_130", multiplier: 0.8 },
        { label: "Premium 170gsm Heavyweight Art Paper", value: "art_170", multiplier: 1.0 },
        { label: "Heavy 250gsm Premium Art Card", value: "art_250", multiplier: 1.3 },
        { label: "Luxurious 300gsm Royal Card stock", value: "art_300", multiplier: 1.5 },
      ],
      finishes: [
        { label: "Clean Velvet Matte Finish", value: "matte", multiplier: 1.0 },
        { label: "Vivid Glossy Reflective Coat", value: "gloss", multiplier: 0.95 },
        { label: "Eco Uncoated Textured Offset Paper", value: "uncoated", multiplier: 0.9 },
        { label: "Double-sided Aqueous Anti-smudge Varnish", value: "aq_coat", multiplier: 1.1 },
      ],
      sizes: [
        { label: "Pocket Pamphlet (A6 - 4.1\" x 5.8\")", value: "a6", width: 4.1, height: 5.8 },
        { label: "Standard Flyer Size (A5 - 5.8\" x 8.3\")", value: "a5", width: 5.8, height: 8.3 },
        { label: "Large Promo Poster (A4 - 8.3\" x 11.7\")", value: "a4", width: 8.3, height: 11.7 },
        { label: "Tri-Fold Brochure Page (A4 folded to DL)", value: "trifold", width: 8.3, height: 11.7 },
      ],
    },
  },
  {
    id: "corporate_gifts",
    title: "Corporate Gifts & Apparel",
    shortDesc: "Branded ceramic mugs, t-shirts, custom caps, and customized stationary.",
    longDesc: "Build amazing corporate loyalty with branded gear. We offer professional silkscreen, sublimation, and DTF print decoration on premium quality ceramic mugs, standard 180gsm cotton t-shirts, structured sports caps, and full corporate stationery packs.",
    icon: "Gift",
    minOrder: 50,
    image: "gift_mock",
    recommendedSpecs: {
      material: "Premium Ceramic (Mugs) / 100% Ring-Spun Cotton (Apparel)",
      thickness: "AAA Grade ceramic coating, 180gsm combed cotton",
      resolution: "300 DPI transparent png file",
      bleed: "2mm safety offset",
      format: "RGB or CMYK vector/PNG",
    },
    options: {
      materials: [
        { label: "AAA Grade Coated Sublimation Ceramic Mug", value: "mug_ceramic", multiplier: 1.0 },
        { label: "Premium 180gsm Pure Cotton T-Shirt", value: "tshirt_cotton", multiplier: 1.8 },
        { label: "Custom Structured Baseball Cap", value: "cap_sports", multiplier: 1.3 },
        { label: "Custom Leatherette Executive Notebook", value: "notebook", multiplier: 1.6 },
      ],
      finishes: [
        { label: "Standard Full-Color Permanent Print", value: "standard", multiplier: 1.0 },
        { label: "Metallic / Chrome Highlight Prints", value: "metallic", multiplier: 1.3 },
        { label: "Matte-Black Sleek Soft Texture Finish", value: "matte_black", multiplier: 1.2 },
      ],
      sizes: [
        { label: "Standard Mug (11 oz)", value: "mug_11oz", width: 4, height: 4 },
        { label: "Unisex Fit T-Shirt (M / L / XL / XXL)", value: "tshirt_size", width: 18, height: 26 },
        { label: "Universal Adjustable Cap Strap", value: "cap_universal", width: 6, height: 4 },
        { label: "Standard Notebook A5", value: "notebook_a5", width: 5.8, height: 8.3 },
      ],
    },
  },
];

export interface Review {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export const REVIEWS: Review[] = [
  {
    name: "Amanpreet Singh",
    role: "Founder",
    company: "Urban Threads Apparel",
    text: "THE GRAPHICS FACTORY transformed our brand's presence! The custom garment tags they printed on 400gsm matte laminated card with copper eyelets feel incredibly premium. Our clothing line instantly looked twice as expensive. Naveen is fantastic to work with!",
    rating: 5,
  },
  {
    name: "Ritu Sharma",
    role: "Marketing Director",
    company: "Spice Bliss organic cosmetics",
    text: "We ordered 5,000 custom packaging boxes and die-cut transparent labels. The print calibration is outstanding – the corporate colors are perfectly consistent in offset CMYK. 3mm bleed recommendation was perfect. Best custom printer in Ghaziabad!",
    rating: 5,
  },
  {
    name: "Vikram Malhotra",
    role: "Creative Head",
    company: "Retro Apparel Co.",
    text: "Their DTF (Direct to Film) textile stickers are absolute magic. We heat-pressed them on hoodies and t-shirts at 150°C and after 40+ laundry washes, they still stretch perfectly with zero cracking. Incredible dye opacity!",
    rating: 5,
  },
  {
    name: "Nikhil Bhardwaj",
    role: "Operations lead",
    company: "GoFood Delivery",
    text: "Highly professional service. We got our tri-fold flyers and glossy packaging seals completed in record time. Instant quoting and Direct WhatsApp communication with Naveen made the production cycle extremely efficient. Highly recommended!",
    rating: 5,
  },
];

export function calculateEstimatedPrice(
  productType: ProductType,
  materialValue: string,
  finishValue: string,
  width: number,
  height: number,
  quantity: number
): { basePrice: number; total: number; perItem: number } {
  const product = PRODUCTS_DATA.find((p) => p.id === productType);
  if (!product) return { basePrice: 0, total: 0, perItem: 0 };

  const matMultiplier = product.options.materials.find((m) => m.value === materialValue)?.multiplier || 1.0;
  const finMultiplier = product.options.finishes.find((f) => f.value === finishValue)?.multiplier || 1.0;

  // Pricing formula base rates (approximate wholesale prices in INR - Indian Rupees)
  let baseRatePerSqInch = 0.5; // default base per square inch in INR

  switch (productType) {
    case "garment_tags":
      baseRatePerSqInch = 0.4;
      break;
    case "custom_boxes":
      baseRatePerSqInch = 1.2; // packaging boxes cost more per surface area
      break;
    case "stickers_labels":
      baseRatePerSqInch = 0.25;
      break;
    case "dtf_transfers":
      baseRatePerSqInch = 0.8;
      break;
    case "flyers_marketing":
      baseRatePerSqInch = 0.15;
      break;
    case "corporate_gifts":
      baseRatePerSqInch = 3.5;
      break;
  }

  const sqInches = width * height;
  let unitCost = sqInches * baseRatePerSqInch * matMultiplier * finMultiplier;

  // Flat product adjustments
  if (productType === "corporate_gifts") {
    // Gift items are flat priced rather than pure surface area
    if (materialValue === "tshirt_cotton") unitCost = 180 * matMultiplier * finMultiplier;
    else if (materialValue === "mug_ceramic") unitCost = 85 * matMultiplier * finMultiplier;
    else if (materialValue === "cap_sports") unitCost = 90 * matMultiplier * finMultiplier;
    else unitCost = 110 * matMultiplier * finMultiplier;
  } else if (productType === "custom_boxes" && materialValue === "rigid_board") {
    unitCost = unitCost + 45; // high structural base for rigid gift boxes
  }

  // Minimum pricing constraints
  if (unitCost < 1.0 && productType !== "stickers_labels") {
    unitCost = 1.0;
  } else if (unitCost < 0.25) {
    unitCost = 0.25;
  }

  // Quantity discounts curve (economies of scale)
  let discountFactor = 1.0;
  if (quantity >= 10000) discountFactor = 0.55;
  else if (quantity >= 5000) discountFactor = 0.65;
  else if (quantity >= 2000) discountFactor = 0.75;
  else if (quantity >= 1000) discountFactor = 0.85;
  else if (quantity >= 500) discountFactor = 0.92;
  else if (quantity >= 100) discountFactor = 0.97;

  const perItemCost = parseFloat((unitCost * discountFactor).toFixed(2));
  
  // Set setup flat cost
  const setupCost = productType === "custom_boxes" ? 500 : 200;
  const rawTotal = (perItemCost * quantity) + setupCost;
  const totalCost = Math.round(rawTotal);

  return {
    basePrice: Math.round(unitCost),
    perItem: perItemCost,
    total: totalCost,
  };
}
