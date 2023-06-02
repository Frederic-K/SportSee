import { Text } from 'recharts'

export default function RenderPolarAngleAxis({
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
