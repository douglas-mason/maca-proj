import { css } from "@emotion/css";

export const cardStyles = css({
  backgroundColor: "#232524",
  minWidth: 350,
  width: 600,
  padding: 24,
  borderRadius: 15,
  "@media (max-width: 700px)": {
    width: 250,
  },
});
