import { VertexAI, HarmCategory, HarmBlockThreshold } from '@google-cloud/vertexai';
import { PROJECT_ID, LOCATION, MODEL } from './config.js';

class GeminiAI {
  constructor() {
    this.vertexAI = new VertexAI({ project: PROJECT_ID, location: LOCATION });
    this.modelName = MODEL;
  }

  formatPrompt(state, crop, data) {
    return `
      Given the following crop yield data for the Indian state "${state}" and crop "${crop}" in JSON:
      Keys' description:
      - Crop_Year: The year in which the crop was grown
      - Season: The specific cropping season (e.g., Kharif, Rabi, Whole Year)
      - Area: The total land area (in hectares) under cultivation for the specific crop
      - Production: The quantity of crop production (in metric tons)
      - Annual_Rainfall: The annual rainfall received in the crop-growing region (in mm)
      - Fertilizer: The total amount of fertilizer used for the crop (in kilograms)
      - Pesticide: The total amount of pesticide used for the crop (in kilograms)
      - Yield: Production per unit area

      Data:
      ${JSON.stringify(data)}

      Based on this historical data, predict the best time to grow this crop in the future.
    `;
  }

  async generateContent(prompt) {
    try {
      const generativeModel = this.vertexAI.getGenerativeModel({
        model: this.modelName,
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
          },
        ],
        systemInstruction: {
          role: 'system',
          parts: [
            {
              text: `You are a crops expert with extensive knowledge of Indian geography, rainfall data, seasons, and weather patterns. Given the historical crop data of Indian States, you can  Avoid providing code or explicit calculations; instead, share the calculated insights directly. Don't ask for more data.`,
            },
          ],
        },
      });

      const request = {
        contents: [
          { role: 'user', parts: [{ text: prompt }] },
        ],
      };

      const result = await generativeModel.generateContent(request);
      return result.response.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error generating content with Gemini:', error.message);
      throw error;
    }
  }
}

export default GeminiAI;
