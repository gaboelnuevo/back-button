# react-navigation-back-button

## Install

```bash
$ yarn add react-navigation react-navigation-back-button
```

## Usage

```js
import BackButton from 'react-navigation-back-button'
...
static navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <BackButton
      underlayColor={color.primary}
      tintColor="#ffffff"
      onGoBack={navigation.getParam('onGoBack')}
    />
  ),
  ...
})
...
componentDidMount() {
  this.props.navigation.setParams({onGoBack: this.onGoBack})
}
onGoBack = () => {
  this.props.navigation.goBack()
}
...
```
