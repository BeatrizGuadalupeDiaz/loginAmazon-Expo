import { StyleSheet } from "react-native"
import { colors } from "../../../assets/index"
import Checkbox from "expo-checkbox"

export const styles = StyleSheet.create({
    containt:{
        flex:1,
        padding:20
    },
    img:{
        height: 100,
        width: 200,
        resizeMode: 'contain',
        alignSelf:"center"
    },
    title:{
        fontSize: 27,
        fontWeight:"bold",
        marginBottom:15
    },
    titleInput:{
        fontSize:15,
        fontWeight:"bold",
    },
    textInput:{
        borderWidth:1,
        padding: 5,
        width: "auto",
        marginBottom: 10,
        marginTop:3,
        borderRadius:5
    },
    forgetPassword:{
        color: colors.blueLigthAmazon
    },
    txtsPassword:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent:"space-between"
    },
    btnLogin:{
        width: "auto",
        height: 40,
        backgroundColor: colors.yellowAmazon,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginVertical:20
    },
    txtBtns:{
        fontSize:17
    },
    txtDescriptionConditions:{
        fontSize:16
    },
    txtBtn_DescriptionConditions:{
        color: colors.blueLigthAmazon,
        fontSize:16
    },
    checkbox_Remember:{
        
    },
    txtRemember:{
        fontSize:16,
        marginStart:5
    },
    conteinerRemember:{
        flexDirection: "row",
        alignItems: "center",
        width: "60%",
        marginTop:20
    },
    txtNewToAmazon:{
        fontSize:16,
        textAlign:"center",
        marginTop:35
    },
    btnCreateAccount:{
        width: "auto",
        height: 40,
        backgroundColor: colors.whiteAmazon,
        color: colors.blackAmazon,
        borderWidth:1,
        marginVertical:15,
        marginBottom:30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    }
})