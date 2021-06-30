import { Alert } from "react-native";

export const createConfirmAlert = ({title, message, confirm}) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "Confirm",
                onPress: () => confirm()
            }
        ],
        { cancelable: false }
    );
}
