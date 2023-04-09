export default [
    { UserAgent: '*' },
    { BlankLine: true },
    { Sitemap: (req: any) => `https://${req.headers.host}/sitemap.xml` }
]