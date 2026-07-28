import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let aiInstance: GoogleGenAI | null = null;

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    // Return null or throw. We can return null to allow a fallback/demo response
    return null;
  }
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiInstance;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "healthy", timestamp: new Date().toISOString() });
  });

  // Contact / Lead form submission (local cache fallback, but also server-logged)
  app.post("/api/inquiry", (req, res) => {
    const { name, email, phone, companyName, productType, quantity, details } = req.body;
    console.log("New Print Inquiry Received:", { name, email, phone, companyName, productType, quantity, details });
    
    // In a real database app we would write to database.
    // For now we return success. The frontend will also persist in localStorage.
    res.json({
      success: true,
      message: "Your inquiry has been successfully logged! We will get back to you shortly.",
      referenceId: "TGF-" + Math.floor(100000 + Math.random() * 900000),
    });
  });

  // AI Print Consultant Route using Gemini API
  app.post("/api/gemini/chat", async (req, res) => {
    const { message, history } = req.body;
    
    if (!message) {
       res.status(400).json({ error: "Message is required" });
       return;
    }

    const ai = getGeminiClient();
    
    // Detailed system instructions incorporating business information, prepress specs, products
    const systemInstruction = `You are "TGF Print Expert", the senior print production consultant at "The Graphics Factory" (TGF). 
Your objective is to provide professional, clear, helpful, and highly converting guidance to potential customers looking for printing and custom packaging.

--- BUSINESS INFORMATION ---
- Business Name: The Graphics Factory (TGF)
- Owner / Contact Person: Naveen Bhargava
- Mobile / WhatsApp: +91 9910903633
- Email Address: naveen.tgf@gmail.com
- Instagram: @thegraphicsfactory._ (Instagram handle: thegraphicsfactory._)
- Office Address: D-606, Officer City-1, Raj Nagar Extension, Ghaziabad, U.P. 201017
- Tagline: "Enhancing your Brand!"

--- SERVICES & PRODUCTS OFFERED ---
1. Garment Tags & Labels: Premium custom clothing tags, swing tags, woven or printed labels in premium materials like 350-400gsm art card, kraft board, matte laminated card, or textured paper, with custom stringing/eyelets.
2. Custom Boxes & Packaging: Corrugated boxes, rigid cardboard gift boxes, custom tuck boxes, cardboard sleeves, product displays, and premium brand boxes.
3. Stickers & Labels: Die-cut vinyl stickers, paper stickers, custom product labels (gloss/matte), transparent vinyl, and thermal transfer rolls.
4. DTF (Direct to Film) Stickers Printing: Premium textile heat transfers for t-shirts, caps, bags, hoodies. Extremely durable, wash-resistant, brilliant colors, stretchable.
5. Promotional Flyers & Collateral: Marketing flyers (commonly 130gsm or 170gsm art paper with gloss/matte finish), brochures (bi-fold, tri-fold), catalogues, posters, standies, inside/outdoor banners, customized corporate stationary.
6. Corporate Gift Items: Personalized mugs, custom printed t-shirts, caps, water bottles, keychains, branded notebooks.
7. Specialized Support: Prepress file setup (fixing bleed, resolutions, cut contours) and Image Enhancements.

--- TECHNICAL PRINT ADVISE (Strictly Accurate) ---
- Bleed Margins: Always recommend at least 3mm bleed margin on all sides for cut files (Flyers, Tags, Boxes, Stickers) to avoid white borders after cutting.
- File Formats: High-resolution Vector files are highly preferred. Recommend PDF, EPS, AI (Illustrator), CDR (CorelDraw), or high-res TIFF/PNG (minimum 300 DPI). Text should be converted to outlines/curves.
- Color Space: Must be prepared in CMYK format. RGB files will undergo color shifts during offset/digital printing.
- DTF Sticker Application: Standard recommendation is heat-pressing at 150°C (302°F) for 12-15 seconds under medium-high pressure, allow to cool completely, then peel cold for best results, followed by a 5-second post-press.

--- CONVERSATIONAL STYLE ---
- Be extremely polite, professional, and confident. Focus on quality, craftsmanship, and brand-enhancement.
- Keep answers relatively concise and highly structured (use lists or bullet points).
- ALWAYS end or weave in an action-oriented call to action. Suggest contacting Naveen Bhargava on WhatsApp (+91 9910903633) to finalize orders, or utilizing our on-screen custom estimator and inquiry form.
- Mention Instagram (@thegraphicsfactory._) to view our actual portfolio.
- If the Gemini API key is not configured, do not complain technically. Speak elegantly about print.

--- FALLBACK MODE ---
If the key is missing, explain standard guidelines but let them know they can connect directly.`;

    if (!ai) {
      // Fallback response for demo / unconfigured mode
      const lowerMsg = message.toLowerCase();
      let responseText = `Thank you for reaching out to **The Graphics Factory**! 

`;
      if (lowerMsg.includes("tag") || lowerMsg.includes("garment")) {
        responseText += `For custom **Garment Tags**, we recommend premium 350gsm or 400gsm Art Cards with custom matte lamination and copper eyelets to give your clothing line a luxurious finish. 

To proceed with detailed pricing or share your artwork, please contact our production lead, **Naveen Bhargava** at **+91 9910903633** (available on WhatsApp) or email us at **naveen.tgf@gmail.com**. You can also visit our Instagram **@thegraphicsfactory._** to view our recent creations!`;
      } else if (lowerMsg.includes("sticker") || lowerMsg.includes("dtf")) {
        responseText += `We print high-fidelity **Stickers & DTF (Direct to Film) transfers**! Our DTF stickers are perfect for high-stretch garments (t-shirts, caps, uniforms) with heat application at 150°C for 12-15 seconds. For custom packaging labels, we offer die-cut matte/gloss vinyl and transparent stickers.

Please send your design file (preferably 300+ DPI or Vector PDF) to **naveen.tgf@gmail.com** or text **+91 9910903633** on WhatsApp for an immediate layout mockup and custom volume pricing!`;
      } else if (lowerMsg.includes("box") || lowerMsg.includes("packaging")) {
        responseText += `We specialize in premium **Boxes & Brand Packaging**! From rigid gift boxes to corrugated mailing boxes and standard product tuck-boxes, we handle custom sizes, structural design, and custom brand printing.

Please use the **On-Screen Custom Estimator** on this page to select your packaging type and dimensions, or message **Naveen Bhargava** (+91 9910903633) with your box dimensions (Length x Width x Height) and quantity for a direct wholesale estimate!`;
      } else {
        responseText += `We offer high-professional printing for **Garment Tags, Promotional Flyers, Custom Boxes, Stickers, Labels, DTF transfers**, and customized corporate stationery to enhance your brand!

Please let us know which product you are looking to create. We recommend preparing your files in **CMYK color format at 300+ DPI** with a **3mm bleed margin**.

You can reach out directly to **Naveen Bhargava** at **+91 9910903633** via WhatsApp/Call, or check out our premium portfolio on Instagram **@thegraphicsfactory._**!`;
      }

      res.json({ text: responseText, note: "Using premium fallback response engine" });
      return;
    }

    try {
      // Structure the chat history and current message
      // Translate the history array into Gemini content parts if provided
      const contents: any[] = [];
      
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          contents.push({
            role: turn.role === "user" ? "user" : "model",
            parts: [{ text: turn.content }],
          });
        }
      }
      
      contents.push({
        role: "user",
        parts: [{ text: message }],
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Failed to query Gemini API", details: error.message });
    }
  });

  // Serve public static assets (uploaded photos, etc.)
  app.use(express.static(path.join(process.cwd(), "public")));

  // Serve static files in production
  if (process.env.NODE_ENV === "production") {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    // Vite middleware for development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`The Graphics Factory server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
