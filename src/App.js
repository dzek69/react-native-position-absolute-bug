import React from "react";
import {Text, View} from "react-native";

function Modal(props) {
    const style = {
        position: "absolute",
        zIndex: 1,
        left: 0,
        top: 0,
    };

    return (
        <View style={style}>
            {props.children}
        </View>
    );
}

function Balance() {
    const rootStyle = {
        flex: 1,
        backgroundColor: "#ff0"
    };

    return (
        <View style={rootStyle}>
            <Text style={{fontSize: 40}}>there should be text above that</Text>
        </View>
    );
}

const App = () => {
    return (
        <View style={{flex:1, position:"relative"}}>
            <Modal><Text>hello</Text></Modal>
            <Balance />
        </View>
    );
};

export default App;
