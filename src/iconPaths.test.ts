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
