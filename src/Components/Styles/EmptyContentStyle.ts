import { StyleSheet } from 'react-native'
import { lightTextColor } from '../../Theme/Variables'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '50%',
  },
  row: {
    height: 200,
  },
  icon: { fontSize: 100, color: lightTextColor },
  description: { color: lightTextColor, fontSize: 20 },
})
