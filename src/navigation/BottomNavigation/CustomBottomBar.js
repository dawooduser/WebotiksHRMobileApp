import { View, Text, TouchableOpacity, StyleSheet, Pressable, Image } from 'react-native';
import { COLORS, commonStyles } from '../../constant/theme';
import { genericRatio } from '../../helper/helper';
import { memo, useCallback, useMemo } from 'react';
import { NavigationIcon } from '../../constant/images';

function CustomBottomBar({ state, descriptors, navigation }) {
  return (
    <View style={[commonStyles.rowDirection, commonStyles.shadow, styles.tabContainer, {backgroundColor: 'red', alignSelf: 'center', paddingVertical: 15}, commonStyles.fullWidth]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        // const isFocused = useMemo(() => state.index === index, [state])

        const onPress = useCallback(() => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        }, [isFocused, route]);

        return (
          <TouchableOpacity key={index} activeOpacity={0.9}
            style={[styles.mainItemContainer, index === 0 && {backgroundColor: 'aqua'}]} onPress={onPress}>
            <Image
              tintColor={isFocused ? COLORS.primary : '#9ca3af'}
              style={styles.iconSize}
            source={route.name === "HomeScreen" ? NavigationIcon.home : route.name === "Leaves" ? NavigationIcon.leave : route.name === "Notification" ? NavigationIcon.notification : route.name === "Profile" ? NavigationIcon.profile : NavigationIcon.profile }  />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default memo(CustomBottomBar)

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: COLORS.secondary,
    justifyContent: 'space-around',
    paddingVertical: 5,
  },
  mainItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSize: {
    height: genericRatio(20),
    width: genericRatio(20)
},
  SelectItem: {
    height: genericRatio(40),
    width: genericRatio(40),
    borderRadius: genericRatio(40),
    backgroundColor: '#F3F4F6',
    ...commonStyles.shadow,
  }
})

