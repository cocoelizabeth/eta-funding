// import '@fontsource/poppins/500.css';
// import '@fontsource/poppins/700.css';
// import '@fontsource/poppins/600.css';
// import '@fontsource/inter/500.css';
import React from 'react';
import Layout from './src/components/Layout';



export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const onClientEntry = () => {
  // Only in development — production uses the plugin injection.
  if (process.env.NODE_ENV === "production") return;

  const GA_ID = process.env.GA_MEASUREMENT_ID; // value is inlined at build time
  if (!GA_ID) return;

  // Avoid double-injection
  if (document.querySelector(`script[src*="gtag/js?id=${GA_ID}"]`)) return;

  // Load the gtag library
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  // Init gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { debug_mode: true });

  // Optional: log a test event so DebugView lights up
  window.gtag("event", "debug_test_event", { debug_mode: true });
};









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

