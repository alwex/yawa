import { StyleSheet } from 'react-native'
import { textColor } from '../../Theme/Variables'

export default StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center' },
  description: { fontSize: 30, color: textColor },
  button: { alignSelf: 'center', marginTop: 20 },
})
