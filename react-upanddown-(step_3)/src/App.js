import React from "react";
import Header from "./componets/header"
import Container from "./componets/conatiner"

import {
  Box,
  withStyles
} from "@material-ui/core";

const View = withStyles(() => ({
  root: {
      width: '100%',
      height: '100%',
      overflow: 'hidden'        
  }
}))(Box);

function App() {
    return (
        <View>
            <Header/>
            <Container/>   
        </View>
    );
}

export default App;
