// studio/deskStructure.js
const deskStructure = (S /*, context */) =>
  S.list()
    .title('Content')
    .items([
      // Pages folder
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.documentTypeListItem('home').title('Home'),
              S.documentTypeListItem('whatWeLookFor').title('What We Look For'),
              S.documentTypeListItem('investmentStrategy').title('Investment Strategy'),
              S.documentTypeListItem('whoWeAre').title('Who We Are'),
            ])
        ),

      // Blog folder
      S.listItem()
        .title('Blog Posts')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.documentTypeListItem('blog').title('Blog Posts'),
              S.documentTypeListItem('author').title('Authors'),
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('featured').title('Featured'),
            ])
        ),
    ])

export default deskStructure
