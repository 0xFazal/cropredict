# Predict the Best Time to Grow Crops Using Google Cloud Vertex AI and BigQuery

Want to learn how to leverage Google Cloud’s powerful BigQuery, Gemini and Vertex AI to make smarter agricultural decisions? In this blog, I’ll guide you through building an AI-driven solution that predicts the best time to grow crops using historical crop yield data.

## Skills You’ll Learn:
- How to query data from Google Cloud BigQuery.
- How to integrate Google Cloud Vertex AI’s Gemini model for generative predictions.
- How to handle real-time user inputs and validations in a Node.js application.
- How to build a data-driven solution that makes real-world predictions for the agricultural industry.

## Introduction
Agriculture is a data-driven field, and accurate crop yield predictions are essential for optimising resources and increasing production. In this tutorial, I’ll show you how to build an application that uses Gemini via Google Cloud Vertex AI SDK and BigQuery to predict the best time to grow crops based on historical yield data. By the end of this tutorial, you’ll be able to:

- Find the dataset on Kaggle.
- Uploading data to BigQuery.
- Fetch crop yield data from Google Cloud BigQuery.
- Use Google’s Gemini model via Vertex AI SDK to predict the best growing season.

This guide is ideal for developers and data engineers who are familiar with NodeJS and are looking to learn how to apply machine learning models to solve real-world problems in agriculture.

## Design
![design](./architecture.png)

The application follows a simple architecture using Google Cloud Services and Kaggle:

1. Dataset: Find the dataset on Kaggle — Crop Yield in Indian States Dataset and download it as CSV.
2. Upload Data: Upload the downloaded CSV to Google Cloud Storage, which is a blob storage service.
3. Create BigQuery: Creates a new dataset on BigQuery with name crops_yield and table as data.
4. User Input (State & Crop): The user provides the state and crop as input via a CLI prompt.
5. BigQuery Query: We query Google BigQuery for historical crop yield data based on the user’s input (state and crop).
6. Data Processing: The data is processed and formatted for use by the Gemini Generative AI model.
7. Vertex AI Prediction: The formatted data is passed to Vertex AI's Gemini model to generate a prediction about the best time to grow the crop.
8. Output: The application returns a recommendation about the optimal season for crop cultivation.

This design choice helps streamline the process of fetching, processing, and predicting data in a fully automated manner, giving users a seamless experience without needing to manage the complexity of machine learning models or data sources.

## Prerequisites
Before starting, ensure you have the following:

- NodeJS (v18 or higher): The runtime environment to run the application.
- Google Cloud Account: With Vertex AI and BigQuery APIs enabled.
- Google Cloud SDK: For authentication and managing your Google Cloud resources.
- Kaggle Dataset: The crop yield dataset used in this project can be found on Kaggle here.

### Tools and Resources:
- [NodeJS](https://nodejs.org/)
- [Google Cloud SDK](https://cloud.google.com/sdk)
- [BigQuery API Documentation](https://cloud.google.com/bigquery/docs/introduction)
- [Vertex AI API Documentation](https://cloud.google.com/vertex-ai/docs)

### Basic Knowledge Assumed:
- Familiarity with NodeJS and JavaScript.
- Basic understanding of Google Cloud services, specifically BigQuery, Gemini and Vertex AI.
- Understanding how to work with APIs.

## Step-by-Step Instructions

1. Google Cloud Project: You need to have a Google Cloud project. If you don’t have one, create it in the Google Cloud Console.
2. Enable APIs: Enable the BigQuery API and the Vertex AI API in your Google Cloud project.
3. Set Up Authentication: Download your Google Cloud service account key (in JSON format) and authenticate your environment by setting the environment variable:

```shell
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-file.json"
```

## Prepare the Dataset
The application uses historical crop yield data, which is stored in BigQuery. To use this project:

1. Download the Crop Yield Dataset: Download this Crop Yield in Indian States Dataset.
2. Upload the Crop Yield Dataset: Upload the dataset to BigQuery with dataset name __crops_yield__ and table name __data__. You can also upload it to Google Cloud Storage and provide that as source to BigQuery.

## Configure the .env File
Before running the application, you need to configure your Google Cloud settings. Create a .env file in the root directory and add the following values:
```javascript
PROJECT_ID=<your-google-cloud-project-id>
LOCATION=<your-google-cloud-location>  # e.g., asia-south1
MODEL=<vertex-ai-model-id>             # e.g., gemini-1.5-pro-002
```
This will tell the application which Google Cloud project to use, the location for the Vertex AI model, and which specific Gemini model to invoke.


## Running the Application
To run the application:

1. Start the application by executing the following command:
```shell
npm start
```

2. Provide User Inputs: Once the application starts, you'll be prompted to enter the state and crop. The valid states are listed, and the crop choices include common Indian crops like Wheat, Rice, Maize, etc.
Example:
```shell
State: Uttar Pradesh
Crop: Wheat
```

3. Wait for Prediction:
- After entering the required inputs, the application queries BigQuery to retrieve historical crop yield data for the selected state and crop.
- The application then formats this data and sends it to Vertex AI's Gemini model to predict the best growing season for the selected crop.

4. Receive the Prediction:
The model processes the data and returns a recommendation on the best season to grow the selected crop in the chosen state.

Example output:
```shell
Cropredict: 

The best time to grow Wheat in Uttar Pradesh is during the Rabi season. Based on historical data, the crop yields are highest in this season with optimal rainfall and minimal pesticide usage.
```

5. Analyze the Result:
- The model generates recommendations based on past trends and crop-specific conditions.
- These predictions can help farmers and agriculture experts plan their planting schedules for optimal yield.

6. Optional Enhancements
- Extend with More Data: If you want to improve the accuracy of the predictions, you can incorporate more data sources, such as soil conditions, regional climate data, and government agricultural reports.

- Multilingual: Make the tool multilingual so that people from diverse background can use it.

- Visualization: Although the current application is text-based, you could extend it to visualize the predictions using Chart.js or D3.js to provide a more interactive experience.

This streamlined process gives you a fully functional AI-driven solution that predicts optimal crop seasons using Kaggle Dataset, Google Cloud's Vertex AI, Gemini and BigQuery. The step-by-step guide ensures that even beginners can follow along, set up their environment, and gain meaningful insights from the model's predictions.

## Get Ahead
To learn more about Google Cloud services and to create impact for the work you do, get around to these steps right away:
- Register for [Code Vipassana sessions](https://rsvp.withgoogle.com/events/cv)
- Sign up to become [Google Cloud Innovator](https://cloud.google.com/innovators)

Thank you for reading this till the end. Please consider sharing this if you think it will help other people. Connect with me on [LinkedIn](https://www.linkedin.com/in/0xFazal) for more.

Visit my portfolio website [fazal.me](https://fazal.me) to know more about my work, blog, projects.