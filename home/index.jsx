import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../home/styles";
import { FontAwesome } from '@expo/vector-icons';


export default function Home(){
    function handleAluno(){
        console.log('ola')
    }

    return(
        <View style={styles.container}>
           
           <View style={styles.cabecalho}>

            <Image style={styles.foto} source={{uri: 'https://pbs.twimg.com/media/FSOGmzQWUAMNRT-.jpg'}}/>
            <TextInput style={styles.pesquisa}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}><FontAwesome name="search" size={24} color="black" /></Text>
            </TouchableOpacity>
           </View>

        </View>
    )
}