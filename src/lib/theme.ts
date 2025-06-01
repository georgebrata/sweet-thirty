import { useColorMode } from '@vueuse/core'

export function initializeTheme() {
  const colorMode = useColorMode({
    attribute: 'class',
    emitAuto: false,
    storageKey: 'color-scheme',
    initialValue: 'light'
  })

  // Force light theme
  colorMode.value = 'light'
  
  return colorMode
} 