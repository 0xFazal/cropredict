# Cropredict: Crop Yield Prediction Using Gemini and BigQuery

This project demonstrates how to integrate Google Cloud BigQuery and Gemini using Google Cloud Vertex AI SDK to predict the best time to grow crops based on historical crop yield data. The application fetches data from BigQuery, validates user input, formats the data, and sends it to the Gemini Generative AI model for predictions.

## Features

- Kaggle: Uses Indian Crop Dataset from Kaggle.
- Google Cloud Storage: Used to upload the crops dataset and sync it to BigQuery.
- BigQuery Integration: Query crop yield data stored in BigQuery.
- Generative AI: Use the Gemini model to analyze data and predict the best time to grow crops.

## Prerequisites
1. Node.js: Ensure you have NodeJS installed (v18+ recommended).
2. Google Cloud Project:
- Setup your Google Cloud Billing Service and IAM config.
- Download keys.
- Enable the BigQuery API.
- Enable Vertex AI API.
3. Environment Setup:
- Install and authenticate with the Google Cloud SDK.
- Create a BigQuery dataset/table with crop yield data.
5. Dependencies:
- Install project dependencies using npm install.

---

## Setup

### 1. Clone the Repository

```shell
git clone git@github.com:0xFazal/cropredict.git
cd cropredict
```

### 2. Create .env File
Create a .env file in the project root and populate it with your Google Cloud configuration:
```shell
PROJECT_ID=<your-google-cloud-project-id>
LOCATION=<your-google-cloud-location>  # e.g., asia-south1
MODEL=<gemini-ai-model-id>             # e.g., gemini-1.5-pro-002
```

### 3. Install Dependencies
```shell
npm install
```

### 4. Set Up Crop Yield Data in BigQuery
- Download this [Crop Yield in Indian States Dataset](https://www.kaggle.com/datasets/akshatgupta7/crop-yield-in-indian-states-dataset/data).
- Upload this dataset to BigQuery with dataset name __crops_yield__ and table name __data__. You can also upload it to Google Cloud Storage and provide that as source to BigQuery.

## Usage
1. Authenticate Google Cloud
```shell
export GOOGLE_APPLICATION_CREDENTIALS="path-to-your-google-cloud-keys.json"
```
2. Run the Application
```shell
npm start
```
3. Provide Inputs
- State: Enter a valid Indian state (case insensitive).
- Crop: Enter a valid crop name (case insensitive).
4. View Results
- The application will:
    - Query data from BigQuery based on the provided inputs.
    - Format the data for Gemini.
    - Use the Gemini model to predict the best time to grow the crop.
- The response is displayed in the terminal.

## Example 

### Input:
```shell
State: Uttar Pradesh
Crop: Wheat
```

### Output:
```shell
Cropredict:
Based on historical crop yield data for Uttar Pradesh and Wheat, the best time to grow this crop is during the Rabi season...
```

## Attribution
The dataset is sourced from [Kaggle - Crop Yield in Indian States Dataset](https://www.kaggle.com/datasets/akshatgupta7/crop-yield-in-indian-states-dataset/data).

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

## About Me

Visit my portfolio website [fazal.me](https://fazal.me) for more about my work, blog, projects.