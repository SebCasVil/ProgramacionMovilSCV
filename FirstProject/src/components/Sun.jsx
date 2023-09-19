import React from "react";
import { Image, StyleSheet } from "react-native";
import { COLORS, IMAGES } from "../../assets";


const Sun = () => {
    return(
        <Image 
        source={IMAGES.sun}
        style={styles.image}

        />
    )
}

const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.borderColor
    },


})


export default Sun