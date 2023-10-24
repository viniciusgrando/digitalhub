import NextApp from 'next/app';

import localFont from 'next/font/local';

import { SiteContext, useSiteContext } from 'hooks/use-site';
import { SearchProvider } from 'hooks/use-search';

import { getSiteMetadata } from 'lib/site';
import { getRecentPosts } from 'lib/posts';
import { getCategories } from 'lib/categories';
import NextNProgress from 'nextjs-progressbar';
import { getAllMenus } from 'lib/menus';

import 'styles/global.css';
import 'styles/globals.scss';
import 'styles/wordpress.scss';

const neuzeit = localFont({
  src: [
    {
      path: '../fonts/NeuzeitGro-Lig.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/NeuzeitGro-Reg.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/NeuzeitGro-Bol.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

function App({ Component, pageProps = {}, metadata, recentPosts, categories, menus }) {
  const site = useSiteContext({
    metadata,
    recentPosts,
    categories,
    menus,
  });

  return (
    <div className={neuzeit.className}>
      <SiteContext.Provider value={site}>
        <SearchProvider>
          <NextNProgress height={1} color={'var(--progress-bar-color)'} />
          <Component {...pageProps} />
        </SearchProvider>
      </SiteContext.Provider>
    </div>
  );
}

App.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);

  const { posts: recentPosts } = await getRecentPosts({
    count: 5,
    queryIncludes: 'index',
  });

  const { categories } = await getCategories({
    count: 5,
  });

  const { menus = [] } = await getAllMenus();

  return {
    ...appProps,
    metadata: await getSiteMetadata(),
    recentPosts,
    categories,
    menus,
  };
};

export default App;
