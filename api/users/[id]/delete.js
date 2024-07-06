import { users } from '../../data';
import cors, { runMiddleware } from '../../corsMiddleware';

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const urlParts = req.url.split('/');
  const id = urlParts[urlParts.length - 1];

  if (!id) {
    return res.status(400).json({ message: 'ID is required' });
  }

  const userId = parseInt(id, 10);

  if (isNaN(userId)) {
    return res.status(400).json({ message: 'ID must be a valid number' });
  }

  if (req.method === 'DELETE') {
    const userIndex = users.findIndex(user => user.user_id === userId);
    if (userIndex > -1) {
      const [deletedUser] = users.splice(userIndex, 1);
      res.status(200).json(deletedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
