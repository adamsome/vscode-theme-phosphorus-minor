import PALETTE from './palette'
import WorkbenchConfig from './workbench'
import TokensConfig from './tokens'
import { PackageDef, Theme, ThemeDef } from './models'
import { readJson, writeJson } from './util'

function build(def: ThemeDef) {
  const workbench = WorkbenchConfig(PALETTE)
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
