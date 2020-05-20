import React from 'react'
import { View, Text } from 'react-native'
const Item = ({ extra, children }) => {
  return (
    <View style={{ paddingHorizontal: 19, backgroundColor: '#fff' }}>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#D8D8D8',
          paddingVertical: 14,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 15,
        }}
      >
        <Text style={{ fontSize: 17, color: '#262626' }}>{children}</Text>
        <Text style={{ fontSize: 15, color: '#4A4A4A' }}>{extra}</Text>
      </View>
    </View>
  )
}
export default Item