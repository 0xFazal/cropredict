import { BigQuery } from '@google-cloud/bigquery';
import { PROJECT_ID } from './config.js';

class CropDataQuery {
  constructor() {
    this.bigquery = new BigQuery({ projectId: PROJECT_ID });
  }

  async fetchCropData(state, crop) {
    const query = `
      SELECT Crop_Year, Season, Area, Production, Annual_Rainfall, Fertilizer, Pesticide, Yield
      FROM \`${PROJECT_ID}.crops_yield.data\`
      WHERE UPPER(State) = '${state}' AND UPPER(Crop) LIKE '%${crop}%'
      ORDER BY Crop_Year DESC
      LIMIT 1000
    `;

    try {
      const [rows] = await this.bigquery.query(query);
      return rows;
    } catch (error) {
      console.error('Error executing BigQuery:', error.message);
      throw error;
    }
  }
}

export default CropDataQuery;
