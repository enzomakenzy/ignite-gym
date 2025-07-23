import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, Controller } from "react-hook-form";

import { Box } from "@/components/ui/box";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { api } from "../services/api";
import axios from "axios";
import { Alert } from "react-native";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const signUpFormSchema = z
  .object({
    name: z.string({ error: "Informe o nome." }),
    email: z.email({ error: "Informe o e-mail." }),
    password: z.string({ error: "Informe a senha." }).min(6, "A senha deve ter pelo menos 6 digitos"),
    passwordConfirm: z.string({ error: "Confirme a sua senha." }).min(6, "A senha deve ter pelo menos 6 digitos")
}).refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    error: "As senhas não coincidem",
    path: ["passwordConfirm"]
});

type SignUpFormData = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema)
  });

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleBackToSignUp() {
    navigation.goBack();
  }

  async function handleSignUp({ name, email, password, passwordConfirm }: FormDataProps) {
    try {
      const response = await api.post("/users", { name, email, password });
      console.log(response.data); 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Alert.alert(error.response?.data.message);
      }
    }
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <SafeAreaView className="flex-1" edges={["bottom", "left", "right"]}>
        <VStack className="flex-1 px-10">
          <Image
            source={BackgroundImg}
            alt="Pessoas treinando"
            resizeMode="cover"
            className="absolute w-screen h-auto"
          />

          <Center className="my-32 items-center">
            <LogoSvg />
            <Text className="color-colorsTheme-gray-100 text-smTheme font-body">
              Treine sua mente e o seu corpo
            </Text>
          </Center>

          <Box className="flex-1 justify-between">
            <Center className="w-full mb-8">
              <Heading className="color-colorsTheme-gray-100 text-xlTheme font-heading mb-6">
                Crie sua conta
              </Heading>

              <Controller
                control={control}
                name="name"
                render={({ field: {onChange, value} }) => (
                  <Input
                  placeholder="Nome"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.name?.message}
                  />
                )}
                />

              <Controller
                control={control}
                name="email"
                render={({ field: {onChange, value} }) => (
                  <Input
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                  />
                )}
                />

              <Controller
                control={control}
                name="password"
                render={({ field: {onChange, value} }) => (
                  <Input
                  placeholder="Senha"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType="send"
                  errorMessage={errors.password?.message}
                  />
                )}
                />

              <Controller
                control={control}
                name="passwordConfirm"
                render={({ field: {onChange, value} }) => (
                  <Input
                  placeholder="Confirme a Senha"
                    secureTextEntry
                    value={value}
                    onChangeText={onChange}
                    onSubmitEditing={handleSubmit(handleSignUp)}
                    returnKeyType="send"
                    errorMessage={errors.passwordConfirm?.message}
                    />
                  )}
                  />

              <Button
                title="Criar e acessar"
                onPress={handleSubmit(handleSignUp)}
                />
            </Center>
            <Button
              title="Voltar para login"
              style={{ marginBottom: 21 }}
              variant={true}
              onPress={handleBackToSignUp}
              />
          </Box>
        </VStack>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}