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

  if (req.method === 'PUT') {
    const user = users.find(user => user.user_id === userId);
    if (user) {
      const { name, email, password, last_login } = req.body;
      user.name = name || user.name;
      user.email = email || user.email;
      user.password = password || user.password;
      user.updated_at = new Date().toISOString();
      user.last_login = last_login || user.last_login;
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
