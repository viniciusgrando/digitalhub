import NextApp from 'next/app';

import { Inter } from 'next/font/google';

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

export const inter = Inter({
  weight: ['400', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

function App({ Component, pageProps = {}, metadata, recentPosts, categories, menus }) {
  const site = useSiteContext({
    metadata,
    recentPosts,
    categories,
    menus,
  });

  return (
    <div className={inter.className}>
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
