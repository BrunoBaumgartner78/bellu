/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bellu.ch', // deine Domain
  generateRobotsTxt: true,     // auch /robots.txt automatisch erzeugen
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
};
