# @dloizides/ui-icons

Lightweight inline-SVG icon component + icon-path registry for the dloizides.com RN-web portfolio.
Zero font loading, zero network requests — each icon is a few hundred bytes of inline SVG path data,
rendered with `react-native-svg`. Brand-agnostic: colour + size are props.

## Install

```bash
npm install @dloizides/ui-icons react-native-svg
```

Peer dependencies: `react >= 18`, `react-native >= 0.74`, `react-native-svg >= 13`.

## Usage

```tsx
import { SvgIcon, type IconName } from '@dloizides/ui-icons';

<SvgIcon name="close" size={18} color="#333" />
```

`ICON_PATHS` (the raw registry) and the `IconName` union are also exported.

## License

MIT
