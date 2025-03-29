# React Native Device Info
@chainplatform/device is a React Native library that provides a Device Info component for react-native and react-native-web.

<a href="https://npmjs.com/package/@chainplatform/device">
  <img src="https://img.shields.io/npm/v/@chainplatform/device.svg"></img>
  <img src="https://img.shields.io/npm/dt/@chainplatform/device.svg"></img>
</a>
<a href="https://twitter.com/intent/follow?screen_name=doansan"><img src="https://img.shields.io/twitter/follow/doansan.svg?label=Follow%20@doansan" alt="Follow @doansan"></img></a>

### Install
```
npm install @chainplatform/device --save
```
or
```
yarn add @chainplatform/device
```


### Usage

```js
import React from 'react';
import {StyleSheet} from 'react-native';
import DeviceInfo from '@chainplatform/device';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log("DeviceInfo ", DeviceInfo);
    return null;
  }
}
```