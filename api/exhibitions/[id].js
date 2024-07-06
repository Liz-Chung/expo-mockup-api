import { exhibitions } from '../../data';
import cors, { runMiddleware } from '../../corsMiddleware';

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const urlParts = req.url.split('/');
  const id = urlParts[urlParts.length - 1];

  if (!id) {
    return res.status(400).json({ message: 'ID is required' });
  }

  const exhibitionId = parseInt(id, 10);

  if (isNaN(exhibitionId)) {
    return res.status(400).json({ message: 'ID must be a valid number' });
  }

  if (req.method === 'GET') {
    const exhibition = exhibitions.find(exh => exh.exhibition_id === exhibitionId);
    if (exhibition) {
      res.status(200).json(exhibition);
    } else {
      res.status(404).json({ message: 'Exhibition not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
