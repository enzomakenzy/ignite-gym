import "./global.css"
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { Loading } from "./src/components/Loading";
import { SignIn } from "./src/screens/SignIn";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider mode="light">
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoaded ? <SignIn /> : <Loading /> }
    </GluestackUIProvider>
  );
}

