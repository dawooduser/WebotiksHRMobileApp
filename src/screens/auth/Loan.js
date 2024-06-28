import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../../constant/theme'
import { Header, LoanItem, PlusContainerImage, VerticalSpace } from '../../components'
import { genericRatio, screenNavigation } from '../../helper/helper'

const Loan = ({navigation,}) => {
    const navigationCB = () => screenNavigation(navigation, "ApplyforLoan")
  return (
    <SafeAreaView style={[commonStyles.fillFullScreen, styles.container]}>
        <Header centerText={'Loan'} backVisible  rightCompontVisible rightCompont={<PlusContainerImage onPress={navigationCB} />}/>
        <ScrollView style={[commonStyles.fillFullScreen]} contentContainerStyle={{padding: genericRatio(15)}}>
            <LoanItem Amount={'30,000'} dateStart={'12/12/2021'} dateEnd={'31/01/2021'} period={'8'} status={'close'} />
            <VerticalSpace />
            <LoanItem Amount={'30,000'} dateStart={'12/12/2021'} dateEnd={'31/01/2021'} period={'8'} status={'close'} />
        </ScrollView>
    </SafeAreaView>
  )
}

export default Loan

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f5fb'
      }
})