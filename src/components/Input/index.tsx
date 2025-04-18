import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native'

import { Container } from "./style";

export function Input({...rest}: TextInputProps) {
    const { COLORS } = useTheme();

    return (
        <Container 
            placeholderTextColor={COLORS.GRAY_700}
            {...rest}
        />
    );
}