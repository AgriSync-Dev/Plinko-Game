import { colors } from 'styles/colors'
import { value } from 'utils/control'

const pins = {
  startPins: 3,
  pinSize: 2,
  pinGap: 20
}

const ball = {
  ballSize: 5.7
}

const engine = {
  engineGravity: 0.8,
  additionalGravity: value(true)
}
// 110 => -0.09, 0.09
// 41 => -0.055, 0.05
// 10 => -0.049, 0.0465
// 5 => -0.03, 0.03
// 3 => -0.02, 0.026
// 1.5 => -0.0085, 0.00895
// 1 => -0.0083, 0.00894
// 0.5 => -0.0083, 0.0089
// 0.3 => -0.002
const world = {
  width: 390,
  height: 390
}

export const config = {
  pins,
  ball,
  engine,
  world,
  colors
}
