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
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 23,
        marginTop: 50,
        marginRight: 20,
    },
    line: {
        width: '50%',
        height: 3,
        borderRadius: 3,
        backgroundColor: 'white',
        margin: 1.5,
      },
})

export default HamburgerMenu;