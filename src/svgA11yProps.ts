/**
 * Builds the accessibility / test props handed to react-native-svg's `<Svg>`.
 *
 * On web, react-native-svg renders through react-native-web's `createElement`,
 * which maps `testID` and `aria-label` but has no mapping for
 * `accessibilityHint`. The unmapped prop is spread onto the raw `<svg>` DOM
 * node and React warns "does not recognize the `accessibilityHint` prop" on
 * every screen that renders an icon. So on web the hint is dropped and the
 * label goes out as `aria-label`; native keeps the RN accessibility props.
 */
export interface SvgA11yInput {
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

export interface SvgA11yProps {
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  'aria-label'?: string;
}

const WEB_OS = 'web';

export const buildSvgA11yProps = (
  platformOS: string,
  { testID, accessibilityLabel, accessibilityHint }: SvgA11yInput,
): SvgA11yProps => {
  if (platformOS === WEB_OS) return { testID, 'aria-label': accessibilityLabel };

  return { testID, accessibilityLabel, accessibilityHint };
};
