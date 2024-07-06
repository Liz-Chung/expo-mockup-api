import { wishlists } from '../../data';
import cors, { runMiddleware } from '../../corsMiddleware';

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const urlParts = req.url.split('/');
  const id = urlParts[urlParts.length - 1];

  if (!id) {
    return res.status(400).json({ message: 'ID is required' });
  }

  const wishlistId = parseInt(id, 10);

  if (isNaN(wishlistId)) {
    return res.status(400).json({ message: 'ID must be a valid number' });
  }

  if (req.method === 'PUT') {
    const wishlist = wishlists.find(item => item.wishlist_id === wishlistId);
    if (wishlist) {
      const { user_id, exhibition_id } = req.body;
      wishlist.user_id = user_id || wishlist.user_id;
      wishlist.exhibition_id = exhibition_id || wishlist.exhibition_id;
      wishlist.updated_at = new Date().toISOString();
      res.status(200).json(wishlist);
    } else {
      res.status(404).json({ message: 'Wishlist item not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
