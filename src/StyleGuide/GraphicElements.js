import { css } from 'styled-components';
import { Colors } from './Colors';

const opacityConstants = css`
  background: ${Colors.PureWhite};
  mix-blend-mode: normal;
`;

export const GraphicElements = {
  Opacity: {
    Few: css`
      ${opacityConstants}
      opacity: 0.25;
    `,
    Medium: css`
      ${opacityConstants}
      opacity: 0.50;
    `,
    High: css`
      ${opacityConstants}
      opacity: 0.75;
    `,
    Full: css`
      ${opacityConstants}
    `,
  },
  Shadow: {
    None: css``,
    VeryWeak: css`
      box-shadow: 1px 1px 2px ${Colors.Shadows.PureBlack};
    `,
    Weak: css`
      box-shadow: 2px 2px 2px ${Colors.Shadows.PureBlack};
    `,
    Medium: css`
      box-shadow: 2px 2px 4px ${Colors.Shadows.PureBlack};
    `,
    Strong: css`
      box-shadow: 2px 2px 8px ${Colors.Shadows.PureBlack};
    `,
    VeryStrong: css`
      box-shadow: 2px 2px 16px ${Colors.Shadows.PureBlack};
    `,
  },
  BorderRadius: {
    None: css``,
    Small: css`
      border-radius: 4px;
    `,
    Medium: css`
      border-radius: 8px;
    `,
    Large: css`
      border-radius: 16px;
    `,
    XLarge: css`
      border-radius: 32px;
    `,
    Full: css`
      border-radius: 50%;
    `,
  },
  BorderWidthStyle: {
    None: css``,
    SolidSmall: css`
      border: 1px solid;
    `,
    SolidMedium: css`
      border: 2px solid;
    `,
    SolidLarge: css`
      border: 4px solid;
    `,
    DashedSmall: css`
      border: 1px dashed;
    `,
    DashedMedium: css`
      border: 2px dashed;
    `,
    DashedLarge: css`
      border: 4px dashed;
    `,
  },
};
