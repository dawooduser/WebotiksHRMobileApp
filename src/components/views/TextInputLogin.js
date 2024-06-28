import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Keyboard,
  } from "react-native";
  import React, { memo, useCallback, useMemo, useState } from "react";
import { commonStyles } from "../../constant/theme";
import { Feather } from "../../constant/icon";
import { genericRatio } from "../../helper/helper";
  
  const TextInputLogin = ({
    IconView,
    placeholderText,
    getValueCB,
    value,
    isPasswordFields,
    editable,
    submitCB
  }) => {
    const [textVisibilty, setTextVisibility] = useState(true);
    const toggleDisplayText = useMemo(() => {
      return textVisibilty;
    }, [textVisibilty]);
    const textVisibiltyToggle = useCallback((val) => setTextVisibility(val), []);
    const ShowTogglePasswordSwicthView = useCallback(() => {
      if (!isPasswordFields) return null;
      return (
        <TouchableOpacity
          style={[commonStyles.center, styles.iconContainer]}
          activeOpacity={0.9}
          onPress={() => textVisibiltyToggle(!textVisibilty)}
        >
          <Feather
            name={!toggleDisplayText ? "eye" : "eye-off"}
            color={"#9CA3AF"}
            size={genericRatio(25)}
          />
        </TouchableOpacity>
      );
    }, [isPasswordFields, toggleDisplayText]);
  
    return (
      <View style={[commonStyles.rowDirection, styles.container]}>
        <View style={[commonStyles.fillFullScreen]}>
          <TextInput
            style={[styles.textInputContainr]}
            placeholder={placeholderText}
            editable={editable}
            onChangeText={getValueCB}
            defaultValue={value}
            onSubmitEditing={submitCB}
            secureTextEntry={isPasswordFields && toggleDisplayText}
          />
        </View>
        <ShowTogglePasswordSwicthView />
      </View>
    );
  };
  TextInputLogin.defaultProps = {
    IconView: <View />,
    showpasswordToggles: false,
    isPasswordFields: false,
    placeholderText: "",
    getValueCB: () => {},
    value: "",
    editable: true,
    submitCB: () => {
      Keyboard.dismiss()
    }
  };
  export default memo(TextInputLogin);
  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: "#F9FAFB",
      borderWidth: 1,
      borderColor: "#D1D5DB",
      borderRadius: 8,
    },
    iconContainer: {
      // padding: 10,
      paddingHorizontal: 10,
    },
    textInputContainr: {
      height: genericRatio(40),
      padding: 0,
      paddingLeft: 10,
      // borderRadius: 8,
    },
  });
  