import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 16px;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 12px;
        }
    }

    body, input, button, textarea {
        font-family: "Josefin Sans", sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`