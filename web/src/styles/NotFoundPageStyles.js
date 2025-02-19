import styled from 'styled-components';

export const NotFoundPageStyles = styled.div`
  text-align: center;
  .title {
    font-size: 5rem;
  }
  .link {
    color: var(--raocom-light);
      text-decoration: var(--link-text-decoration);
      text-underline-offset: var(--link-underline-offset);
    :hover {
      color: var(--racoma-dark);
    }
  }
`;
