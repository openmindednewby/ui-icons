import { ICON_PATHS, type IconName } from './iconPaths';

describe('ICON_PATHS', () => {
  const names = Object.keys(ICON_PATHS) as IconName[];

  it('contains icon definitions', () => {
    expect(names.length).toBeGreaterThan(0);
  });

  it('every icon has at least one path with a non-empty `d`', () => {
    for (const name of names) {
      const def = ICON_PATHS[name];
      expect(Array.isArray(def.paths)).toBe(true);
      expect(def.paths.length).toBeGreaterThan(0);
      for (const p of def.paths) {
        expect(typeof p.d).toBe('string');
        expect(p.d.length).toBeGreaterThan(0);
      }
    }
  });
});

const D1_ICONS = ['gamepad', 'keyboard', 'touch', 'check', 'checkCircle', 'star', 'trophy', 'search', 'plus', 'minus',
  'lock', 'shield', 'external', 'listView', 'railsView', 'mood', 'clock', 'download', 'upload', 'alert'] as const;

describe('D1 console-surface icons', () => {
  it.each(D1_ICONS)('%s is registered with at least one 24x24 path', (name) => {
    const def = ICON_PATHS[name];
    expect(def.paths.length).toBeGreaterThan(0);
    for (const p of def.paths) expect(p.d).toMatch(/^M[\d.\s-]/);
  });
});

const D5_ROW_ACTION_ICONS = ['externalLink', 'chat', 'ticket', 'archive', 'restore', 'share', 'dots'] as const;

describe('D5 row-action icons', () => {
  it.each(D5_ROW_ACTION_ICONS)('%s is registered with at least one 24x24 path', (name) => {
    const def = ICON_PATHS[name];
    expect(def.paths.length).toBeGreaterThan(0);
    for (const p of def.paths) expect(p.d).toMatch(/^M[\d.\s-]/);
  });

  it('externalLink is the existing `external` glyph, not a second style', () => {
    expect(ICON_PATHS.externalLink).toBe(ICON_PATHS.external);
  });
});

describe('colour inheritance', () => {
  const names = Object.keys(ICON_PATHS) as IconName[];

  // SvgIcon passes `fill={color}` to every <Path>. A path that carried its own
  // fill/stroke would render a fixed colour and repeat the emoji defect the D5
  // redesign exists to remove.
  it('no icon path declares its own fill or stroke', () => {
    for (const name of names) {
      for (const p of ICON_PATHS[name].paths) {
        expect(Object.keys(p).sort()).toEqual(
          expect.arrayContaining(['d']),
        );
        expect(p).not.toHaveProperty('fill');
        expect(p).not.toHaveProperty('stroke');
      }
    }
  });

  // Guards the path data itself: an unclosed subpath or a stray command renders
  // as a blank or mangled glyph rather than throwing, so nothing else catches it.
  // Small-size legibility (28/36/44) is a RENDERING property and is NOT asserted
  // here — it was verified by rendering the glyphs at all three sizes.
  it('row-action glyphs use only known path commands and close every subpath', () => {
    for (const name of D5_ROW_ACTION_ICONS) {
      for (const p of ICON_PATHS[name].paths) {
        expect(p.d).toMatch(/^[MmLlHhVvCcSsQqTtAaZz0-9.\s-]+$/);
        expect(p.d.endsWith('z') || p.d.endsWith('Z')).toBe(true);
      }
    }
  });
});
