import 'styled-components/native';
import type { DefaultTheme } from 'styled-components/native';
import type theme from '../theme';

declare module 'styled-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType {}
}
