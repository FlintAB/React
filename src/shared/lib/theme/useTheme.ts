import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const useTheme = () => {
   const context = useContext(ThemeContext);

   if(!context) {
      throw new Error('Контекст темы должен использоваться в компоненте, обёрнутом в ThemeProvider');
   }

   return context;
};