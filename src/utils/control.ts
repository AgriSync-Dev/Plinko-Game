import { random } from 'utils/random'

const multiplierValue = 41
const isLeft = false

const values = {
  '110': { left: -0.09, right: 0.09 },
  '41': { left: -0.055, right: 0.05 },
  '10': { left: -0.049, right: 0.0462 },
  '5': { left: -0.03, right: 0.03 },
  '3': { left: -0.02, right: 0.026 },
  '1.5': { left: -0.0085, right: 0.00895 },
  '1': { left: -0.0083, right: 0.00894 },
  '0.5': { left: -0.008, right: 0.0089 },
  '0.3': { left: -0.002, right: -0.002 }
}
const ballXValues = {
  left: {
    '110': [195, 196, 197, 184, 185, 186, 187, 188, 189, 191],
    '41': [207, 182, 195, 192, 190, 181, 188, 198, 196, 185],
    '10': [195, 187, 188, 183, 198, 190, 203, 192, 194, 199],
    '5': [195, 192, 206, 180, 182, 202, 192, 206, 180, 182],
    '3': [195, 197, 184, 179, 206, 198, 206, 206, 179, 184],
    '1.5': [195, 184, 201, 180, 198, 191, 193, 199, 207],
    '1': [195, 189, 199, 201, 181, 180, 201, 180, 195],
    '0.5': [195, 196, 184, 182, 203, 190, 204, 199, 189],
    '0.3': [195, 179, 181, 182, 192, 201, 205, 200, 193, 198]
  },
  right: {
    '110': [195, 196, 185, 187, 197, 188, 185, 187, 187],
    '41': [195, 196, 199, 202, 194, 183, 199, 180, 183, 195],
    '10': [195, 198, 203, 188, 208, 196, 188, 198, 203, 208],
    '5': [195, 182, 199, 200, 188, 193, 182, 200, 188, 182],
    '3': [195, 186, 200, 183, 182, 200, 200, 183, 182],
    '1.5': [195, 191, 200, 179, 194, 196, 192, 189, 179],
    '1': [195, 189, 199, 181, 193, 186, 202, 200, 196],
    '0.5': [195, 184, 182, 202, 180, 188, 199, 183, 198],
    '0.3': [195, 179, 181, 182, 192, 201, 205, 200, 193, 198]
  }
}

export const value = () => {
  if (isLeft) return values[multiplierValue].left
  else return values[multiplierValue].right
}

export const ballXValue = () => {
  const ri = parseInt(random(0, 9))
  if (isLeft) return ballXValues.left[multiplierValue][ri]
  else return ballXValues.right[multiplierValue][ri]
}

export const getMultiplierValue = () => {
  return multiplierValue
}
