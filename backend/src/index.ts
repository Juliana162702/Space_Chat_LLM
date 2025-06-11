import dotenv from 'dotenv';
dotenv.config();
console.log('OpenRouter API key:', process.env.OPENROUTER_API_KEY?.slice(0, 5) + '...');


import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

interface ChatRequest {
  message: string;
}

const SYSTEM_PROMPT = `Você é um especialista em Astronomia. Responda com base científica, de forma clara e educativa. Explique conceitos sobre o universo, estrelas, planetas, buracos negros, galáxias, sistema solar e outros fenômenos astronômicos.`;
const MODEL = "google/gemma-3n-e4b-it:free";

app.post('/chat', async (req: Request<any, any, ChatRequest>, res: Response) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Mensagem é obrigatória.' });
  }

  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: MODEL,
        messages: [
          { role: 'user', content: `${SYSTEM_PROMPT}\n\n${message}` }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    const reply = response.data.choices?.[0]?.message?.content;

    if (!reply) {
      return res.status(500).json({ error: 'Resposta vazia da IA.' });
    }

    res.json({ reply: reply.trim() });

  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      // Mostra o erro detalhado retornado pelo OpenRouter
      console.error('Erro ao consultar o OpenRouter:', err.response?.data || err.message);
      return res.status(err.response?.status || 500).json({
        error: 'Erro ao consultar o OpenRouter.',
        details: err.response?.data || err.message,
      });
    } else {
      console.error('Erro inesperado:', err);
      return res.status(500).json({ error: 'Erro inesperado.', details: String(err) });
    }
  }
});
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
