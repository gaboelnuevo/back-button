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
      underlayColor={color.primary} // 点击按钮的背景色,和你的导航栏背景色要一致
      tintColor="#ffffff" // 你懂的
      onGoBack={navigation.getParam('onGoBack')} // 绑定自定义的事件和页面进行交互
    />
  ),
  ...
})
...
componentDidMount() {
  this.props.navigation.setParams({onGoBack: this.onGoBack}) // 绑定页面的函数到导航组件
}
onGoBack = () => {
  Modal.alert('是否放弃编辑', '', [
    {text: '取消'}, {
      text: '确定',
      onPress: () => {
        this.props.navigation.goBack()
      },
    },
  ])
}
...
```
