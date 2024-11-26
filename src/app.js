import InputHandler from './inputHandler.js';
import CropDataQuery from './cropDataQuery.js';
import GeminiAI from './geminiAI.js';

(async function main() {
  try {
    const state = await InputHandler.getValidatedState();
    const crop = await InputHandler.getValidatedCrop();

    const cropDataQuery = new CropDataQuery();
    const data = await cropDataQuery.fetchCropData(state, crop);

    if (data.length === 0) {
      console.error('No data found for the specified state and crop.');
      process.exit(1);
    }

    const geminiAI = new GeminiAI();
    const prompt = geminiAI.formatPrompt(state, crop, data);
    const response = await geminiAI.generateContent(prompt);

    console.log('\nCropredict:\n\n', response);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
