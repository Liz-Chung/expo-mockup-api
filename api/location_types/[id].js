import { location_types } from '../../data';
import cors, { runMiddleware } from '../../corsMiddleware';

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const urlParts = req.url.split('/');
  const id = urlParts[urlParts.length - 1];

  if (!id) {
    return res.status(400).json({ message: 'ID is required' });
  }

  const locationTypeId = parseInt(id, 10);

  if (isNaN(locationTypeId)) {
    return res.status(400).json({ message: 'ID must be a valid number' });
  }

  if (req.method === 'GET') {
    const locationType = location_types.find(type => type.location_type_id === locationTypeId);
    if (locationType) {
      res.status(200).json(locationType);
    } else {
      res.status(404).json({ message: 'Location type not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
