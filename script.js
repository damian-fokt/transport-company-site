// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch('https://formsubmit.co/your-email@example.com', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert('Message sent successfully!');
        this.reset();
      } else {
        alert('Failed to send message. Please try again later.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
});

// Language Translations
const translations = {
  en: {
    "about-link": "About Us",
    "services-link": "Services",
    "fleet-link": "Fleet",
    "contact-link": "Contact",
    "cta-btn": "Get a Quote",
    "hero-title": "Professional Heavy-Duty Transport",
    "hero-desc": "Fast, reliable, and secure transport services across Poland and Europe.",
    "cta-learn-more": "Learn More",
    "about-title": "About Us",
    "about-desc": "Olbi-Trans specializes in heavy-duty transport and logistics within Poland and Europe...",
    "about-benefit-1": "Punctual and reliable deliveries",
    "about-benefit-2": "Modern and well-maintained fleet",
    "about-benefit-3": "Extensive international experience",
    "services-title": "Our Services",
    "service-1-title": "Domestic Transport",
    "service-1-desc": "Efficient and cost-effective transport services within Poland.",
    "service-2-title": "International Logistics",
    "service-2-desc": "Seamless and reliable freight transport across European borders.",
    "service-3-title": "Specialized Transport",
    "service-3-desc": "Handling oversized, fragile, or specialized goods with care.",
    "fleet-title": "Our Fleet",
    "fleet-desc": "Our fleet features state-of-the-art trucks designed for all types of freight...",
    "contact-title": "Contact Us",
    "contact-desc": "Have questions or need a quote? Get in touch with us today!",
    "form-name": "Your Name",
    "form-email": "Your Email",
    "form-phone": "Your Phone Number",
    "form-message": "Your Message",
    "form-submit": "Send Message",
    "footer-text": "© 2024 Olbi-Trans. All rights reserved."
  },
  pl: {
    "about-link": "O nas",
    "services-link": "Usługi",
    "fleet-link": "Flota",
    "contact-link": "Kontakt",
    "cta-btn": "Uzyskaj wycenę",
    "hero-title": "Profesjonalny transport ciężki",
    "hero-desc": "Szybkie, niezawodne i bezpieczne usługi transportowe w Polsce i Europie.",
    "cta-learn-more": "Dowiedz się więcej",
    "about-title": "O nas",
    "about-desc": "Olbi-Trans specjalizuje się w ciężkim transporcie i logistyce w Polsce i Europie...",
    "about-benefit-1": "Punktualne i niezawodne dostawy",
    "about-benefit-2": "Nowoczesna i dobrze utrzymana flota",
    "about-benefit-3": "Bogate doświadczenie międzynarodowe",
    "services-title": "Nasze usługi",
    "service-1-title": "Transport krajowy",
    "service-1-desc": "Efektywne i opłacalne usługi transportowe w Polsce.",
    "service-2-title": "Logistyka międzynarodowa",
    "service-2-desc": "Bezproblemowy i niezawodny transport towarów przez granice Europy.",
    "service-3-title": "Transport specjalistyczny",
    "service-3-desc": "Obsługa ładunków ponadgabarytowych, delikatnych lub specjalistycznych z troską.",
    "fleet-title": "Nasza flota",
    "fleet-desc": "Nasza flota składa się z nowoczesnych ciężarówek przystosowanych do wszelkiego rodzaju ładunków...",
    "contact-title": "Skontaktuj się z nami",
    "contact-desc": "Masz pytania lub potrzebujesz wyceny? Skontaktuj się z nami już dziś!",
    "form-name": "Twoje imię",
    "form-email": "Twój e-mail",
    "form-phone": "Twój numer telefonu",
    "form-message": "Twoja wiadomość",
    "form-submit": "Wyślij wiadomość",
    "footer-text": "© 2024 Olbi-Trans. Wszelkie prawa zastrzeżone."
  }
};

// Function to Switch Language
const switchLanguage = (lang) => {
  document.querySelectorAll('[data-key]').forEach((el) => {
    el.textContent = translations[lang][el.dataset.key];
  });

  document.querySelector("input[name='name']").placeholder = translations[lang]['form-name'];
  document.querySelector("input[name='email']").placeholder = translations[lang]['form-email'];
  document.querySelector("input[name='phone']").placeholder = translations[lang]['form-phone'];
  document.querySelector("textarea[name='message']").placeholder = translations[lang]['form-message'];

  // Update the language toggle button text
  const toggleButton = document.getElementById('language-toggle');
  toggleButton.textContent = lang === 'en' ? 'Polski' : 'English';
};

// Language Toggle Button Logic
document.getElementById('language-toggle').addEventListener('click', () => {
  const currentLang = document.documentElement.lang === 'en' ? 'pl' : 'en';
  document.documentElement.lang = currentLang;
  switchLanguage(currentLang);
});

// Set Default Language to Polish
switchLanguage('pl');

// Set Default Language to Polish
switchLanguage('pl');

document.addEventListener('DOMContentLoaded', () => {
  let sections = document.querySelectorAll('section');
  let currentIndex = 0;
  let isScrolling = false;

  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    }


  }



  window.addEventListener('wheel', (event) => {
    if (isScrolling) return; // Zapobieganie szybkiemu przewijaniu

    isScrolling = true;
    setTimeout(() => { isScrolling = false; }, 250); // Debounce scroll

    if (event.deltaY > 0) {
      // Przewijanie w dół
      currentIndex = Math.min(currentIndex + 1, sections.length - 1);
    } else {
      // Przewijanie w górę
      currentIndex = Math.max(currentIndex - 1, 0);
    }

    scrollToSection(currentIndex);
  });
});