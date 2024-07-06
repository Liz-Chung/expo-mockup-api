import { audience_types } from '../../data';
import cors, { runMiddleware } from '../../corsMiddleware';

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const urlParts = req.url.split('/');
  const id = urlParts[urlParts.length - 1];

  if (!id) {
    return res.status(400).json({ message: 'ID is required' });
  }

  const audienceTypeId = parseInt(id, 10);

  if (isNaN(audienceTypeId)) {
    return res.status(400).json({ message: 'ID must be a valid number' });
  }

  if (req.method === 'GET') {
    const audienceType = audience_types.find(type => type.audience_type_id === audienceTypeId);
    if (audienceType) {
      res.status(200).json(audienceType);
    } else {
      res.status(404).json({ message: 'Audience type not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
