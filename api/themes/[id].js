import { themes } from '../../data';
import cors, { runMiddleware } from '../../corsMiddleware';

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const urlParts = req.url.split('/');
  const id = urlParts[urlParts.length - 1];

  if (!id) {
    return res.status(400).json({ message: 'ID is required' });
  }

  const themeId = parseInt(id, 10);

  if (isNaN(themeId)) {
    return res.status(400).json({ message: 'ID must be a valid number' });
  }

  if (req.method === 'GET') {
    const theme = themes.find(thm => thm.theme_id === themeId);
    if (theme) {
      res.status(200).json(theme);
    } else {
      res.status(404).json({ message: 'Theme not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
