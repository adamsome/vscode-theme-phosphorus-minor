import {
  ThemeMode,
  ThemeSubtype,
  WorkbenchColors,
  WorkbenchSemanticColors,
} from './models'
import PALETTE from './palette'
import { opacity } from './util'
import applyWorkbenchFallbacks from './workbench-fallbacks'

const p = PALETTE
const TRANSPARENT = '#00000000'

const DEFAULT_WORKBENCH_SEMANTIC_COLORS: WorkbenchSemanticColors = {
  // Background
  bg1: p.black,
  bg2: p.stone[975],
  bg3: p.stone[950],
  bg4: p.stone[900],
  bgLit1: p.phosphorus[900],
  bgLit2: p.phosphorus[800],
  // Foreground
  fg1: p.stone[300],
  fg2: p.stone[400],
  fg3: p.stone[500],
  fgLit: p.phosphorus[500],
  // Border
  border1: p.stone[900],
  border2: p.stone[800],
  // General UI
  primary: p.phosphorus[500],
  secondary: p.emerald[600],
  findMatch: p.seaGreen[600],
  highlightWord: p.teal[600],
  cursor: p.phosphorus[500],
  // Semantic colors
  fgError: p.red[600],
  fgWarn: p.emerald[300],
  fgInfo: p.teal[500],
  bgDelete: p.red[950],
  fgDelete: p.red[900],
  bgAdd: p.phosphorus[900],
  fgAdd: p.phosphorus[600],
  fgModify: p.teal[500],
  fgConflict: p.emerald[300],
  // Terminal colors
  black: p.black,
  brightBlack: p.stone[950],
  red: p.red[800],
  brightRed: p.red[600],
  green: p.seaGreen[700],
  brightGreen: p.seaGreen[500],
  yellow: '#a09b4e',
  brightYellow: '#d9d385',
  blue: '#55757f',
  brightBlue: '#93a7af',
  magenta: p.red[500],
  brightMagenta: p.red[300],
  cyan: '#60a2a3',
  brightCyan: '#9ad7d8',
  white: p.stone[300],
  brightWhite: p.stone[100],
}

function buildColors(
  mode: ThemeMode,
  subtype: ThemeSubtype
): WorkbenchSemanticColors {
  switch (mode) {
    case 'vs': {
      throw new Error(`UI Theme '${mode}' (light-mode) not supported.`)
    }
    case 'vs-dark':
    default: {
      switch (subtype) {
        case 'medium':
        default: {
          return DEFAULT_WORKBENCH_SEMANTIC_COLORS
        }
      }
    }
  }
}

export default function buildWorkbenchColors(
  mode: ThemeMode,
  subtype: ThemeSubtype
) {
  const c = buildColors(mode, subtype)

  const workbench: Partial<WorkbenchColors> = {
    foreground: c.fg3,
    'icon.foreground': opacity(85, c.fg3),
    focusBorder: c.primary,
    'selection.background': opacity(75, c.bgLit2),
    'textPreformat.foreground': c.secondary,
    'textLink.foreground': c.primary,
    'button.background': c.bgLit2,
    'button.foreground': c.fg1,
    'input.foreground': c.fg2,
    'input.border': c.border2,
    'badge.foreground': c.bg1,
    'list.activeSelectionBackground': c.bgLit1,
    'list.activeSelectionForeground': c.fg1,
    'list.inactiveSelectionForeground': c.fg2,
    'list.highlightForeground': c.fgLit,
    'list.hoverForeground': c.fg2,
    'list.hoverBackground': opacity(33, c.bgLit1),
    'list.dropBackground': opacity(50, c.bgLit2),
    'sideBar.background': c.bg2,
    'sideBar.border': c.border1,
    'sideBarTitle.foreground': c.fg2,
    'activityBar.background': c.bg3,
    'activityBar.foreground': c.fg2,
    'activityBar.activeBorder': c.primary,
    'editorGroup.border': c.border1,
    'tab.inactiveForeground': c.fg3,
    'tab.unfocusedActiveForeground': c.fg3,
    'editor.background': c.bg1,
    'editor.foreground': c.fg2,
    'editorLineNumber.activeForeground': c.cursor,
    'editorCursor.foreground': c.cursor,
    'editor.wordHighlightBackground': opacity(20, c.highlightWord),
    'editor.findMatchBackground': opacity(15, c.findMatch),
    'editor.findMatchBorder': opacity(50, c.primary),
    'editor.findMatchHighlightBorder': opacity(50, c.primary),
    'editorRuler.foreground': c.border1,
    'editorOverviewRuler.border': TRANSPARENT,
    'editorOverviewRuler.modifiedForeground': c.fgModify,
    'editorOverviewRuler.addedForeground': c.fgAdd,
    'editorOverviewRuler.deletedForeground': c.fgDelete,
    // 'editorOverviewRuler.currentContentForeground': p.teal[800],
    // 'editorOverviewRuler.incomingContentForeground': p.emerald[800],
    'editorError.foreground': c.fgError,
    'editorWarning.foreground': c.fgWarn,
    'editorInfo.foreground': c.fgInfo,
    'editorBracketMatch.border': TRANSPARENT,
    'editorBracketHighlight.foreground1': p.emerald[700],
    'editorBracketHighlight.foreground2': p.emerald[600],
    'editorBracketHighlight.foreground3': p.mint[500],
    'editorBracketHighlight.foreground4': p.teal[500],
    'editorBracketHighlight.foreground5': p.seaGreen[500],
    'minimap.findMatchHighlight': c.primary,
    'editorWidget.background': c.bg4,
    'editorWidget.foreground': c.fg2,
    'editorWidget.border': c.border2,
    'editorStickyScroll.background': c.bg3,
    'editorStickyScrollHover.background': c.bg4,
    'diffEditor.insertedTextBackground': c.bgAdd,
    'diffEditor.removedTextBackground': c.bgDelete,
    'peekViewEditor.background': opacity(75, c.bg4),
    'peekViewEditorGutter.background': opacity(75, c.bg4),
    'pickerGroup.foreground': c.primary,
    'statusBar.debuggingBackground': c.primary,
    'statusBar.debuggingForeground': p.black,
    'statusBar.focusBorder': TRANSPARENT,
    'terminal.ansiBlack': c.black,
    'terminal.ansiBrightBlack': c.brightBlack,
    'terminal.ansiRed': c.red,
    'terminal.ansiBrightRed': c.brightRed,
    'terminal.ansiGreen': c.green,
    'terminal.ansiBrightGreen': c.brightGreen,
    'terminal.ansiYellow': c.yellow,
    'terminal.ansiBrightYellow': c.brightYellow,
    'terminal.ansiBlue': c.blue,
    'terminal.ansiBrightBlue': c.brightBlue,
    'terminal.ansiMagenta': c.magenta,
    'terminal.ansiBrightMagenta': c.brightMagenta,
    'terminal.ansiCyan': c.cyan,
    'terminal.ansiBrightCyan': c.brightCyan,
    'terminal.ansiWhite': c.white,
    'terminal.ansiBrightWhite': c.brightWhite,
    'titleBar.activeBackground': c.bg4,
    'titleBar.activeForeground': c.fg2,
    'titleBar.border': c.border2,
    'gitDecoration.conflictingResourceForeground': c.fgConflict,
    'notifications.background': opacity(95, c.bg4),
    'notifications.border': c.border2,
    'extensionIcon.starForeground': c.primary,
    'extensionIcon.verifiedForeground': c.secondary,
  }

  return applyWorkbenchFallbacks(workbench)
}
