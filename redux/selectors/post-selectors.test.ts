import { selectFilteredPosts } from './post-selectors';
import { RootState } from '../../redux/store';
import { posts, generateMockPosts } from '../../fixtures/posts';
import type { Post } from '../../types/post';

describe('selectFilteredPosts with fixture data', () => {
  const buildFixtureState = (overrides: Partial<RootState['posts']>): RootState => ({
    posts: {
      all: posts,
      search: '',
      category: null,
      sort: 'newest',
      ...overrides,
    },
  });

  test('sorts posts by newest first (fixture)', () => {
    const sorted = selectFilteredPosts(buildFixtureState({ sort: 'newest' }));
    expect(new Date(sorted[0].createdAt).getTime()).toBeGreaterThanOrEqual(new Date(sorted[1].createdAt).getTime());
  });

  test('sorts posts by oldest first (fixture)', () => {
    const sorted = selectFilteredPosts(buildFixtureState({ sort: 'oldest' }));
    expect(new Date(sorted[0].createdAt).getTime()).toBeLessThanOrEqual(new Date(sorted[1].createdAt).getTime());
  });

  test('sorts posts by title A-Z (fixture)', () => {
    const sorted = selectFilteredPosts(buildFixtureState({ sort: 'title-asc' }));
    expect(sorted[0].title.localeCompare(sorted[1].title)).toBeLessThanOrEqual(0);
  });

  test('sorts posts by title Z-A (fixture)', () => {
    const sorted = selectFilteredPosts(buildFixtureState({ sort: 'title-desc' }));
    expect(sorted[0].title.localeCompare(sorted[1].title)).toBeGreaterThanOrEqual(0);
  });
});

describe('selectFilteredPosts with mock data', () => {
  const mockPosts: Post[] = generateMockPosts(2, new Date('2023-01-02T10:00:00Z'));

  // Swap titles to guarantee A-Z/Z-A behavior
  mockPosts[0].title = 'Beta';
  mockPosts[1].title = 'Alpha';

  const buildMockState = (sort: 'newest' | 'oldest' | 'title-asc' | 'title-desc'): RootState => ({
    posts: {
      all: mockPosts,
      search: '',
      category: null,
      sort,
    },
  });

  test('sorts by newest first (mock)', () => {
    const result = selectFilteredPosts(buildMockState('newest'));
    expect(result[0].id).toBe('1');
  });

  test('sorts by oldest first (mock)', () => {
    const result = selectFilteredPosts(buildMockState('oldest'));
    expect(result[0].id).toBe('2');
  });

  test('sorts by title A-Z (mock)', () => {
    const result = selectFilteredPosts(buildMockState('title-asc'));
    expect(result[0].title).toBe('Alpha');
  });

  test('sorts by title Z-A (mock)', () => {
    const result = selectFilteredPosts(buildMockState('title-desc'));
    expect(result[0].title).toBe('Beta');
  });
});