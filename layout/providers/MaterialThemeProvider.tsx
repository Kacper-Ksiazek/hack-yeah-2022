// Tools
import theme from "@/material";
// Type
import type { ReactNode, FunctionComponent } from "react";
// Other components
import { ThemeProvider } from "@mui/material";

const MaterialUIThemeProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialUIThemeProvider;
