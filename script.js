const translations = {
  en: {
    metaTitle: "BARIS BERBER | Turkish DJ",
    metaDescription:
      "Official website of Barış Berber, Turkish DJ and electronic music artist. Tracks, Spotify, visuals and booking information.",
    navTour: "Dates",
    navMusic: "Sound",
    navAbout: "Bio",
    navNewsletter: "List",
    heroAlt: "BARIS BERBER playing an electronic set in a dark open-air crowd",
    heroEyebrow: "Istanbul-born / Berlin pressure / afterhours",
    heroLine: "No gloss. Just sweat, red light and pressure on the room.",
    heroTour: "Dates",
    heroListen: "Play",
    scrollCue: "Down",
    marqueeOne: "Basement Energy",
    marqueeTwo: "Red Light Hours",
    marqueeThree: "No Phones, Just Room",
    marqueeFour: "Late Checkout",
    introText:
      "BARIS BERBER does not rush the room. He locks it slowly: warm Istanbul muscle, Berlin basement pressure, drums up front, melody in the smoke.",
    visualEyebrow: "Room mode",
    visualTitle: "Low light. Hard drums. No soft landing.",
    tourEyebrow: "Next rooms",
    tourTitle: "Dates",
    dateOne: "04 Jul",
    dateTwo: "19 Jul",
    dateThree: "09 Aug",
    dateFour: "12 Sep",
    tickets: "Tickets",
    musicEyebrow: "Official",
    musicTitle: "Spotify",
    spotifyEyebrow: "Artist feed",
    spotifyTitle: "BARIŞ BERBER on Spotify",
    spotifyText: "Popular tracks, rough edges and the official artist feed in one place.",
    spotifyArtist: "Open Artist",
    spotifyOpen: "Spotify",
    releaseOneType: "Track",
    releaseTwoType: "Track",
    releaseThreeType: "Track",
    releaseFourType: "Radio Mix",
    releaseFiveType: "Extended",
    releaseOneText: "A late drop with a cold shoulder and no apology.",
    releaseTwoText: "Body music with a vocal hook hiding in the haze.",
    releaseThreeText: "A wider cut, still dark around the edges.",
    releaseFourText: "Shorter fuse, same pressure. Built to move fast.",
    releaseFiveText: "The longer version lets the room sweat a little more.",
    aboutEyebrow: "Bio",
    aboutTitle: "Music for rooms that do not want daylight yet.",
    aboutText:
      "Raised between Istanbul heat and Berlin nights, BARIS BERBER keeps the set physical: raw drums, short vocals, long tension, room-first choices. Nothing polished too clean.",
    statShows: "Nights",
    statCities: "Cities",
    statReleases: "Releases",
    reelTitle: "Room Tape",
    reelText:
      "The visual world stays close to the booth: flash, smoke, metal, faces half-lit. More diary than campaign.",
    contactEyebrow: "Get close",
    contactTitle: "List",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    subscribe: "Join",
    subscribed: "You're in",
    booking: "Booking",
  },
  tr: {
    metaTitle: "BARIS BERBER | Turkish DJ",
    metaDescription:
      "Official website of Barış Berber, Turkish DJ and electronic music artist. Tracks, Spotify, visuals and booking information.",
    navTour: "Tarihler",
    navMusic: "Sound",
    navAbout: "Bio",
    navNewsletter: "Liste",
    heroAlt: "BARIS BERBER karanlık bir açık hava kalabalığında elektronik set çalarken",
    heroEyebrow: "İstanbul çıkışlı / afterhours / karanlık enerji",
    heroLine: "Parlaklık yok. Sadece ter, kırmızı ışık ve odanın basıncı.",
    heroTour: "Tarihler",
    heroListen: "Dinle",
    scrollCue: "Aşağı",
    marqueeOne: "Bodrum Enerjisi",
    marqueeTwo: "Kırmızı Işık Saati",
    marqueeThree: "Telefon Yok, Oda Var",
    marqueeFour: "Sabaha Yakın",
    introText:
      "BARIS BERBER odayı aceleye getirmez. Ritmi yavaşça kurar: İstanbul damarı, Berlin basıncı, önde davul, dumanda melodi.",
    visualEyebrow: "Oda modu",
    visualTitle: "Az ışık, sert ritim, direkt enerji.",
    tourEyebrow: "Sıradaki odalar",
    tourTitle: "Tarihler",
    dateOne: "04 Tem",
    dateTwo: "19 Tem",
    dateThree: "09 Ağu",
    dateFour: "12 Eyl",
    tickets: "Bilet",
    musicEyebrow: "Resmi",
    musicTitle: "Spotify",
    spotifyEyebrow: "Resmi akış",
    spotifyTitle: "BARIŞ BERBER Spotify'da",
    spotifyText: "Resmi parçalar, set ruhu ve Barış Berber sound'u tek yerde.",
    spotifyArtist: "Spotify'da aç",
    spotifyOpen: "Spotify",
    releaseOneType: "Track",
    releaseTwoType: "Track",
    releaseThreeType: "Track",
    releaseFourType: "Radio Mix",
    releaseFiveType: "Extended",
    releaseOneText: "Geç saatte gelen soğuk ve sert bir düşüş.",
    releaseTwoText: "Dumanın içinde yükselen vokal ve gövdeye vuran ritim.",
    releaseThreeText: "Derin, akışkan ve karanlık bir enerji.",
    releaseFourText: "Gerilimli synth'ler ve direkt kulüp temposu.",
    releaseFiveText: "Daha uzun, daha yoğun, daha geceye dönük bir versiyon.",
    aboutEyebrow: "Bio",
    aboutTitle: "Geceye yakın, kulübe dönük, yüksek enerjili bir seçki.",
    aboutText:
      "BARIS BERBER seti fiziksel tutar: derin bass, kısa vokaller, uzun gerilim ve odanın nabzına göre kurulan geçişler.",
    statShows: "Gece",
    statCities: "Şehir",
    statReleases: "Yayın",
    reelTitle: "Room Tape",
    reelText:
      "Booth'a yakın bir görsel dünya: flaş, duman, metal ve yarı karanlık yüzler. Kampanya değil, gece hafızası.",
    contactEyebrow: "Yakında kal",
    contactTitle: "Liste",
    emailLabel: "E-posta",
    emailPlaceholder: "sen@example.com",
    subscribe: "Katıl",
    subscribed: "Listedesin",
    booking: "Booking",
  },
};

const storageKey = "barisLanguageV2";
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const loader = document.querySelector("[data-loader]");
const heroContent = document.querySelector(".hero-content");
const heroImage = document.querySelector(".hero-image");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const languageButtons = [...document.querySelectorAll("[data-lang-button]")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const getStoredLanguage = () => {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
};

const storeLanguage = (language) => {
  try {
    localStorage.setItem(storageKey, language);
  } catch {
    return;
  }
};

let currentLanguage = getStoredLanguage() || "en";
if (!translations[currentLanguage]) currentLanguage = "en";

const t = (key) => translations[currentLanguage][key] || translations.en[key] || "";

const splitText = (element) => {
  const words = element.textContent.trim().split(/\s+/);
  element.textContent = "";

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.className = "word";
    span.style.setProperty("--i", index);
    span.textContent = `${word} `;
    element.append(span);
  });
};

const applyLanguage = (language) => {
  currentLanguage = translations[language] ? language : "en";
  storeLanguage(currentLanguage);

  document.documentElement.lang = currentLanguage;
  document.title = t("metaTitle");

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", t("metaDescription"));

  const metaMap = {
    'meta[property="og:title"]': t("metaTitle"),
    'meta[property="og:description"]': t("metaDescription"),
    'meta[name="twitter:title"]': t("metaTitle"),
    'meta[name="twitter:description"]': t("metaDescription"),
  };

  Object.entries(metaMap).forEach(([selector, content]) => {
    document.querySelector(selector)?.setAttribute("content", content);
  });

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", t(element.dataset.i18nAlt));
  });

  document.querySelectorAll("[data-split]").forEach(splitText);

  const submitButton = document.querySelector(".signup button");
  if (submitButton?.dataset.submitted === "true") {
    submitButton.textContent = t("subscribed");
  }

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langButton === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

applyLanguage(currentLanguage);

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

window.addEventListener("load", () => {
  window.setTimeout(() => loader.classList.add("is-hidden"), 420);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langButton);
  });
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelector(".signup").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.dataset.submitted = "true";
  button.textContent = t("subscribed");
  event.currentTarget.reset();
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-42% 0px -48% 0px" }
);

sections.forEach((section) => activeObserver.observe(section));

window.addEventListener(
  "scroll",
  () => {
    const shift = Math.min(window.scrollY * 0.12, 70);
    heroContent.style.setProperty("--hero-shift", `${shift}px`);
    heroImage.style.setProperty("--hero-y", `${window.scrollY * 0.04}px`);
  },
  { passive: true }
);
