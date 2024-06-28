import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React, { forwardRef, memo, useCallback, useImperativeHandle, useState } from 'react'
import { COLORS, commonStyles } from '../../constant/theme'

const ModalContainer = forwardRef(({children}, ref) => {
    const [modalVisibility, setModalVisibility] = useState(false)
    const ModalToggle = useCallback((val = true) => setModalVisibility(val), [])
    useImperativeHandle(ref, () => ({
        ModalToggle
    }), [])

    return (
      <Modal visible={modalVisibility} 
      transparent
      animationType={'fade'}
      onRequestClose={() => ModalToggle(false)}>
        <Pressable style={[commonStyles.fillFullScreen, commonStyles.center, styles.container]} 
        onPress={(event) => event.target == event.currentTarget && ModalToggle(false)}>
        {children}
        </Pressable>
      </Modal>
    )
  })

export default memo(ModalContainer)

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.backdrop
    }
})