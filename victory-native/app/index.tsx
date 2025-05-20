import * as React from "react";
import { View } from "react-native";
import { CartesianChart, Line, useChartPressState } from "victory-native";
import { Circle, } from "@shopify/react-native-skia";
import type { SharedValue } from "react-native-reanimated";


export default function Index() {
  const { state, isActive } = useChartPressState({ x: 0, y: { highTmp: 0 } })
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CartesianChart
        data={DATA}
        xKey="day"
        yKeys={["highTmp"]}
        chartPressState={state}
      >
        {({ points }) => (
          <>
            <Line points={points.highTmp} color="red" strokeWidth={3} />
            {isActive && (
              <ToolTip x={state.x.position} y={state.y.highTmp.position} />
            )}
          </>
        )}
      </CartesianChart>
    </View>
  );
}

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: 40 + 30 * Math.random(),
}));