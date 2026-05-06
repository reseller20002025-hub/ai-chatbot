export default function handler(req, res) {
  const msg = req.body.message?.toLowerCase();

  let reply = "I don't know that yet.";

  if (msg.includes("hello")) reply = "Hey 👋";
  if (msg.includes("how are you")) reply = "I'm good!";
  if (msg.includes("your name")) reply = "I'm your AI chatbot.";

  res.status(200).json({ reply });
}
