import { Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

export default function Index() {
  const xAxisLabels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
  const lineData = [
    { value: 1200, month: 'Jan 2025' },
    { value: 1500, month: 'Fév 2025' },
    { value: 1800, month: 'Mar 2025' },
    { value: 2000, month: 'Avr 2025' },
    { value: 1700, month: 'Mai 2025' },
    { value: 2200, month: 'Juin 2025' },
    { value: 2400, month: 'Juil 2025' },
    { value: 2600, month: 'Août 2025' },
    { value: 2800, month: 'Sep 2025' },
    { value: 3000, month: 'Oct 2025' },
    { value: 3200, month: 'Nov 2025' },
    { value: 3500, month: 'Déc 2025' },
  ];
  
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LineChart
        data={lineData}
        xAxisLabelTexts={xAxisLabels}
        xAxisLabelTextStyle={{ fontSize: 11 }}
        spacing={25}
        yAxisThickness={0}
        xAxisColor={"#DBDCDD"}
        thickness={2}
        rulesType="solid"
        showVerticalLines
        curved
        dataPointsHeight={10}
        dataPointsWidth={10}
        customDataPoint={CustomDataPoint}
        color="#CDB495"
        pointerConfig={{
              pointerStripUptoDataPoint: true,
              pointerStripWidth: 2,
              pointerColor: 'lightgray',
              radius: 4,
              pointerLabelComponent: (items: any) => {
                return (
                  <View
                    style={{
                      width: 100,
                      backgroundColor: '#282C3E',
                      borderRadius: 4,
                      justifyContent:'center',
                      paddingLeft:16,
                    }}>
                    <Text style={{color: 'lightgray',fontSize:12}}>{items[0].month}</Text>
                    <Text style={{color: 'white', fontWeight:'bold'}}>Montant : {items[0].value} Ar</Text>
                  </View>
                );
              },
            }}
      />
      
    </View>
  );
}

const CustomDataPoint = () => {
  return <View style={{
        borderWidth: 1.5,
        borderRadius: "100%",
        borderColor : "#CDB495",
        width: 10,
        height: 10
      }} />
}
