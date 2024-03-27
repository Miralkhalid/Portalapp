import React from 'react';
import {View, Imagebackground } from 'react-native';

const Background = ({children}) => {
    return (
        <View>
            <Imagebackground source={require("./assests/OIG.CKssVZIVWKC4dAc.TxkE.jpg")} style={{height: '100%' }} />
       <View>
       {children}
       </View>
       </View>
    );  
}


export default Background;
