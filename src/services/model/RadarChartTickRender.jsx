import { Text } from 'recharts'

export default function RadarChartTickRender({
  payload,
  x,
  y,
  cx,
  cy,
  ...rest
}) {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 20}
      x={x + (x - cx) / 20}
    >
      {payload.value}
    </Text>
  )
}
