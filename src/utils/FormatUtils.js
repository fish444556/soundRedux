import { CLIENT_ID } from '../constants/Config'

export function formatStreamUrl(streamUrl) {
  return `${streamUrl}?client_id=${CLIENT_ID}`
}