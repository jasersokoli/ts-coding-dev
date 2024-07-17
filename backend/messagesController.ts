import { Request, Response } from 'express';

let messages = [
  { text: "Hello World", status: "sent", timestamp: new Date().toISOString() },
];

export const getMessages = (req: Request, res: Response) => {
  res.status(200).json({ messages });
};

export const sendMessage = (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const newMessage = { text, status: 'sent', timestamp: new Date().toISOString() };
  messages.push(newMessage);
  res.status(200).json({ message: 'Message sent successfully' });
};
