import styled from 'styled-components';
import { Colors, Fonts, GraphicElements } from '../../../StyleGuide';
import { Autocomplete } from '@material-ui/lab';

export const FilterSidebarStyle = styled.div`
  background-color: ${Colors.Neutral.PureBlack};
  height: 100%;
  width: 234px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
`;

export const NavbarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 95px);
`;

export const FilterSidebarAutocomplete = styled(Autocomplete)`
  width: 200px
`;

// const CenteredDataDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const NavbarAppIcon = styled(CenteredDataDiv)`
//   ${Fonts.Titles.H6}
//   color: ${Colors.Neutral.PureWhite};
//   height: 48px;
//   margin-bottom: 70px;
// `;

// export const LineSelected = styled.div`
//   position: absolute;
//   right: 0;
//   height: 100%;
//   width: 4px;
//   ${GraphicElements.BorderRadius.Small}
// `;

// export const NavbarItemDiv = styled(CenteredDataDiv)`
//   position: relative;
//   height: 48px;
//   cursor: pointer;

//   ${LineSelected} {
//     ${({ isSelected }) => isSelected && `background-color: ${Colors.Neutral.PureWhite}`};
//   }

//   &:hover {
//     /* TODO
//     * Change this color according to design
//     */
//     background-color: ${Colors.HoverNavbarButtons};
//   }
// `;
