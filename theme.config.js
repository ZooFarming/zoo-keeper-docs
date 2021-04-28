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
      <meta name="description" content="ZooKeeper delivers a new and exciting dual farming experience, enabling the user to enjoy higher crypto rewards while making use of NFTs" />
      <meta name="og:description" content="ZooKeeper delivers a new and exciting dual farming experience, enabling the user to enjoy higher crypto rewards while making use of NFTs" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="meta.png" />
      <meta name="twitter:site:domain" content="zookeeper.finance" />
      <meta name="twitter:url" content="https://twitter.com/ZooFarming" />
      <meta name="og:title" content="ZooKeeper: Documentation" />
      <meta name="og:image" content="meta.png" />
      <meta name="apple-mobile-web-app-title" content="ZooKeeper Docs" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon_big.png"/>
      
      <link rel="icon" type="image/png" href="/favicon.png"/>
      <meta name="msapplication-TileImage" content="/favicon_big.png"/>
	
    </>
  ),
  i18n: [
	  { locale: 'en', text: 'English' },
	  { locale: 'zh', text: '中文' },
	  { locale: 'fr', text: 'Français' },
	  { locale: 'tr', text: 'Türkçe' },
	],
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: false,
  footerText: <>{new Date().getFullYear()} © ZooKeeper Crew</>
}
