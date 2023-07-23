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
