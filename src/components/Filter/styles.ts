import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
    isActive?: boolean;
}

export const Container = styled(TouchableOpacity) <FilterStyleProps>`
    ${({ theme, isActive }) => css`
        border: 2px solid ${theme.COLORS.GREEN_700}
    `}

    border-radius: 6px;
    margin-right: 12px;

    height:38px;
    widows: 70px;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    text-transform: uppercase;
        ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE};
    `}
`;
