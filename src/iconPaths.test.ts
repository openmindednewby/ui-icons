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
