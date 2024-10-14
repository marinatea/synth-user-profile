export const tablet = (styles: string) => `
  @media (min-width: 427px) {
    ${styles}
  }
`;

export const desktop = (styles: string) => `
  @media (min-width: 1025px) {
    ${styles}
  }
`;
