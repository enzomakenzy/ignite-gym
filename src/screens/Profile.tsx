import { useState } from "react";
import { Alert, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { useToast, Toast, ToastTitle, ToastDescription } from "@/components/ui/toast";

import { ScreenHeader } from "@components/ScreenHeader";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { VStack } from "@/components/ui/vstack";
import { Center } from "@/components/ui/center";
import { Skeleton } from "@/components/ui/skeleton";
import { Text } from "@/components/ui/text";
import { colorsTheme } from "../theme/colors";
import { Heading } from "@/components/ui/heading";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] =  useState(false);
  const [userPhoto, setUserPhoto] = useState("https://github.com/enzomakenzy.png");

  const toast = useToast();

  async function handleUserPhotoSelect() {
    setPhotoIsLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images", "videos"],
        allowsEditing: true,
        quality: 1,
        aspect: [4, 4]
      });
  
      console.log(photoSelected);
  
      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        if (photoSelected.assets[0].fileSize && (photoSelected.assets[0].fileSize / 1024 / 1024) > 1) {
          console.log("aimds do ceu")
          return toast.show({
            placement: "top",
            render: () => {
              return (
                <Toast className="mt-14 p-4 bg-colorsTheme-red-500">
                  <ToastTitle className="font-heading color-colorsTheme-white">Imagem grande demais</ToastTitle>
                  <ToastDescription>Essa imagem é muito grande. Escolha uma de até 3MB</ToastDescription>
                </Toast>
              )
            }
          })
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
  
      setUserPhoto(photoSelected.assets[0].uri);
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

  return (
    <VStack className="flex-1">
      <ScreenHeader title="Perfil" />

      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <Center className="mt-6 px-10">
          {
            photoIsLoading ?
              <Skeleton startColor="bg-colorsTheme-gray-500" className="w-32 h-32" speed={4} variant="circular"/>
              :
              <Image
                source={{ uri: userPhoto }}
                alt="Imagem de Usuário"
                className="size-32 rounded-full border-2 border-colorsTheme-gray-400"
            />
          }

          <TouchableOpacity activeOpacity={0.6} onPress={handleUserPhotoSelect}>
            <Text className="color-colorsTheme-green-500 font-bold text-mdTheme mt-2 mb-8">
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input 
            style={{ backgroundColor: colorsTheme.gray[600], marginHorizontal: 1 }} 
            placeholder="Nome"
          />

          <Input 
            style={{ backgroundColor: colorsTheme.gray[600], marginHorizontal: 1 }} 
            placeholder="E-mail" editable={false} 
          />
        </Center>

        <VStack className="px-10 mt-12 mb-9">
          <Heading className="color-colorsTheme-gray-200 text-mdTheme mb-2">
            Alterar senha
          </Heading>

          <Input 
            style={{ backgroundColor: colorsTheme.gray[600], marginHorizontal: 1 }} 
            placeholder="Senha antiga" secureTextEntry 
          />
          <Input 
            style={{ backgroundColor: colorsTheme.gray[600], marginHorizontal: 1 }} 
            placeholder="Nova antiga" secureTextEntry 
          />

          <Button title="Atualizar" style={{ marginTop: 16 }} />
        </VStack>
      </KeyboardAwareScrollView>
    </VStack>
  );
}