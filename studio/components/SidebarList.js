import { MdStar, MdHome, MdPerson, MdTimeline, MdChildCare } from 'react-icons/md';
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { GrSearch } from 'react-icons/gr';
import S from '@sanity/desk-tool/structure-builder';

// create a separate folder for blog, don't include featured in blog folder because we want it to be structured differently
const blogFolderNames = ['blog', 'author', 'category'];
const blogFolder = (listItem) => blogFolderNames.includes(listItem.getId());
const hiddenDocTypeNames = ['blog', 'author', 'category', 'featured'];
const hiddenDocTypes = (listItem) =>
  !hiddenDocTypeNames.includes(listItem.getId());

// const formatPage = ()

// function SidebarList() {
//   return S.list()
//     .title('Pages')
//     .items([
//       S.listItem()
//         .title('Featured')
//         .id('featuredItems')
//         .icon(MdStar)
//         .child(S.editor().schemaType('featured').documentId('featuredItems')),
//       ...S.documentTypeListItems().filter(
//         (item) => item.getId() !== 'featured'
//       ),
//     ]);
// }

function SidebarList() {
  return S.list()
    .title('Pages')
    .items([
      // ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.listItem()
        .title('Home')
        .id('home')
        .icon(MdHome)
        .child(S.editor().schemaType('home').documentId('home')),
      S.listItem()
        .title('What We Look For')
        .id('whatWeLookFor')
        .icon(GrSearch)
        .child(
          S.editor().schemaType('whatWeLookFor').documentId('whatWeLookFor')
        ),
      S.listItem()
        .title('Child Care')
        .id('childCare')
        .icon(MdChildCare)
        .child(
          S.editor().schemaType('childCare').documentId('childCare')
      ),
      S.listItem()
        .title('Why Us')
        .id('whyUs')
        .icon(BsFillQuestionCircleFill)
        .child(
          S.editor().schemaType('whyUs').documentId('whyUs')
        ),
      S.listItem()
          .title('Who We Are')
          .id('whoWeAre')
          .icon(MdPerson)
          .child(
            S.editor().schemaType('whoWeAre').documentId('whoWeAre')
          ),
        S.listItem()
           .title('Our Process')
           .id('ourProcess')
           .icon(MdTimeline)
           .child(
            S.editor().schemaType('ourProcess').documentId('ourProcess')
           ),
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
                .child(
                  S.editor().schemaType('featured').documentId('featuredItems')
                ),
              ...S.documentTypeListItems().filter(blogFolder),
            ])
        ),
    ]);
}

export default SidebarList;
