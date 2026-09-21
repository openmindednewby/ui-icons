import { buildSvgA11yProps } from './svgA11yProps';

const INPUT = { testID: 'icon-x', accessibilityLabel: 'Close', accessibilityHint: 'Closes the dialog' };

describe('buildSvgA11yProps', () => {
  it('never passes accessibilityHint on web (it would leak onto the <svg> DOM node)', () => {
    const props = buildSvgA11yProps('web', INPUT);

    expect(props).not.toHaveProperty('accessibilityHint');
    expect(props).not.toHaveProperty('accessibilityLabel');
    expect(props).toEqual({ testID: 'icon-x', 'aria-label': 'Close' });
  });

  it('keeps the RN accessibility props on native', () => {
    expect(buildSvgA11yProps('ios', INPUT)).toEqual(INPUT);
    expect(buildSvgA11yProps('android', INPUT)).toEqual(INPUT);
  });

  it('passes undefined through without inventing values', () => {
    expect(buildSvgA11yProps('web', {})).toEqual({ testID: undefined, 'aria-label': undefined });
  });
});
