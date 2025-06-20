import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

import { colorsTheme } from "../theme/colors";
import { Box } from "@/components/ui/box";

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = colorsTheme.gray[700]

  return (
    <Box className="flex-1 bg-colorsTheme-gray-700">
      <NavigationContainer theme={theme}>
        <AppRoutes />
      </NavigationContainer>
    </Box>
  )
}