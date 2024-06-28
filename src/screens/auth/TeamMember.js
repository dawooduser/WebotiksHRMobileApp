import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, commonStyles } from '../../constant/theme'
import { Header, HorizontalSpace, VerticalSpace } from '../../components'
import { SimpleLineIcons } from '../../constant/icon'
import { genericRatio } from '../../helper/helper'
import { ProfileImagePlaceHolder, moreIcon } from '../../constant/images'

const TeamMember = () => {
  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
      <ScrollView style={[commonStyles.fillFullScreen]}>
        <Header centerText={'Team Member'} backVisible={true} />

        <View style={[commonStyles.fullWidth, commonStyles.screenCommonPaddingHorizontal]}>
          <View style={[styles.searchContainer, commonStyles.rowDirectionCenter]}>
            <View style={[commonStyles.center, { paddingHorizontal: 15 }]}>
              <SimpleLineIcons name={'magnifier'} size={genericRatio(20)} color={"#004976"} />
            </View>
            <TextInput style={[FONTS.body4, commonStyles.textFamily300, styles.searchContainerTextInput]} placeholder='Search' />
          </View>

          <VerticalSpace />

          <View style={[styles.searchContainer, commonStyles.rowDirectionCenter, { paddingVertical: 10 }]}>
            <View style={styles.lineContainer} />
            <View style={[commonStyles.fillFullScreen, { paddingHorizontal: 15 }]}>
              <View style={[commonStyles.rowDirectionCenter, commonStyles.spaceBetween]}>
                <View style={[commonStyles.rowDirectionCenter]}>
                  <Image source={ProfileImagePlaceHolder} style={styles.imageIcon} />
                  <HorizontalSpace />
                  <View>
                    <Text style={[commonStyles.textFamily500, commonStyles.textColorBlack, FONTS.body3]}>{"Sarah Parker"}</Text>
                    <Text style={[commonStyles.textFamily300, { color: '#101317' }, FONTS.body5]}>{"sarah.parker@gmail.com"}</Text>
                  </View>
                </View>
                <Image source={moreIcon} style={{ height: genericRatio(20), width: genericRatio(10) }} />
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
      <View style={[commonStyles.fullWidth, commonStyles.screenCommonPaddingHorizontal]}>
        <TouchableOpacity style={[commonStyles.center,
        { backgroundColor: '#004976', borderRadius: 10, paddingVertical: 10 }]}>
          <Text style={[FONTS.body2, commonStyles.textColorWhite, commonStyles.textFamily300]}>{"Add Member"}</Text>
        </TouchableOpacity>
      </View>
      <VerticalSpace />
    </SafeAreaView>
  )
}

export default TeamMember

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary
  },
  searchContainer: {
    borderRadius: 10,
    paddingVertical: 5,
    borderColor: '#E2E2E2',
    borderWidth: 1,
    backgroundColor: COLORS.white
  },
  searchContainerTextInput: {
    flex: 1, height: genericRatio(30), padding: 0
  },
  lineContainer: { backgroundColor: '#F38B00', height: '70%', width: 4, borderRadius: 10 },
  imageIcon: {
    height: genericRatio(40),
    width: genericRatio(40),
    borderRadius: genericRatio(40),
  }
})