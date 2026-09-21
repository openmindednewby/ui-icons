/**
 * Lightweight SVG icon component.
 *
 * Renders icons from the `iconPaths` registry using react-native-svg.
 * Zero font loading, zero network requests — each icon is a few hundred
 * bytes of inline SVG path data.
 */
import React from 'react';

import { Platform } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { ICON_PATHS } from './iconPaths';
import { buildSvgA11yProps } from './svgA11yProps';

import type { IconName } from './iconPaths';

const DEFAULT_SIZE = 24;
const DEFAULT_COLOR = '#000000';
const VIEWBOX = '0 0 24 24';

export interface SvgIconProps {
  name: IconName;
  size?: number;
  color?: string;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export const SvgIcon = ({
  name,
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
  testID,
  accessibilityLabel,
  accessibilityHint,
}: SvgIconProps): React.ReactElement => {
  const iconDef = ICON_PATHS[name];
  const a11yProps = buildSvgA11yProps(Platform.OS, { testID, accessibilityLabel, accessibilityHint });

  return (
    <Svg
      {...a11yProps}
      fill={color}
      height={size}
      viewBox={VIEWBOX}
      width={size}
    >
      {iconDef.paths.map((p) => (
        <Path
          key={p.d}
          d={p.d}
          fill={color}
          fillRule={p.fillRule}
        />
      ))}
    </Svg>
  );
};

export default SvgIcon;
