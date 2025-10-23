// import '@fontsource/poppins/500.css';
// import '@fontsource/poppins/700.css';
// import '@fontsource/poppins/600.css';
// import '@fontsource/inter/500.css';
import React from 'react';
import Layout from './src/components/Layout';



export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname);
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null);
// };



// export const shouldUpdateScroll = ({

//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//  
//    window.scrollTo(0, 0);
//   const { pathname } = location
//   // list of routes for the scroll-to-top-hook
//   const scrollToTopRoutes = [`/`, `/what-we-look-for/`, `/who-we-are/`, `/why-us/`, `/our-prcess/`, `/contact/`, `/404/`]
//   // if the new route is part of the list above, scroll to top (0, 0)
//   if (scrollToTopRoutes.indexOf(pathname) !== -1) {
//     window.scrollTo(0, 0)
//   }
//   window.scrollTo(0, 0);

//   return false
// }

