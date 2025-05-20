import { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import {
  LineChart,
} from "react-native-chart-kit";

export default function Index() {
  const labels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
  const data = [0, 0, 0, 0, 110000, 0, 0, 0, 0, 0, 0, 0];
  const screenWidth = Dimensions.get("window").width;
  const [lineColor, setLineColor] = useState("rgba(0, 0, 0, 0)");
  const [dotColor, setDotColor] = useState("rgba(0, 0, 0, 0)");

  const getRandomColor = () => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      return `rgba(${r}, ${g}, ${b}, 0.6)`;
  }

  useEffect(() => {
    let color = getRandomColor();
    setLineColor(color);
    setDotColor(color);
  }, [])


  return (
    <View style={{ flex: 1, alignItems: "center", padding: 10 }}>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data
            },
          ],
          legend: ["Montnant 2025"]
        }}

        bezier

        formatYLabel={(yValue) => {
          return yValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        }}

        width={screenWidth-20}
        height={220}
        fromZero={true}

        transparent={true}
        withShadow={false}

        chartConfig={{
          decimalPlaces: 2,

          style: {
            padding: 10,
          },

          backgroundGradientFrom: "#F9FAFB",
          backgroundGradientTo: "#F9FAFB",
          color: () => `${lineColor}`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

          propsForDots: {
            r: "6",
            fill: "none",
            strokeWidth: "1",
            stroke: `${dotColor}`,
          },
          
          propsForBackgroundLines: {
            strokeDasharray: "", // solid background lines with a width of 1
            strokeWidth: "1",
            stroke: "#E5E7EB",
          },

          propsForLabels: {
            fontSize: 10,
          }
        }}
      />
    </View>
  );
}
