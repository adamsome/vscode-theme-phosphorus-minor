import { PackageDef, Theme, ThemeDef } from './models'
import PALETTE from './palette'
import TokensConfig from './tokens'
import { readJson, writeJson } from './util'
import buildWorkbenchColors from './workbench-colors'

function build(def: ThemeDef) {
  const workbench = buildWorkbenchColors(def.uiTheme, def.subtype)
  const tokens = TokensConfig(PALETTE)

  const theme: Theme = {
    name: def.label,
    type: def.uiTheme === 'vs-dark' ? 'dark' : 'light',
    semanticHighlighting: true,
    colors: workbench,
    tokenColors: tokens,
  }

  console.log(`Write '${theme.name}' (${theme.type}) to '${def.path}'`)

  writeJson(def.path, theme)
}

const pkg = readJson<PackageDef>('./package.json')
if (pkg && pkg.contributes && pkg.contributes.themes) {
  pkg.contributes.themes.forEach(build)
} else {
  console.error('Could not find themes in package.json to make.')
}
