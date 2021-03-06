import { StyleSheet } from 'react-native'
import { dayOfYearColor, primaryColor, secondaryColor, textColor } from '../../Theme/Variables'

const tempSize = 50
const iconSize = 150
const textSize = 12

export default StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', justifyContent: 'center', padding: 15 },
  dataContainer: {
    backgroundColor: primaryColor,
    margin: 20,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon: { color: primaryColor, fontSize: iconSize },
  descriptionText: { color: primaryColor, fontSize: 30, fontWeight: 'bold', marginBottom: 10 },
  locationRow: { marginBottom: 20, flex: 1, flexDirection: 'column', justifyContent: 'center' },
  location: {
    alignSelf: 'center',
    fontSize: textSize,
    fontWeight: 'bold',
    color: secondaryColor,
  },
  temp: { fontSize: tempSize, color: textColor },
  dayOfYear: { fontSize: 50, fontWeight: 'bold', color: dayOfYearColor, alignSelf: 'center' },
  dayOfWeek: { fontSize: 30, fontWeight: 'bold', color: secondaryColor, alignSelf: 'center' },
  time: { fontSize: 20, fontWeight: 'normal', color: textColor, alignSelf: 'center' },
  detailsIcon: { color: 'white' },
  inversed: { color: 'white' },
})
