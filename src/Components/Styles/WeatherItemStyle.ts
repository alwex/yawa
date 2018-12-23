import { StyleSheet } from 'react-native'
import {textColor, primaryColor, secondaryColor, dayOfYearColor} from "../../Theme/Variables"

const tempSize = 50
const iconSize = 80
const textSize = 12

export default StyleSheet.create({
  container: { flex: 1 },
  mainRow: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' },
  temp: { fontSize: tempSize, color: textColor },
  icon: { color: '#D6637A', fontSize: iconSize },
  humidityBadge: { flexDirection: 'row', backgroundColor: primaryColor, alignSelf: 'center' },
  humidityBadgeContent: { color: 'white', fontSize: 14, alignSelf: 'center' },
  description: {
    fontSize: textSize,
    fontWeight: 'bold',
    color: primaryColor,
  },
  status: {
    fontSize: textSize,
    fontWeight: 'bold',
    color: secondaryColor,
  },
  dayOfYear: { fontSize: 50, fontWeight: 'bold', color: dayOfYearColor, alignSelf: 'center' },
  dayOfWeek: { fontSize: 30, fontWeight: 'bold', color: secondaryColor, alignSelf: 'center' },
  time: { fontSize: 12, fontWeight: 'normal', color: textColor, alignSelf: 'center' },
})
