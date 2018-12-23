import { StyleSheet } from 'react-native'
import { lightTextColor, textColor } from '../../Theme/Variables'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '60%',
  },
  icon: { fontSize: 100, color: lightTextColor },
  description: { color: lightTextColor, fontSize: 20 },
})
