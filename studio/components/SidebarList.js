import {structureTool} from 'sanity/structure'
import { MdStar, MdHome, MdPerson, MdTimeline, MdChildCare } from 'react-icons/md';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { GrSearch } from 'react-icons/gr';
import { definePlugin } from 'sanity';

export const SidebarList = definePlugin({
  name: 'custom-sidebar',
  tools: (prev) => [
    ...prev,
    structureTool({
      structure: (S) =>
        S.list()
          .title('Pages')
          .items([
            S.listItem()
              .title('Home')
              .id('home')
              .icon(MdHome)
              .child(S.document().schemaType('home').documentId('home')),

            S.listItem()
              .title('What We Look For')
              .id('whatWeLookFor')
              .icon(GrSearch)
              .child(S.document().schemaType('whatWeLookFor').documentId('whatWeLookFor')),

            S.listItem()
              .title('Child Care')
              .id('childCare')
              .icon(MdChildCare)
              .child(S.document().schemaType('childCare').documentId('childCare')),

            S.listItem()
              .title('Investment Strategy')
              .id('investmentStrategy')
              .icon(BsFillQuestionCircleFill)
              .child(S.document().schemaType('investmentStrategy').documentId('investmentStrategy')),

            S.listItem()
              .title('Who We Are')
              .id('whoWeAre')
              .icon(MdPerson)
              .child(S.document().schemaType('whoWeAre').documentId('whoWeAre')),

            S.listItem()
              .title('Our Process')
              .id('ourProcess')
              .icon(MdTimeline)
              .child(S.document().schemaType('ourProcess').documentId('ourProcess')),

            S.listItem()
              .title('Blog')
              .child(
                S.list()
                  .title('Blog Documents')
                  .items([
                    S.listItem()
                      .title('Featured')
                      .id('featuredItems')
                      .icon(MdStar)
                      .child(S.document().schemaType('featured').documentId('featuredItems')),

                    S.documentTypeListItem('blog').title('All Blog Posts'),
                    S.documentTypeListItem('author').title('Authors'),
                    S.documentTypeListItem('category').title('Categories'),
                  ])
              ),
          ]),
    }),
  ],
});

