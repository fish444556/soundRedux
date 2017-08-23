import { CLIENT_ID } from '../constants/Config'

const padZero = (num, size) => {
  let str = num + ''
  while (str.length < size) {
    str = '0' + str
  }
  return str
}

export function formatStreamUrl(streamUrl) {
  return `${streamUrl}?client_id=${CLIENT_ID}`
}

export function formatSeconds(num) {
  const minutes = padZero(Math.floor(num / 60), 2)
  const seconds = padZero(num % 60, 2)
  return `${minutes}:${seconds}`
}