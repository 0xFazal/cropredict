import { VALID_STATES, VALID_CROPS } from './config.js';
import readline from 'readline'

class InputHandler {
  static askQuestion(query) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve) =>
      rl.question(query, (answer) => {
        rl.close();
        resolve(answer.trim().toUpperCase());
      })
    );
  }

  static async getValidatedState() {
    let state;
    do {
      state = await this.askQuestion('Enter State (Valid: All Indian States except Rajasthan): ');
      if (!VALID_STATES.includes(state)) {
        console.log(`Invalid state: ${state}. Please enter a valid state. Valid States: `, VALID_STATES);
      }
    } while (!VALID_STATES.includes(state));
    return state;
  }

  static async getValidatedCrop() {
    let crop;
    do {
      crop = await this.askQuestion('Enter Crop (e.g., Rice, Wheat, etc.): ');
      if (!VALID_CROPS.includes(crop)) {
        console.log(`Invalid crop: ${crop}. Please enter a valid crop. Valid Crops: `, VALID_CROPS);
      }
    } while (!VALID_CROPS.includes(crop));
    return crop;
  }
}

export default InputHandler;
