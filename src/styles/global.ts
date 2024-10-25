import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 .2rem ${({ theme }) => theme.COLORS.GREEN};
        border-radius: .8rem;
    }

    .noneBorder {
        box-shadow: none;
    }

    :root {
        font-size: 62.5%;
    }
    
    body {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO_REGULAR.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO_REGULAR.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO_REGULAR.fontSize};
        line-height: 2rem;
        
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
    input, textarea, button, label {
        font-family: ${({ theme }) => theme.FONTS.ROBOTO_REGULAR.fontFamily};
        font-weight: ${({ theme }) => theme.FONTS.ROBOTO_REGULAR.fontWeight};
        font-size: ${({ theme }) => theme.FONTS.ROBOTO_REGULAR.fontSize};
        line-height: 2rem;
    }   
`