export type FontStyle = 'bold' | 'italic' | 'underline'

export interface TokenSettings {
  foreground?: string
  fontStyle?: FontStyle
}

export interface TokenColor {
  name?: string
  scope?: string | string[]
  settings: TokenSettings
}

export interface Theme {
  name: string
  type: 'dark' | 'light'
  colors: Record<string, string>
  tokenColors: TokenColor[]
  semanticHighlighting: boolean
}

export interface ThemeDef {
  label: string
  uiTheme: 'vs-dark' | 'vs'
  path: string
}

export interface PackageDef {
  contributes?: {
    themes?: ThemeDef[]
  }
}
