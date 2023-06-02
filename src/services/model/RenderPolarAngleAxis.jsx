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
      y={y + (y - cy) / 3}
      x={x + (x - cx) / 3}
    >
      {payload.value}
    </Text>
  )
}
