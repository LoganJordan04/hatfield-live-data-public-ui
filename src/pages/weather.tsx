import React, { useState } from 'react';

export default function Weather() {
    const weatherUrl = 'https://ahi.ceoas.oregonstate.edu/'
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleScrape = async () => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await fetch('/api/scrape', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // Send the hardcoded URL in the body
                body: JSON.stringify({ url: weatherUrl })
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Failed to scrape');
            
            setData(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h2>Scraper Test</h2>
            <p>Target URL: <code>{weatherUrl}</code></p>
            
            <button 
                onClick={handleScrape} 
                disabled={loading}
                style={{ padding: '10px 20px', cursor: 'pointer' }}
            >
                {loading ? 'Scraping...' : 'Scrape URL'}
            </button>

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            {data && (
                <div style={{ marginTop: '1rem', background: '#f4f4f4', padding: '1rem', borderRadius: '5px' }}>
                    <h3>Results:</h3>
                    <p><strong>Title:</strong> {data.title}</p>
                    <p><strong>Headings:</strong></p>
                    <ul>
                        {data.headings?.map((h: string, index: number) => (
                            <li key={index}>{h}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}