import React, {PureComponent} from 'react'
import { TouchableHighlight, Image, View } from 'react-native'
import PropTypes from 'prop-types'

export default class BackButton extends PureComponent {
  static propTypes = {
    onGoBack: PropTypes.func,
    underlayColor: PropTypes.string,
    tintColor: PropTypes.string,
  }

  static defaultProps = {
    underlayColor: '#ffffff',
    tintColor: '#000000'
  }

  render() {
    const {onGoBack,underlayColor,tintColor} = this.props
    return (
      <TouchableHighlight
        onPress={onGoBack}
        underlayColor={underlayColor}
        style={{marginLeft: 10,padding: 7.5,borderRadius: 22.5,}}
      >
      <View style={{width: 30,height: 30,}}>
        <Image
          resizeMode="cover"
          source={require('../react-navigation/src/views/assets/back-icon.png')}
          style={{tintColor: tintColor, margin: 3,width: 24,height: 24, resizeMode:'contain'}}
        />
      </View>
      </TouchableHighlight>
    )
  }
}
