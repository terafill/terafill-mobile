import React, { memo } from 'react';
import { Pressable, Text, Image, View, StyleSheet } from 'react-native';

const Button = ({
  buttonType,
  onClick,
  label,
  labelDisplay,
  icon,
  iconComponent,
  iconDisplay,
  iconPosition = "left",
  ...props
}) => {

  const buttonTypeStyleMap = {
    dark: styles.darkButton,
    panel: styles.panelButton,
    link: styles.linkButton,
    red: styles.redButton,
    blue: styles.blueButton,
    light: styles.lightButton,
    lightOutlined: styles.lightOutlinedButton,
  }

  const labelStyleMap = {
    dark: styles.darkLabel,
    panel: styles.panelLabel,
    link: styles.linkLabel,
    red: styles.redLabel,
    blue: styles.blueLabel,
    light: styles.lightLabel,
    lightOutlined: styles.lightOutlinedLabel,
  }

  const iconStyleMap = {
    dark: styles.darkIcon,
    panel: styles.panelIcon,
    link: styles.linkIcon,
    red: styles.redIcon,
    blue: styles.blueIcon,
    light: styles.lightIcon,
    lightOutlined: styles.lightOutlinedIcon,
  }

  if (!buttonType) {
    buttonType = "dark";
  }

  return (
    <Pressable
      style={[styles.buttonroot, buttonTypeStyleMap[buttonType]]}
      onPress={onClick}
      {...props}
    >
      {iconPosition === "left" && icon && (
        <Image style={iconStyleMap[buttonType]} source={{ uri: icon }} />
      )}
      {iconPosition === "left" && iconComponent && (
        <View style={iconStyleMap[buttonType]}>
          {iconComponent}
        </View>
      )}
      {label && (
        <Text style={labelStyleMap[buttonType]}>{label}</Text>
      )}
      {iconPosition === "right" && icon && (
        <Image style={iconStyleMap[buttonType]} source={{ uri: icon }} />
      )}
      {iconPosition === "right" && iconComponent && (
        <View style={iconStyleMap[buttonType]}>
          {iconComponent}
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonroot: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: 'row',
  },
  darkButton: {
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  panelButton: {
    backgroundColor: 'transparent',
    color: 'blue',
  },
  linkButton: {
    backgroundColor: 'transparent',
    color: 'blue',
  },
  redButton: {
    backgroundColor: '#FF4D4D',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  blueButton: {
    backgroundColor: '#3F9BF1',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  lightButton: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  lightOutlinedButton: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
  },
  darkLabel: {
    color: 'white',
  },
  panelLabel: {
    color: 'white',
  },
  linkLabel: {
    color: 'blue',
  },
  redLabel: {
    color: 'white',
  },
  blueLabel: {
    color: 'white',
  },
  lightLabel: {
    color: 'black',
  },
  lightOutlinedLabel: {
    color: 'gray',
  },
  darkIcon: {
    height: 20,
    width: 20,
  },
  panelIcon: {
    height: 20,
    width: 20,
  },
  linkIcon: {
    height: 20,
    width: 20,
  },
  redIcon: {
    height: 20,
    width: 20,
  },
  blueIcon: {
    height: 20,
    width: 20,
  },
  lightIcon: {
    height: 20,
    width: 20,
  },
  lightOutlinedIcon: {
    height: 20,
    width: 20,
  },
});


export default memo(Button);
