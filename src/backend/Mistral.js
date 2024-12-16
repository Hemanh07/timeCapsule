const express = require('express');
const { HfInference } = require('@huggingface/inference');
const cors = require('cors');

const app = express();
const client = new HfInference('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');
const memory = []; 

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  const { message,userName } = req.body;
  console.log(userName)
  memory.push({ role: 'user', content: message });
  try {
    const chatCompletion = await client.chatCompletion({
      model: 'mistralai/Mistral-7B-Instruct-v0.3',
      messages: [
        {
          role: 'system',
          content: `You are ${userName} from the future. Respond concisely, offering wisdom and advice from the future as a more experienced version of ${userName} in a more casual and human way.`
        },
        ...memory
      ],
      max_tokens: 150, 
    });

    const botReply = chatCompletion.choices[0].message.content;

    memory.push({ role: 'assistant', content: botReply });

    res.json({ reply: botReply });
  } catch (error) {
    console.error('Error during chat with Hugging Face model:', error);
    res.status(500).json({ error: 'Failed to process the chat' });
  }
});

const PORT = 5001; 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
