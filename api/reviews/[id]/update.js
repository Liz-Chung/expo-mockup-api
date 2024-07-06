import { reviews } from '../../../data';
import cors, { runMiddleware } from '../../../corsMiddleware';

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const urlParts = req.url.split('/');
  const id = urlParts[urlParts.length - 1];

  if (!id) {
    return res.status(400).json({ message: 'ID is required' });
  }

  const reviewId = parseInt(id, 10);

  if (isNaN(reviewId)) {
    return res.status(400).json({ message: 'ID must be a valid number' });
  }

  if (req.method === 'PUT') {
    const review = reviews.find(review => review.review_id === reviewId);
    if (review) {
      const { rating, comment } = req.body;
      review.rating = rating !== undefined ? rating : review.rating;
      review.comment = comment || review.comment;
      review.updated_at = new Date().toISOString();
      res.status(200).json(review);
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
