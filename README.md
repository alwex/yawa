[![Build Status](https://travis-ci.com/alwex/yawa.svg?branch=master)](https://travis-ci.com/alwex/yawa)
[![Coverage Status](https://coveralls.io/repos/github/alwex/yawa/badge.svg?branch=master)](https://coveralls.io/github/alwex/yawa?branch=master)

# YAWA

![Image of ios version](doc/ios.png)

## Technology stack

- react-native
- redux
- redux-saga
- native-base

## External services

- openweathermap https://openweathermap.org
- geocoder https://geocoder.tilehosting.com

## Development

```bash
yarn install
react-native run-ios
react-native run-android
```

The project is configured to take advantage of react native debugger
https://github.com/jhen0409/react-native-debugger

![Image of redux dev tool](doc/debugger.png)

## Running tests

```bash
jest
```

## Release builds

Android release build require a keystore to sign the apk
https://facebook.github.io/react-native/docs/signed-apk-android

```bash
react-native run-android --variant=release
```

> /!\ IOS release build requires a provisioning profile and an apple developer account
