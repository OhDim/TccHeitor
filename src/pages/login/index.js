import React from "react";
import {View, SafeAreaView, StyleSheet, Text, Image} from 'react-native';



export default function Login(){
    return(
            <View style={styles.container}>
                <Image 
                style = {styles.imagem}
                source={require('../../assets/Images/Grupo.png')}></Image>
                <Text>Ensine fácil e prático !</Text>
                <Text>Organize suas tarefas e acompanhe seu progresso escolar de maneira fácil e eficiente.</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  