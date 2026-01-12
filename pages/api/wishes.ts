import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const wishesPath = path.join(process.cwd(), 'public', 'wishes.json');
      console.log('Wishes path:', wishesPath);
      console.log('New wish:', req.body);
      
      const existingWishes = JSON.parse(fs.readFileSync(wishesPath, 'utf8'));
      const newWish = req.body;
      
      existingWishes.unshift(newWish);
      fs.writeFileSync(wishesPath, JSON.stringify(existingWishes, null, 2));
      
      console.log('Wish saved successfully');
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error saving wish:', error);
      res.status(500).json({ error: 'Failed to save wish' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}