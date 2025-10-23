// module.exports = {
//   projectId: process.env.GATSBY_SANITY_PROJECT_ID,
//   dataset: process.env.GATSBY_SANITY_DATASET,
// };
const isProd = process.env.NODE_ENV === 'production';


module.exports = {
  projectId: "mg87ynjf",
  dataset: "production",
  watchMode: !isProd,
  overlayDrafts: !isProd,
};