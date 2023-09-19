import { Service, ServiceAddons, Application } from '@feathersjs/feathers'
import { Params, Id, NullableId } from '@feathersjs/feathers'

import openaiClient from './openai.client'

//If we were to create a custom service
//We could create the endpoint /openai
//the client would need basic logic to determine which
//endpoint to send the message to
//client would also need to to re-code the load messages
//so that the request response for openai requests doesnt go to
//DB but still appear in the chat

//This is the better route imo

//Currently this custom service is not used, instead the
//open ai prompt is sent in a resolver that is called in the before
//hook of a create event for the messages service
//it checks if the data is for openai or chat, if openai, it sends
//request to openai and sends the response to the db
//Currently this is the only way to have the response to appear in the
//terminal

class OpenAIService {
  async find(): Promise<any> {
    throw new Error('Method not available')
  }

  async create(data: any): Promise<any> {
    // Extract the required input data from the request
    const { prompt, numQuestions } = data
    console.log('Create initiated: prompt: ' + prompt)
    console.log('numQuestions: ' + numQuestions)

    /*
      try {
        console.log("Create initiated.")
        // Call the OpenAI API to generate the completion
        const response = await openaiClient.createCompletion({
            model: "text-davinci-003",
            prompt: data,
            //generatePrompt(topic, numQuestions) => {},
            temperature: 0.3,
            max_tokens: 1000,
        });
        const result = response.data.choices[0].text;
        
        return result;
      } catch (error) {
        // Handle any errors that occur during the API call
        console.error('OpenAI API Error:');
        throw new Error('Failed to generate completion');
      }*/
  }
}

// Register the OpenAI service with FeatherJS
export default function (app: Application): void {
  app.use('/openai', new OpenAIService())
}
