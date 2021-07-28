import { css } from "styled-components";

const sizes = {
  mamabear: 768,
  papabear: 1440,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}; /* stylelint-disable-line value-keyword-case */
    }
  `;
  return acc;
}, {});
