import React, { useState, useEffect } from "react";
import { 
  Sun, 
  Moon, 
  Type, 
  Check, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  ExternalLink, 
  Upload, 
  Trash2, 
  Printer, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  Plus,
  BookOpen,
  Layers,
  Sparkles,
  Info
} from "lucide-react";
import { REVIEWS } from "./data";
import { RECENT_WORK_PHOTOS } from "./portfolioData";

export default function App() {
  // Theme state - Dark by default
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  
  // Font size state - Normal by default, options: small, normal, large, xlarge
  const [fontSize, setFontSize] = useState<"small" | "normal" | "large" | "xlarge">("normal");

  // Quick WhatsApp quotation state
  const [inquiryProduct, setInquiryProduct] = useState("");
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryPhone, setInquiryPhone] = useState("");
  const [inquiryNotes, setInquiryNotes] = useState("");

  // Get font size class to inject at top container level
  const getFontSizeClass = () => {
    switch (fontSize) {
      case "small": return "text-[13px] leading-relaxed";
      case "large": return "text-[17px] leading-relaxed";
      case "xlarge": return "text-[19px] leading-relaxed";
      default: return "text-[15px] leading-relaxed";
    }
  };

  const getHeadingSizeClass = (base: string) => {
    switch (fontSize) {
      case "small":
        if (base === "text-4xl") return "text-3xl";
        if (base === "text-3xl") return "text-2xl";
        if (base === "text-2xl") return "text-xl";
        return "text-base";
      case "large":
        if (base === "text-4xl") return "text-5xl";
        if (base === "text-3xl") return "text-4xl";
        if (base === "text-2xl") return "text-3xl";
        return "text-xl";
      case "xlarge":
        if (base === "text-4xl") return "text-6xl";
        if (base === "text-3xl") return "text-5xl";
        if (base === "text-2xl") return "text-4xl";
        return "text-2xl";
      default:
        return base;
    }
  };

  // Form submit to WhatsApp direct
  const handleWhatsAppInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const product = inquiryProduct || "General Inquiry / Printing Service";
    const nameStr = inquiryName || "Interested Customer";
    const phoneStr = inquiryPhone || "Not specified";
    const notesStr = inquiryNotes || "Please provide catalogs and price estimates.";
    
    const text = `Hello Naveen Bhargava! I am viewing your website and would like to raise a quick production request:
- *Requested Offering*: ${product}
- *My Name*: ${nameStr}
- *My Contact/Phone*: ${phoneStr}
- *Requirement Notes*: ${notesStr}

Please check my requirement and arrange a quick callback!`;

    window.open(`https://wa.me/919910903633?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className={`min-h-screen transition-all duration-300 font-sans ${
      theme === "dark" 
        ? "bg-[#090d16] text-slate-100" 
        : "bg-slate-50 text-slate-800"
    } ${getFontSizeClass()}`}>
      
      {/* 1. PROFESSIONAL HEADER / NAVIGATION BAR */}
      <header className={`sticky top-0 z-50 transition-colors border-b backdrop-blur-md ${
        theme === "dark" 
          ? "bg-[#090d16]/95 border-slate-800/80" 
          : "bg-white/95 border-slate-200/80"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Slogan */}
          <div className="flex items-center gap-3">
            <div className="bg-[#fbbf24] text-[#0e1117] font-display font-black text-base sm:text-lg px-2.5 py-0.5 rounded shadow-sm">
              TGF
            </div>
            <div className="text-left">
              <h1 className={`font-display font-black tracking-tight leading-none text-lg sm:text-xl md:text-2xl ${
                theme === "dark" ? "text-white" : "text-slate-900"
              }`}>
                THE GRAPHICS FACTORY
              </h1>
              <p className="text-[10px] font-mono tracking-widest text-[#d97706] uppercase mt-1">
                "Enhancing your Brand!"
              </p>
            </div>
          </div>

          {/* Quick Controls & Navigations */}
          <div className="flex items-center gap-3 sm:gap-6">
            
            {/* Font Size Selector Trigger */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900/60 p-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
              <Type className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <select
                aria-label="Adjust font size"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value as any)}
                className="bg-transparent border-none text-[11px] font-mono font-medium focus:outline-none cursor-pointer text-slate-600 dark:text-slate-300"
              >
                <option value="small" className="text-black bg-white">Small</option>
                <option value="normal" className="text-black bg-white">Normal</option>
                <option value="large" className="text-black bg-white">Large</option>
                <option value="xlarge" className="text-black bg-white">X-Large</option>
              </select>
            </div>

            {/* Light/Dark Mode Switcher Trigger */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className={`p-2 rounded-lg border transition-all hover:scale-105 ${
                theme === "dark"
                  ? "bg-slate-900 border-slate-800 text-yellow-400 hover:bg-slate-800"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href="https://wa.me/919910903633?text=Hello%20Naveen!%20I%20have%20visited%20your%20website%20and%20need%20commercial%20print%20support."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded shadow-md transition-all hover:-translate-y-0.5 h-9"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Contact Us</span>
            </a>

            {/* Instagram 1:1 Icon Button */}
            <a
              href="https://instagram.com/thegraphicsfactory._"
              target="_blank"
              rel="noopener noreferrer"
              className={`h-9 w-9 aspect-square flex items-center justify-center rounded-lg border transition-all hover:scale-105 ${
                theme === "dark"
                  ? "bg-slate-900 border-slate-800 text-pink-500 hover:bg-slate-800 hover:text-pink-400"
                  : "bg-slate-100 border-slate-200 text-pink-600 hover:bg-slate-200 hover:text-pink-500"
              }`}
              title="Follow us on Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* 2. ELEGANT HERO SECTION */}
      <section className={`relative overflow-hidden py-16 sm:py-24 border-b text-left ${
        theme === "dark"
          ? "bg-gradient-to-b from-[#090d16] to-[#0d1220] border-slate-800/60"
          : "bg-gradient-to-b from-white to-slate-100 border-slate-200"
      }`}>
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            
            {/* Verification label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-600 dark:text-yellow-400 text-xs font-semibold tracking-wider uppercase font-mono">
              <ShieldCheck className="h-4 w-4 text-yellow-500" />
              Industrial-Grade Prepress & Manufacture
            </div>

            <h2 className={`font-display font-black tracking-tight leading-tight ${
              getHeadingSizeClass("text-3xl")
            } ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              The Graphics Factory: <br className="hidden sm:inline" />
              Custom <span className="text-yellow-600 dark:text-yellow-400">Tags</span>, Labels & Box Packaging
            </h2>

            <p className={`max-w-2xl text-base sm:text-lg leading-relaxed ${
              theme === "dark" ? "text-slate-300" : "text-slate-600"
            }`}>
              Based in Ghaziabad, we operate multi-colour high-output offset presses and digital screen routers. We specialize in luxury tags for apparel brands, robust cardboard packaging, high-washability DTF textile transfers, and bespoke promotional stationary. 
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#offerings"
                className="px-6 py-3.5 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-lg hover:-translate-y-0.5"
              >
                View What We Offer
              </a>
              <a
                href="#inquiry"
                className={`px-6 py-3.5 font-semibold text-xs uppercase tracking-widest rounded-lg transition-all border ${
                  theme === "dark" 
                    ? "border-slate-700 hover:bg-slate-900 text-white" 
                    : "border-slate-300 hover:bg-slate-100 text-slate-800"
                }`}
              >
                Send Artwork Inquiry
              </a>
            </div>

            {/* Quick feature list */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800/80 max-w-lg font-mono text-xs">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 shrink-0" />
                <span className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>3mm Safe Bleed Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 shrink-0" />
                <span className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>High-wash DTF Textile Prints</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 shrink-0" />
                <span className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>Offset & Digital Presses</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500 shrink-0" />
                <span className={theme === "dark" ? "text-slate-400" : "text-slate-600"}>100% CMYK Color Accuracy</span>
              </div>
            </div>
          </div>

          {/* Quick Business Card Info Visualizer */}
          <div className="lg:col-span-5">
            <div className={`p-6 rounded-2xl border text-left space-y-6 shadow-xl ${
              theme === "dark"
                ? "bg-[#0f1422] border-slate-800/80 text-white"
                : "bg-white border-slate-200 text-slate-800"
            }`}>
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex justify-between items-center">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#d97706]">Head Office</span>
                <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-600 dark:text-green-400 text-[9px] font-mono font-bold uppercase tracking-widest">
                  Direct Line
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-display font-black text-xl tracking-tight">Naveen Bhargava</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">Founder, The Graphics Factory</p>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex gap-3 items-start">
                    <MapPin className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                    <p className={theme === "dark" ? "text-slate-300" : "text-slate-600"}>
                      D-606, Officer City-1, Raj Nagar Extension, Ghaziabad, U.P. 201017
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Phone className="h-4 w-4 text-yellow-500 shrink-0" />
                    <p className={theme === "dark" ? "text-slate-300" : "text-slate-600"}>
                      +91 9910903633 (Call / WhatsApp)
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Mail className="h-4 w-4 text-yellow-500 shrink-0" />
                    <p className={theme === "dark" ? "text-slate-300" : "text-slate-600"}>
                      naveen.tgf@gmail.com
                    </p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Instagram className="h-4 w-4 text-pink-500 shrink-0" />
                    <a 
                      href="https://instagram.com/thegraphicsfactory._" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-600 dark:text-yellow-400 hover:underline"
                    >
                      @thegraphicsfactory._
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919910903633?text=Hi%20Naveen,%20I%20am%20reaching%20out%20regarding%20printing%20rates."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg text-center flex items-center justify-center gap-1.5 transition-all shadow"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Chat Direct on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES: EXACT THREE CARDS ACCORDING TO UPLOADED IMAGE */}
      <section id="offerings" className={`py-16 sm:py-24 text-left border-b ${
        theme === "dark" ? "bg-[#090d16]" : "bg-white"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4 max-w-3xl">
            <h2 className={`font-display font-black tracking-tight ${
              getHeadingSizeClass("text-3xl")
            } ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              What We Offer
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Explore our industrial print manufacturing range categorized into three distinct, specialized production channels.
            </p>
          </div>

          {/* Three Cards Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* CARD 1: BRAND MARKETING, PRINT & DIGITAL MEDIA */}
            <div className={`rounded-2xl border p-6 flex flex-col justify-between transition-all hover:shadow-xl ${
              theme === "dark" 
                ? "bg-[#0f1422] border-slate-800 hover:border-[#fbbf24]/30" 
                : "bg-slate-50 border-slate-200 hover:border-[#fbbf24]/40"
            }`}>
              <div className="space-y-5">
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#d97706] dark:text-yellow-400">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className={`font-display font-black tracking-tight ${
                    getHeadingSizeClass("text-2xl")
                  } ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    Printing
                  </h3>
                
                </div>

                {/* Items from Left/Right Column of uploaded image */}
                <ul className="space-y-2 text-xs font-mono text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    <span>Flyers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    <span>Corporate Brochures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    <span>Posters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    <span>Catalogues</span>
                  </li>
                  
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 mt-6">
                <a
                  href="#inquiry"
                  onClick={() => setInquiryProduct("Brand Media & Marketing")}
                  className="inline-flex items-center gap-1 text-xs font-bold text-yellow-600 dark:text-yellow-400 hover:underline"
                >
                  <span>Select Offering Channel</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* CARD 2: APPAREL, DECALS & EVENT BRANDING */}
            <div className={`rounded-2xl border p-6 flex flex-col justify-between transition-all hover:shadow-xl ${
              theme === "dark" 
                ? "bg-[#0f1422] border-slate-800 hover:border-[#fbbf24]/30" 
                : "bg-slate-50 border-slate-200 hover:border-[#fbbf24]/40"
            }`}>
              <div className="space-y-5">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Layers className="h-6 w-6" />
                </div>
                <div>
                  <h3 className={`font-display font-black tracking-tight ${
                    getHeadingSizeClass("text-2xl")
                  } ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    Packaging
                  </h3>
                  
                </div>

                {/* Items from Left/Right Column of uploaded image */}
                <ul className="space-y-2 text-xs font-mono text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    <span>Boxes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    <span>Paper Bags</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    <span>Corrugated Boxes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    <span>Packging Sleeves</span>
                  </li>
                  
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 mt-6">
                <a
                  href="#inquiry"
                  onClick={() => setInquiryProduct("Apparel, Decals & Signs")}
                  className="inline-flex items-center gap-1 text-xs font-bold text-yellow-600 dark:text-yellow-400 hover:underline"
                >
                  <span>Select Offering Channel</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* CARD 3: RIGID PACKAGING & CORPORATE IDENTITY */}
            <div className={`rounded-2xl border p-6 flex flex-col justify-between transition-all hover:shadow-xl ${
              theme === "dark" 
                ? "bg-[#0f1422] border-slate-800 hover:border-[#fbbf24]/30" 
                : "bg-slate-50 border-slate-200 hover:border-[#fbbf24]/40"
            }`}>
              <div className="space-y-5">
                <div className="h-12 w-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-600 dark:text-pink-400">
                  <Printer className="h-6 w-6" />
                </div>
                <div>
                  <h3 className={`font-display font-black tracking-tight ${
                    getHeadingSizeClass("text-2xl")
                  } ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                    Branding
                  </h3>
                 
                </div>

                {/* Items from Left/Right Column of uploaded image */}
                <ul className="space-y-2 text-xs font-mono text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    <span>Garment Tags</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    <span>Labels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    <span>Stickers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                    <span>DTF Stickers</span>
                  </li>
                 
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 mt-6">
                <a
                  href="#inquiry"
                  onClick={() => setInquiryProduct("Rigid Boxes & Packaging")}
                  className="inline-flex items-center gap-1 text-xs font-bold text-yellow-600 dark:text-yellow-400 hover:underline"
                >
                  <span>Select Offering Channel</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PARTNER TESTIMONIALS SECTION */}
      <section className={`py-16 text-left border-b ${
        theme === "dark" ? "bg-[#0d1220]" : "bg-slate-100"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-slate-200 dark:border-slate-800 pb-4 gap-4">
            <div>
              <h3 className={`font-display font-black tracking-tight ${
                getHeadingSizeClass("text-3xl")
              } ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                What Our Partners Say
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Trusted by leading apparel brands, manufacturers, and corporate institutions.
              </p>
            </div>
            
            {/* Google reviews direct CTA link */}
            <a
              href="https://g.page/r/your-google-reviews-placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-yellow-600 dark:text-yellow-400 hover:underline flex items-center gap-1 font-mono"
              title="View reviews on Google Maps"
            >
              <span>Google Reviews</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.slice(0, 4).map((rev, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-xl border relative transition-all hover:scale-[1.01] ${
                  theme === "dark"
                    ? "bg-[#0f1422] border-slate-800 hover:border-slate-700"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-sm text-yellow-600 dark:text-yellow-400 font-mono">{rev.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">{rev.role}, {rev.company}</p>
                  </div>
                  <div className="flex gap-0.5 text-[#fbbf24]">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#fbbf24] stroke-[#fbbf24]" />
                    ))}
                  </div>
                </div>
                <p className={`text-sm mt-4 italic ${
                  theme === "dark" ? "text-slate-300" : "text-slate-600"
                }`}>
                  "{rev.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Verified review link banner */}
          <div className="p-4 rounded-xl border border-yellow-500/10 bg-yellow-500/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className={theme === "dark" ? "text-slate-300" : "text-slate-600"}>4.9 Stars on Google Local Search based on authenticated apparel brands</span>
            </div>
            <a
              href="https://g.page/r/your-google-reviews-placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 dark:text-yellow-400 hover:underline inline-flex items-center gap-1 font-bold"
            >
              <span>Leave a Review</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. QUICK QUOTE / INQUIRY GATEWAY */}
      <section id="inquiry" className={`py-16 text-left border-b ${
        theme === "dark" ? "bg-[#090d16]" : "bg-white"
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className={`p-6 sm:p-8 rounded-2xl border ${
            theme === "dark"
              ? "bg-[#0f1422] border-slate-800"
              : "bg-slate-50 border-slate-200"
          }`}>
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
              <h3 className={`font-display font-black tracking-tight ${
                getHeadingSizeClass("text-2xl")
              } ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
                Quick Production Quote Inquiry
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">
                Fill this simple checklist to auto-format a corporate quotation draft on WhatsApp directly to Naveen Bhargava.
              </p>
            </div>

            <form onSubmit={handleWhatsAppInquiry} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">Select Product / Category</label>
                  <select
                    value={inquiryProduct}
                    onChange={(e) => setInquiryProduct(e.target.value)}
                    className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-yellow-500 text-slate-800 dark:text-white"
                  >
                    <option value="">-- Choose Category --</option>
                    <option value="Garment Tags & Clothing Swing Labels">Garment Tags & Clothing Swing Labels</option>
                    <option value="Boxes & Corrugated Rigid Packaging">Boxes & Corrugated Rigid Packaging</option>
                    <option value="Stickers, Die-Cut Vinyl & Jar Labels">Stickers, Die-Cut Vinyl & Jar Labels</option>
                    <option value="Textile DTF heat prints (Apparel)">Textile DTF heat prints (Apparel)</option>
                    <option value="Flyers, Brochures & Catalogues">Flyers, Brochures & Catalogues</option>
                    <option value="Custom Gift Items & Printed Stationery">Custom Gift Items & Printed Stationery</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">Your Name / Brand *</label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="E.G. Aura Apparel or Your Name"
                    className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-yellow-500 text-slate-800 dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">Contact WhatsApp / Phone *</label>
                  <input
                    type="text"
                    required
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    placeholder="+91..."
                    className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-yellow-500 text-slate-800 dark:text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">Specify Quantities & Target Dimensions</label>
                  <input
                    type="text"
                    placeholder="E.G. 1000 Tags, Size 2x3.5 inches"
                    className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-yellow-500 text-slate-800 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-bold">Requirement Details / Special Materials</label>
                <textarea
                  value={inquiryNotes}
                  onChange={(e) => setInquiryNotes(e.target.value)}
                  rows={3}
                  placeholder="Tell us about paper weight (GSM), matte/gloss lamination requirements, or eyelets..."
                  className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-yellow-500 text-slate-800 dark:text-white resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#fbbf24] hover:bg-[#fcd34d] text-[#0e1117] font-bold text-xs uppercase tracking-widest rounded-lg shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Send Quotation Checklist to WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 6. SERVICES PHOTOS GALLERY (AT END OF THE PAGE - FLUID GRIDS FOR ANY DIMENSIONS) */}
      <section className={`py-16 text-left ${
        theme === "dark" ? "bg-[#0d1220]" : "bg-slate-100"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className={`font-display font-black tracking-tight ${
              getHeadingSizeClass("text-3xl")
            } ${theme === "dark" ? "text-white" : "text-slate-900"}`}>
              Production Gallery & Recent Works
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Real-life output samples showing variable aspect ratios (portrait, landscape, and square) seamlessly adjusted.
            </p>
          </div>

          {/* DYNAMIC PORTFOLIO GRID USING REAL UPLOADED PHOTOS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {RECENT_WORK_PHOTOS.map((photo) => (
              <div 
                key={photo.id}
                className={`relative group rounded-xl overflow-hidden shadow-md border transition-all hover:shadow-xl ${
                  theme === "dark" ? "bg-[#0f1422] border-slate-800" : "bg-white border-slate-200"
                }`}
              >
                {/* Image container with explicit CSS aspect-ratio */}
                <div 
                  className="w-full relative overflow-hidden bg-slate-950/80 flex items-center justify-center p-2"
                  style={{ aspectRatio: photo.aspectRatio, minHeight: "220px" }}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    loading="eager"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 pointer-events-none">
                    <p className="text-white text-xs font-bold uppercase tracking-wider font-mono">
                      {photo.title}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 flex justify-between items-center border-t border-slate-100 dark:border-slate-800/80">
                  <div>
                    <h4 className="font-bold text-xs tracking-tight">{photo.title}</h4>
                    <span className="text-[10px] uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono">
                      {photo.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. SECURE BRAND FOOTER */}
      <footer className={`py-12 border-t text-left shrink-0 ${
        theme === "dark" ? "bg-slate-950 border-slate-900" : "bg-slate-900 text-slate-300 border-slate-900"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#fbbf24] text-[#0e1117] font-display font-black text-xl px-2.5 py-0.5 rounded-sm">
                TGF
              </div>
              <span className="font-display font-bold text-lg text-white">THE GRAPHICS FACTORY</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
              Highly professional manufacturer of custom clothing garment tags, custom corrugated/rigid packaging boxes, die-cut waterproof vinyl decals, high-durability DTF textile transfers, flyers, and catalogs.
            </p>
            <p className="text-[10px] font-mono tracking-widest text-[#d97706] uppercase font-bold">
              "Enhancing your Brand!"
            </p>
          </div>

          <div className="md:col-span-6 space-y-4 font-mono text-xs">
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-bold">Direct Corporate Office</h4>
            
            <div className="space-y-2 text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#fbbf24] shrink-0 mt-0.5" />
                <span>D-606, Officer City-1, Raj Nagar Extension, Ghaziabad, U.P. 201017</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#fbbf24] shrink-0" />
                <span>Owner: <strong className="text-white">Naveen Bhargava</strong> (+91 9910903633)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#fbbf24] shrink-0" />
                <span>Artwork: <a href="mailto:naveen.tgf@gmail.com" className="text-white hover:underline">naveen.tgf@gmail.com</a></span>
              </p>
              <p className="flex items-center gap-2 text-pink-400">
                <Instagram className="h-4 w-4 shrink-0" />
                <span>Instagram: <a href="https://instagram.com/thegraphicsfactory._" target="_blank" rel="noopener noreferrer" className="hover:underline">@thegraphicsfactory._</a></span>
              </p>
            </div>
            
            <div className="pt-2 border-t border-slate-800/80 flex justify-between text-[10px] text-slate-500">
              <span>© {new Date().getFullYear()} The Graphics Factory. All Rights Reserved.</span>
              <span>Design Calibrated</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
