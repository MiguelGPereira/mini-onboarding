[![travis build](https://img.shields.io/travis/MiguelGPereira/mini-onboarding.svg?style=flat-square)](https://travis-ci.org/MiguelGPereira/mini-onboarding)

# MiniOnboarding
Mini onboarding flow application, built with React-Native.

## Installation
```bash
yarn install
```
This project was created using the React Native CLI, which means that to run in from the console, the CLI must be installed
```npm
npm install -g react-native-cli
```
Alternatively, the app can be run directly using Xcode (changing the provisioning profiles) or Android Studio.

## Execution
```bash
#iOS
react-native run-ios

#Android
react-native run-android
```

To run on a physical device, use Xcode for iOS or the CLI with `adb` installed for Android.  
To see the keyboard related animations in the iOS simulator, the software keyboard must be enabled (Cmd + K). 

## Project structure
```
mini-onboarding/src
│   App.js    
│   ...
└───constants //fitness goals, redux actions, ...
│   
└───utils //metric system converters, ...
│   
└───modules
│   │
│   └───_gobal //inter-module components i.e. Button
│   │
│   └───onboarding
│       │   Landing.js // fitness goal selection screen component
│       │   Age.js // age input screen component
│       │   Height.js //height input screen component
│       │   Success.js //success screen component
│       │   ...
│       └───components // 'dumb' components
│       │   Step.js // See #1
│       │   ...
│       └───hocs // higher-order components
│           withOnboarding.js // See #2
```

[#1](#withonboarding)  
[#2](#step)

## Discussion
For this challenge, I decided to bootstrap the project with the react native cli, since I believe it's the most scalable if, for example, it was necessary to add custom native modules.
I also settled on Redux for state management, because I feel the initial complexity curve is well rewarded with an easy to maintain application.
For navigation, I used `react-native-navigation` from Wix, because it's a very performant solution (compared to the standard all-JS one) with easy Redux integration.

The development of the design was based/optimized on iOS w/ 4.7-inch (e.g. iPhone 6) but it was adapted and tested in the following devices:
* iPhone 6 | iOS 9.3 | Simulator
* iPhone 5S | iOS 9.3 | Simulator
* iPhone 6 Plus | iOS 9.3 | Simulator
* iPhone 7 | iOS 11.3.1 | Physical
* Huawei P10 Lite | Android 7.0 Nougat | Physical

One challenge was trying to reduce the compromise between respecting the design and adapting to the different screen sizes (and Android), although I believe I found a good balance. 

Regarding the architecture, I tried to use a highly modular approach. Two examples are [withOnboarding](#withonboarding) and [Step](#step).

### withOnboarding
This higher-order component was created to inject the Redux's store State and the Dispatch into the onboarding component's props. 
From a software design perspective, instead of using 'withOnboarding', I could have either: 1) made just the 'Landing' the smart component and pass the necessary actions to the next screens; 2) 'connect()'' all the screens individually. From a scalability standpoint, if it was necessary to have a few more steps to the onboarding, I feel this hoc was the best solution.  

### Step
This component was created because of the similarities of the intermediate (post-landing) onboarding steps. All those screens have a ProgressBar, a title, an **input-section**, and a submit button, with possible keyboard events.
Step uses composition to abstract all these repeated dependencies, allowing the intermediate onboarding steps to only deal with the **input-section**.

## Limitations
The keyboard associated animations were designed with iOS first in mind. On adaptation for Android, there is a known bug that doesn't allow disabling the keyboard default accessory transitions without disabling it's triggered events (see [here](https://github.com/facebook/react-native/issues/2852)). For this reason, the keyboard associated animations are a bit *hacked* on Android and could be improved with some refactoring.
