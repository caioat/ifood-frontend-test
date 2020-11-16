import styled from 'styled-components';
import { Colors, GraphicElements } from '../../../StyleGuide';

export const HeaderStyle = styled.div`
  height: 64px;
  background-color: ${Colors.Neutral.PureWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-app-region: drag;
  ${GraphicElements.Shadow.Strong}
`;
