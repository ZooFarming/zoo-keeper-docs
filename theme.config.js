export default {
  repository: 'https://github.com/ZooFarming/zoo-keeper-docs',
  titleSuffix: ' – ZooKeeper Docs',
  logo: (
    <>
      <img src="/zoo32x32.png"/>
      <span style={{fontSize:22}} className="mr-2 ml-2 font-extrabold hidden md:inline">ZOOKEEPER</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        DOCUMENTS
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Nextra: the next site builder" />
      <meta name="og:description" content="Nextra: the next site builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      
      <link rel="icon" type="image/png" href="/favicon.png"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
	
    </>
  ),
  i18n: [
	  { locale: 'en', text: 'English' },
	  //{ locale: 'zh', text: '中文' },
	  //{ locale: 'fr', text: 'Français' },
	],
  search: true,
  prevLinks: false,
  nextLinks: false,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>{new Date().getFullYear()} © ZooKeeper.</>
}
