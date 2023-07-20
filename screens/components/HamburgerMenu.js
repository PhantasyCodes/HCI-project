import React, { useState } from 'react';
import { View, StyleSheet, Appearance, TouchableOpacity } from 'react-native';

const HamburgerMenu = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
                <View style={styles.line}></View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 23,
        marginTop: 58,
        marginRight: 20,
    },
    line: {
        width: '50%',
        height: 2,
        borderRadius: 3,
        backgroundColor: 'white',
        margin: 1.5,
      },
})

export default HamburgerMenu;