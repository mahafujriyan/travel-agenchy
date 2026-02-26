export default function sitemap() {
  const base = "https://ventures-travel.vercel.app";
  const routes = [
    "",
    "/destinations",
    "/packages",
    "/about",
    "/services",
    "/testimonials",
    "/blog",
    "/contact",
    "/book-now",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
