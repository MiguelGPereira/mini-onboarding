import {
    StyleSheet,
    Dimensions
} from "react-native";
import * as colors from "./../../../../constants/colors";

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width * 0.90,
        height: 100,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        marginBottom: 20,
        shadowOpacity: 0.08,
        shadowOffset: {
            width: 0,
            height: 5
        },
        borderRadius: 10,
        borderColor: "#efefef",
        borderWidth: 1
    },
    labelsView: {
        marginLeft: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
        color: colors.PRIMARY_COLOR
    },
    arrowView: {
        marginRight: 10
    }
});

export default styles;