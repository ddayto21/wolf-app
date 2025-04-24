// tests/posts.test.ts
import { posts } from "../fixtures/posts";
import { Post } from "../types/post";

/**
 * Ensures the posts fixture returns exactly 30 mock posts.
 */
test("should return 30 posts", () => {
  expect(posts).toHaveLength(30);
});

/**
 * Verifies each post has a valid structure matching the Post interface.
 */
test("should have valid structure for each post", () => {
  posts.forEach((post: Post) => {
    expect(typeof post.id).toBe("string");
    expect(typeof post.title).toBe("string");
    expect(typeof post.description).toBe("string");
    expect(typeof post.image).toBe("string");
    expect(typeof post.createdAt).toBe("string");
  });
});

/**
 * Confirms each image URL is a valid pravatar placeholder URL.
 */
test("should use valid pravatar URLs for images", () => {
  posts.forEach((post: Post, index: number) => {
    expect(post.image).toBe(`https://i.pravatar.cc/150?img=${index + 1}`);
  });
});

/**
 * Ensures the createdAt timestamps are valid ISO strings.
 */
test("should have valid ISO timestamps in createdAt", () => {
  posts.forEach((post) => {
    const date = new Date(post.createdAt);
    expect(date.toISOString()).toBe(post.createdAt);
  });
});

/**
 * Checks that categories are among the expected category list.
 */
test("should assign category from expected set", () => {
  const validCategories = [
    "hiring",
    "consulting",
    "growth",
    "tech",
    "staffing",
  ];
  posts.forEach((post) => {
    expect(validCategories).toContain(post.category);
  });
});
