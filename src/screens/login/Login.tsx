import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Checkbox from "expo-checkbox";

import { colors, strings } from "../../../assets/index";
import { styles } from "./styles";

export default function Login() {
  const [isChecked, setChecked] = React.useState(false);
  return (
    <ScrollView style={styles.containt}>
      <Image
        style={styles.img}
        source={{
          uri: "https://th.bing.com/th/id/R.0bdd1f3928f36be177241b8f8574a299?rik=f1GLlasFjUCu%2fQ&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2016%2f10%2fAmazon-Logo.png&ehk=gLJu7Bd3zSqjAJ7OwoyQkQPaz6ofAdahYh91trMVyN0%3d&risl=&pid=ImgRaw&r=0",
        }}
      />
      <Text style={styles.title}>{strings.login.title}</Text>
      <Text style={styles.titleInput}>{strings.login.titleEmail}</Text>
      <TextInput style={styles.textInput} />
      <View style={styles.txtsPassword}>
        <Text style={styles.titleInput}>{strings.login.titlePassword}</Text>
        <TouchableOpacity>
          <Text style={styles.forgetPassword}>
            {strings.login.forgetPassword}
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.textInput} />
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.txtBtns}>{strings.login.btn.btn_Login}</Text>
      </TouchableOpacity>
      <Text style={styles.txtDescriptionConditions}>
        {strings.login.information}
        <Text style={styles.txtBtn_DescriptionConditions}>
          {" " + strings.login.conditionstoUse}
          <Text style={{ color: colors.black }}>
            {" "}
            Consulta nuestro
            <Text style={styles.txtBtn_DescriptionConditions}>
              {" " + strings.login.privacy}
              <Text style={{ color: colors.black }}>
                {" "}
                y nuestras
                <Text style={styles.txtBtn_DescriptionConditions}>
                  {" " + strings.login.cookies}
                  <Text style={{ color: colors.black }}>
                    {" "}
                    y
                    <Text style={styles.txtBtn_DescriptionConditions}>
                      {" " + strings.login.publicity}
                    </Text>
                  </Text>
                </Text>
              </Text>
            </Text>
          </Text>
        </Text>
      </Text>
      <View style={styles.conteinerRemember}>
        <Checkbox
          style={styles.checkbox_Remember}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text style={styles.txtRemember}>{strings.login.check_rememberme}</Text>
        <TouchableOpacity>
          <Text style={styles.txtBtn_DescriptionConditions}>
            {" " + strings.login.details}
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.txtNewToAmazon}>{strings.login.areYouNew}</Text>
      <TouchableOpacity style={styles.btnCreateAccount}>
        <Text style={styles.txtBtns}>
          {strings.login.btn.btn_CreateAccount}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
