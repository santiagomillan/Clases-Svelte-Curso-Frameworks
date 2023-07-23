import { css } from "@emotion/css";

export const form = css`
  background: var(--bg);
  color: var(--color2);
  border: 1px solid var(--color);
  margin: 0px 50px 25px;
  padding: 10px 25px 25px;
  transform: scale(1);
  transition: 0.3s transform;

  &:hover {
    transform: scale(1.2);
  }
`;

export const button = css`
  background: var(--color);
  border: 1px solid transparent;
  padding: 5px 10px;
  cursor: pointer;
  transform: 0.15s border-color;

  &:hover {
    border-color: var(--color2);
  }

  &[disabled] {
    opacity: 0.5;
  }
`;

export const title = css`
  border-bottom: 1px solid var(--color2);
  padding: 10px;
`;
