import fs from 'fs/promises';
import path from 'path';

const getRandomQuote = (quotes: string[]): string => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

// const getWeeklyQuote = (quotes: string[]): string => {
//     const today = new Date();
//     const startOfYear = new Date(today.getFullYear(), 0, 1);
//     const weekNumber = Math.ceil((today - startOfYear) / (7 * 24 * 60 * 60 * 1000));
//     return quotes[weekNumber % quotes.length];
// };

const getQuote = async (): Promise<string> => {
    try {
        const jsonFilePath = path.resolve('src/assets/quotes.json');
        const jsonData = await fs.readFile(jsonFilePath, 'utf-8');
        const quotes = JSON.parse(jsonData);
        return getRandomQuote(quotes);
    } catch (error) {
        throw new Error(`Error reading or processing the JSON file: ${error}`);
    }
};

export default getQuote;
