import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: ''
})

const openaiClient = new OpenAIApi(configuration)

export default openaiClient
