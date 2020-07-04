let ogprefix = 'og: http://ogp.me/ns#'
let title = 'Bar Casa Aquilino'
let description = 'Bar Casa Aquilino - Comida casera, tapas, raciones, platos combinados y vinos tradicionales en A Guarda, Pontevedra - 986 62 72 64'
let color = '#ffa31a'

module.exports = {
  title: 'Casa Aquilino',
  description: 'Cocina casera y vinos tradicionales',
  themeConfig: {
    logo: '/img/logo.png',
    docsDir: 'src',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Carta', link: '/carta/' },
      { text: 'Contacto', link: '/contacto/' }
    ],
    smoothScroll: true,
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    [
      '@vuepress/google-analytics',
      {
        'ga': ''
        // UA-00000000-0
      }
    ],
    [
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        // type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ],
    [
      'robots',
      {
        /**
         * @host
         * Mandatory, You have to provide the host URL
         */
        host: 'https://casaaquilino.netlify.com/',
        /**
         * @disallowAll
         * Optional: if it's true, all others options are ignored and exclude all robots from the entire server
         */
        disallowAll: false,
        /**
         * @allowAll
         * Optional: if it's true and @disallowAll is false, all others options are ignored and allow all robots complete access
         */
        allowAll: true,
        /**
         * @sitemap
         * Optional, by default: sitemap.xml
         */
        sitemap: '/sitemap.xml',
        /**
         * @policies
         * Optional, by default: null
         */
        policies: [
          {
            userAgent: '*',
            disallow: [],
            allow: ['/']
          }
        ]
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://casaaquilino.netlify.app/'
      },
    ]
  ],
  head: [
    // ['link', {rel: 'icon', href: `/img/logos/favicon.png`}],
    ['meta', { name: 'theme-color', content: color }],
    ['meta', { prefix: ogprefix, property: 'og:locale', content: 'es_ES' }],
    ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:type', content: 'website' }],
    ['meta', { prefix: ogprefix, property: 'og:url', content: 'https://casaaquilino.es' }],
    ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
    ['meta', {
      prefix: ogprefix,
      property: 'og:image',
      content: 'https://casaaquilino.es/img/og-image.jpg'
    }]
  ],
}
