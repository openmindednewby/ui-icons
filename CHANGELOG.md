# Changelog

## 1.2.0

18 new icons for console-style surfaces (hint bars, mood chips, view toggles, store links, error
wells): `gamepad`, `keyboard`, `touch`, `check` (alias of `checkmark`), `checkCircle`, `star`,
`trophy`, `search`, `plus`, `minus`, `lock`, `external`, `listView`, `railsView`, `mood`, `clock`,
`upload`, `alert`. `shield` and `download` already existed and are unchanged. All are 24x24 filled
paths at the set's 2px weight, brand-agnostic (no platform or storefront marks).

## 1.0.0

Initial release (Capability Wave C1, batch 4). Extracted the proven (erevna+katalogos identical)
icon system: `SvgIcon` + the `ICON_PATHS` registry + `IconName`. Unblocks `@dloizides/legal-ui`
(privacy/terms modals) and the deferred ModalShell.
