export const GOOGLE_REVIEWS_EMBED_ID = "25669158";

const GOOGLE_REVIEWS_FEED_URL = `https://data.accentapi.com/feed/${GOOGLE_REVIEWS_EMBED_ID}.json`;

export type GoogleReview = {
  id: string;
  reviewer_name: string;
  reviewer_link: string;
  reviewer_photo_link: string;
  review_date_time: string;
  rating: string;
  review_text: string;
};

type GoogleReviewsFeed = {
  reviews?: GoogleReview[];
};

export function cleanReviewText(value: string) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function truncateReviewText(value: string, maxWords = 30) {
  const text = cleanReviewText(value);
  const words = text.split(" ");

  if (words.length <= maxWords) {
    return { text, truncated: false };
  }

  return { text: `${words.slice(0, maxWords).join(" ")}...`, truncated: true };
}

export async function fetchGoogleReviews(): Promise<GoogleReview[]> {
  const response = await fetch(GOOGLE_REVIEWS_FEED_URL);

  if (!response.ok) {
    throw new Error("Unable to load Google reviews");
  }

  const data = (await response.json()) as GoogleReviewsFeed;

  return (data.reviews ?? [])
    .filter((review) => Number(review.rating) >= 3 && Boolean(review.review_text))
    .sort((a, b) => new Date(b.review_date_time).getTime() - new Date(a.review_date_time).getTime());
}
