import express from 'express';
import cors from 'cors';
import axios from 'axios';
import * as cheerio from 'cheerio';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/scrape', async (req: express.Request, res: express.Response) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'URL is required' });

    try {
        const { data: html } = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        });
        const $ = cheerio.load(html);
        const title = $('title').text();
        const headings: string[] = [];
        
        $('h1, h2').each((_, el) => {
            headings.push($(el).text().trim());
        });

        res.json({ success: true, title, headings, rawHtmlLength: html.length });
    } catch (error) {
        res.status(500).json({ error: 'Failed to scrape URL', details: (error as Error).message });
    }
});

app.listen(5000, () => console.log('Server is running on port 5000'));