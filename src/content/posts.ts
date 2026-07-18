// ——— Journal CMS ——————————————————————————————————————————
// Blog posts surfaced on the homepage. Links go to the live articles.

export type Post = {
  title: string;
  category: string;
  date: string;
  url: string;
  img?: string;
  excerpt?: string;
};

export const POSTS: Post[] = [
  {
    title: "10 Principles of Good Web Design",
    category: "Web design",
    date: "2025",
    url: "https://www.ashbi.ca/10-principles-of-good-web-design/",
    img: "/images/blog-web-design.webp",
    excerpt:
      "What separates a website that converts from one that just exists — ten principles we apply to every build.",
  },
  {
    title: "Brand Designer: What Is It? and How to Become One?",
    category: "Branding",
    date: "2025",
    url: "https://www.ashbi.ca/brand-designer-what-is-it-and-how-to-become-one/",
  },
  {
    title: "Mastering Illustration Styles in Graphic Design: A Comprehensive Guide",
    category: "Design craft",
    date: "2024",
    url: "https://www.ashbi.ca/mastering-illustration-styles-in-graphic-design-a-comprehensive-guide/",
  },
  {
    title: "From Novice to Pro: How to Start a Thriving Graphic Design Business",
    category: "Studio life",
    date: "2024",
    url: "https://www.ashbi.ca/starting-a-graphic-design-business/",
  },
  {
    title: "How to Close Graphic Design Sales Calls: Tips and Strategies",
    category: "Studio life",
    date: "2024",
    url: "https://www.ashbi.ca/closing-graphic-design-sales-calls-tips-strategies/",
  },
];
