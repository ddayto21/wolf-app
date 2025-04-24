// fixtures/posts.ts
import type { Post } from '../types/post';

/**
 * Base configuration used to generate fixture posts.
 */
const users = [
  'teamtalent', 'hirehub', 'staffsource', 'consultly', 'growthforce',
  'scalehire', 'bridgeconsult', 'jobwise', 'peakpeople', 'nextstep',
];

const descriptions = [
  'We just helped a fintech client scale their dev team in under 2 weeks 🚀',
  'Looking to fill 5 senior backend roles for a growing startup. DM us!',
  'New case study live: How we saved our client 20% in hiring costs.',
  'Talent is everything. Let us help you find the right fit.',
  'From sourcing to onboarding—we’ve got you covered.',
  'Our candidate pool just grew by 300+ top engineers 💼',
  'Hiring shouldn’t be hard. We make it seamless.',
  'Looking to pivot into consulting? Let’s talk.',
  'We just closed our 100th successful placement this year!',
  'Culture-fit hires that perform—that’s what we specialize in.',
];

const categories = ['hiring', 'consulting', 'growth', 'tech', 'staffing'];

/**
 * Generates a configurable array of mock Post objects.
 * 
 * @param count - Number of posts to generate
 * @param startTime - Timestamp (Date or string) to use as base for createdAt
 * @param spacingHours - Time difference between posts (default: 1hr)
 */
export function generateMockPosts(count: number, startTime = new Date(), spacingHours = 1): Post[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${i + 1}`,
    title: users[i % users.length],
    description: descriptions[i % descriptions.length],
    image: `https://i.pravatar.cc/150?img=${i + 1}`,
    createdAt: new Date(
      new Date(startTime).getTime() - i * spacingHours * 3600 * 1000
    ).toISOString(),
    category: categories[i % categories.length],
  }));
}

/**
 * Default 30-post fixture used in dev environments and HomeScreen.
 */
export const posts: Post[] = generateMockPosts(30);