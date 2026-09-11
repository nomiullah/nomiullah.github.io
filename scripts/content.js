/* Swap placeholder content here — no build step required. */
window.SITE = {
  whatsapp: 'https://wa.me/923450571037?text=Hi%20Noman%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk.',
  resume: 'resume/noman-ullah-full-stack.pdf',
  avatar: 'img/avatar-hero.webp',
  walkthrough: 'video/walkthrough-v4.mp4',
  walkthroughFull: 'video/walkthrough-v4.mp4',
  walkthroughPoster: 'img/posters/walkthrough.jpg',
  formTo: 'nomi.spyko@gmail.com',
  formEndpoint: 'https://script.google.com/macros/s/AKfycbyqJQ3803DGM3P1eITV40Bh_J7UXDpRbRRnlbTLX8kRd9V5J6W_1rcePRxkzPFWyT5dig/exec',
  year: new Date().getFullYear(),

  featured: [
    {
      name: 'Web Development',
      role: 'Core service',
      icon: 'web',
      blurb: 'Custom sites, landing pages, and product UI — built to load fast and stay easy to use.',
    },
    {
      name: 'Shopify',
      role: 'Commerce service',
      icon: 'shopify',
      blurb: 'Themes, storefront UX, and checkout flows for brands that need a shop that converts.',
    },
    {
      name: 'WordPress',
      role: 'Publishing service',
      icon: 'wordpress',
      blurb: 'Elementor and custom WP builds that editors can update without breaking the design.',
    },
  ],

  skillGroups: [
    {
      title: 'Frontend',
      tab: 'Frontend',
      sections: [
        {
          label: 'Core',
          items: [
            { name: 'HTML5', icon: 'html' },
            { name: 'CSS3', icon: 'css' },
            { name: 'JavaScript', icon: 'javascript' },
            { name: 'TypeScript', icon: 'typescript' },
          ],
        },
        {
          label: 'CSS / UI',
          items: [
            { name: 'Tailwind CSS', icon: 'tailwind' },
            { name: 'Bootstrap', icon: 'bootstrap' },
            { name: 'Sass / SCSS', icon: 'sass' },
            { name: 'Material UI', icon: 'mui' },
          ],
        },
        {
          label: 'JavaScript / Frameworks',
          items: [
            { name: 'React', icon: 'react' },
            { name: 'Next.js', icon: 'nextjs' },
            { name: 'Vue.js', icon: 'vue' },
            { name: 'Angular', icon: 'angular' },
            { name: 'Svelte', icon: 'svelte' },
          ],
        },
        {
          label: 'Animation & Interaction',
          items: [
            { name: 'GSAP', icon: 'gsap' },
            { name: 'Framer Motion', icon: 'framermotion' },
            { name: 'Three.js', icon: 'threejs' },
          ],
        },
        {
          label: 'Data & APIs',
          items: [
            { name: 'REST APIs', icon: 'rest' },
            { name: 'GraphQL', icon: 'graphql' },
            { name: 'Axios', icon: 'axios' },
          ],
        },
        {
          label: 'State Management',
          items: [
            { name: 'Redux', icon: 'redux' },
            { name: 'React Context', icon: 'context' },
          ],
        },
      ],
    },
    {
      title: 'Development Tools',
      tab: 'Tools',
      sections: [
        {
          items: [
            { name: 'Git', icon: 'git' },
            { name: 'GitHub', icon: 'github' },
            { name: 'Vite', icon: 'vite' },
            { name: 'npm', icon: 'npm' },
            { name: 'ESLint', icon: 'eslint' },
            { name: 'Prettier', icon: 'prettier' },
          ],
        },
      ],
    },
    {
      title: 'Shopify',
      tab: 'Shopify',
      sections: [
        {
          items: [
            { name: 'Shopify', icon: 'shopify' },
            { name: 'Liquid', icon: 'liquid' },
            { name: 'Shopify Themes', icon: 'themes' },
            { name: 'Shopify CLI', icon: 'shopifycli' },
            { name: 'Shopify Functions', icon: 'functions' },
            { name: 'Shopify APIs', icon: 'shopifyapi' },
            { name: 'GraphQL', icon: 'graphql' },
            { name: 'Theme Customization', icon: 'themecustom' },
            { name: 'Responsive Design', icon: 'responsive' },
          ],
        },
      ],
    },
    {
      title: 'Backend',
      tab: 'Backend',
      sections: [
        {
          items: [
            { name: 'Node.js', icon: 'node' },
            { name: 'Express.js', icon: 'express' },
            { name: 'REST APIs', icon: 'rest' },
            { name: 'PostgreSQL', icon: 'postgres' },
            { name: 'MongoDB', icon: 'mongodb' },
            { name: 'Firebase', icon: 'firebase' },
          ],
        },
      ],
    },
  ],

  // Project images use matching .webp + .jpg files in img/projects/.
  projects: [
    { name: 'Johnsons Seeds', niche: 'Garden & plants', stack: 'Shopify', tags: ['shopify'], description: 'Heritage UK seed and plant storefront with seasonal merchandising and a clean checkout path.', url: 'https://johnsons-seeds.com/', image: 'img/projects/johnsons.jpg' },
    { name: 'WalG London', niche: 'Occasionwear', stack: 'Shopify', tags: ['shopify'], description: 'London fashion boutique for jumpsuits and occasion dresses with EU shipping and size-led shopping.', url: 'https://walglondon.com/', image: 'img/projects/walg.jpg' },
    { name: 'Closer Pets', niche: 'Pet products', stack: 'Shopify', tags: ['shopify'], description: 'Pet-tech shop for feeders, flaps, and accessories with a dense catalog and review-led trust.', url: 'https://closerpets.co.uk/', image: 'img/projects/closerpets.jpg' },
    { name: 'Nadine Merabi', niche: 'Luxury fashion', stack: 'Shopify', tags: ['shopify'], description: 'Luxury womenswear storefront for dresses, jumpsuits, and bridal with a high-end editorial feel.', url: 'https://www.nadinemerabi.com/', image: 'img/projects/nadine.jpg' },
    { name: 'Rübenretter', niche: 'Food subscription', stack: 'Shopify', tags: ['shopify'], description: 'German produce-rescue subscription that delivers imperfect fruit and veg on a flexible cadence.', url: 'https://ruebenretter.de/', image: 'img/projects/ruebenretter.jpg' },
    { name: 'Moodprints', niche: 'Wall art', stack: 'Shopify', tags: ['shopify'], description: 'Dutch wall-art shop (Kirro / Moodprints) for posters and canvas with material and size pickers.', url: 'https://moodprints.nl/', image: 'img/projects/moodprints.jpg' },
    { name: 'By Risqué', niche: 'Streetwear', stack: 'Shopify', tags: ['shopify'], description: 'Amsterdam streetwear brand with limited drops, jerseys, and a bold culture-led storefront.', url: 'https://byrisque.com/', image: 'img/projects/byrisque.jpg' },
    { name: 'ICON Amsterdam', niche: 'Menswear', stack: 'Shopify', tags: ['shopify'], description: 'Performance menswear store with tailored fits, worldwide shipping, and athlete-led storytelling.', url: 'https://icon-amsterdam.com/', image: 'img/projects/icon.jpg' },
    { name: 'Amlore', niche: 'Apparel', stack: 'Shopify', tags: ['shopify'], description: 'European apparel store for knitwear, sets, and accessories with a seasonal lookbook layout.', url: 'https://amlore.com/', image: 'img/projects/amlore.jpg' },
    { name: 'Fothergill\'s', niche: 'Garden & plants', stack: 'Shopify', tags: ['shopify'], description: 'Gardening storefront for seeds, plants, and autumn bulbs — sibling catalog to Johnsons.', url: 'https://mr-fothergills.co.uk/', image: 'img/projects/fothergills.jpg' },
    { name: 'Attuned', niche: 'Wellness', stack: 'Shopify', tags: ['shopify'], description: 'Personalized health scans and kits (ruti.life → attuned.health) with a data-led product story.', url: 'https://attuned.health/', image: 'img/projects/attuned.jpg' },
    { name: 'puroBIO Cosmetics', niche: 'Beauty', stack: 'WordPress · Elementor', tags: ['wordpress'], description: 'Italian organic makeup brand site with collection storytelling and a fast content layout.', url: 'https://purobiocosmetics.com/', image: 'img/projects/purobio.jpg' },
    { name: 'Gateway Fleets', niche: 'EV / logistics', stack: 'WordPress · Elementor', tags: ['wordpress'], description: 'Fleet electrification company site — vehicles, charging, and infrastructure as one offer.', url: 'https://gatewayfleets.com/', image: 'img/projects/gateway.jpg' },
    { name: 'BKZ Financial', niche: 'Finance', stack: 'WordPress · Elementor', tags: ['wordpress'], description: 'Bookkeeping and advisory site with clear service blocks and a calm professional tone.', url: 'https://bkzfinancialservices.com/', image: 'img/projects/bkz.jpg' },
    { name: 'Fiori', niche: 'Florals', stack: 'WordPress', tags: ['wordpress'], description: 'Armenia flower delivery shop with same-day orders, collections, and location pages.', url: 'https://fiori.am/', image: 'img/projects/fiori.jpg' },
    { name: 'Molly J.', niche: 'Wellness', stack: 'WordPress', tags: ['wordpress'], description: 'CBD gumdrop brand site focused on calm, ritual, and a simple product path.', url: 'https://mollyj.life/', image: 'img/projects/mollyj.jpg' },
    { name: 'Atoms', niche: 'Footwear', stack: 'Custom frontend', tags: ['custom'], description: 'Everyday sneaker brand with a product-led custom storefront and comfort-first storytelling.', url: 'https://atoms.com/', image: 'img/projects/atoms.jpg' },
    { name: "Christina Wan's", niche: 'Restaurant', stack: 'Custom HTML/CSS', tags: ['custom'], description: 'Fort Lauderdale Chinese restaurant site — menus, locations, and a classic hospitality layout.', url: 'https://nomiullah.github.io/projects/christina/', image: 'img/projects/christina.jpg' },
    { name: 'Balletino', niche: 'Dance', stack: 'Custom HTML/CSS', tags: ['custom'], description: 'Dance-school style marketing site with a theatrical, campaign-ready visual system.', url: 'https://nomiullah.github.io/projects/balletino/', image: 'img/projects/balletino.jpg' },
    { name: 'Public House', niche: 'Hospitality', stack: 'Custom HTML/CSS', tags: ['custom'], description: 'Hospitality landing experience for a public-house brand with warm, editorial sections.', url: 'https://nomiullah.github.io/projects/public-house/', image: 'img/projects/publichouse.jpg' },
    { name: 'Recipe Basket', niche: 'Food', stack: 'Custom HTML/CSS', tags: ['custom'], description: 'Recipe and meal-inspiration layout built as a static, content-first browsing experience.', url: 'https://nomiullah.github.io/projects/recipe-basket/', image: 'img/projects/recipe.jpg' },
    { name: 'Paws Like Me', niche: 'Pets', stack: 'Custom HTML/CSS', tags: ['custom'], description: 'Pet-matching concept site with a friendly, conversion-minded multi-step interface.', url: 'https://nomiullah.github.io/projects/paws-like-me/', image: 'img/projects/paws.jpg' },
    { name: 'Shoot Dot Edit', niche: 'Photography', stack: 'Custom HTML/CSS', tags: ['custom'], description: 'Photo-editing studio site with a dark, cinematic portfolio presentation.', url: 'https://nomiullah.github.io/projects/shoot-dot-edit/', image: 'img/projects/shoot.jpg' },
    { name: 'Rising Bytes', niche: 'Agency', stack: 'Custom HTML/CSS', tags: ['custom'], description: 'Digital agency brochure site with service blocks and a clean studio identity.', url: 'https://nomiullah.github.io/projects/rising-bytes/', image: 'img/projects/rising.jpg' },
    { name: 'Sleek Biz', niche: 'Business', stack: 'Custom HTML/CSS', tags: ['custom'], description: 'Corporate-style business template with a polished, conversion-ready homepage.', url: 'https://nomiullah.github.io/projects/sleek-biz/', image: 'img/projects/sleek.jpg' },
  ],

  testimonials: [
    {
      name: 'Michael',
      title: 'Client testimonial',
      quote: 'From start to finish he was professional — efficient and incredibly knowledgeable.',
      src: 'video/nexe-sm.mp4',
      poster: 'img/posters/nexe.jpg',
    },
    {
      name: 'Irina',
      title: 'Client Review',
      quote: 'Noman Ullah delivers excellent, professional work with strong attention to detail. I highly recommend him.',
      src: 'video/dark-light.mp4',
      poster: 'img/posters/dark-light.jpg',
    },
    {
      name: 'Paul',
      title: 'Client review',
      quote: 'Very impressive, responds well — so easy working with this particular individual on Fiverr.',
      src: 'video/fiverr.mp4',
      poster: 'img/posters/fiverr.jpg',
    },
  ],

  certificates: [
    {
      name: 'JavaScript (Intermediate)',
      issuer: 'HackerRank',
      issued: 'Issued Sep 2023',
      detail: 'Verified skill · Design patterns, memory, concurrency, and the event loop',
      image: 'img/certificates/js-intermediate.png',
      url: 'https://www.hackerrank.com/certificates/564ea1a87bbe',
    },
    {
      name: 'CSS (Basic)',
      issuer: 'HackerRank',
      issued: 'Issued Sep 2023',
      detail: 'Verified skill · Cascade, inheritance, typography, layout, and the box model',
      image: 'img/certificates/css-basic.png',
      url: 'https://www.hackerrank.com/certificates/632e42aaab61',
    },
    {
      name: 'Claude Code 101',
      issuer: 'Anthropic Education',
      issued: 'Issued May 2026',
      detail: 'Certificate of completion · Anthropic Academy',
      image: 'img/certificates/claude-code-101.png',
      url: 'https://verify.skilljar.com/c/ehhtpkeztar3',
    },
    {
      name: 'Claude with Amazon Bedrock',
      issuer: 'Anthropic Education',
      issued: 'Issued Jun 2026',
      detail: 'Certificate of completion · Anthropic Academy',
      image: 'img/certificates/claude-bedrock.png',
      url: 'https://verify.skilljar.com/c/j37ep97usxhi',
    },
    {
      name: 'Claude 101',
      issuer: 'Anthropic Education',
      issued: 'Issued May 2026',
      detail: 'Certificate of completion · Anthropic Academy',
      image: 'img/certificates/claude-101.png',
      url: 'https://verify.skilljar.com/c/owekwpjbhjk4',
    },
  ],
};
