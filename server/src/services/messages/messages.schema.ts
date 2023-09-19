// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, virtual } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import { userSchema } from '../users/users.schema'

import openaiClient from '../openai/openai.client'

// Main data model schema
export const messageSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    text: Type.String(),
    createdAt: Type.Number(),
    userId: Type.String({ objectid: true }),
    user: Type.Ref(userSchema),
    aiPrompt: Type.Boolean()
  },
  { $id: 'Message', additionalProperties: true }
)
export type Message = Static<typeof messageSchema>
export const messageValidator = getValidator(messageSchema, dataValidator)
export const messageResolver = resolve<Message, HookContext>({
  user: virtual(async (message, context) => {
    // Associate the user that sent the message

    return context.app.service('users').get(message.userId)
  })
})

export const messageExternalResolver = resolve<Message, HookContext>({})

// Schema for creating new entries
export const messageDataSchema = Type.Pick(messageSchema, ['text'], {
  $id: 'MessageData'
})
export type MessageData = Static<typeof messageDataSchema>
export const messageDataValidator = getValidator(messageDataSchema, dataValidator)
export const messageDataResolver = resolve<Message, HookContext>({
  userId: async (_value, _message, context) => {
    // Associate the record with the id of the authenticated user
    console.log(context.data.text)
    return context.params.user._id
  },
  aiPrompt: async (_value, _message, context) => {
    const request = context.data.text
    if (request.length > 0 && request[0] == '/') {
      return true
    }
    return false
  },
  createdAt: async () => {
    return Date.now()
  },
  text: async (_value, _message, context) => {
    //will be used to call openai
    const request = context.data.text
    let prompt = request

    if (request.length > 0 && request[0] == '/') {
      let command = request.split(' ')

      if (command[0] === '/quiz') {
        //console.log(command[0])
        //console.log(command[1])
        prompt = generatePrompt(request.replace('/quiz ', ''), 1)
        //console.log(prompt)
      }

      try {
        // Call the OpenAI API to generate the completion
        const response = await openaiClient.createCompletion({
          model: 'text-davinci-003',
          prompt: prompt,
          temperature: 0.3,
          max_tokens: 1000
        })
        //const result = request + ":        ". + response.data.choices[0].text
        const result = response.data.choices[0].text

        let preMessage = 'AI: '
        return preMessage + result
      } catch (error: any) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data)
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`)
        }
      }
    } else {
      console.log(context.params.user.email)
      let preMessage = context.params.user.email + ': '
      return preMessage + request //if no prompt for openai
    }
  }
})

// Schema for updating existing entries
export const messagePatchSchema = Type.Partial(messageSchema, {
  $id: 'MessagePatch'
})
export type MessagePatch = Static<typeof messagePatchSchema>
export const messagePatchValidator = getValidator(messagePatchSchema, dataValidator)
export const messagePatchResolver = resolve<Message, HookContext>({})

// Schema for allowed query properties
export const messageQueryProperties = Type.Pick(messageSchema, [
  '_id',
  'text',
  'createdAt',
  'userId',
  'aiPrompt'
])
export const messageQuerySchema = Type.Intersect(
  [
    querySyntax(messageQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type MessageQuery = Static<typeof messageQuerySchema>
export const messageQueryValidator = getValidator(messageQuerySchema, queryValidator)
export const messageQueryResolver = resolve<MessageQuery, HookContext>({
  userId: async (value, user, context) => {
    // We want to be able to find all messages but
    // only let a user modify their own messages otherwise
    if (context.params.user && context.method !== 'find') {
      return context.params.user._id
    }
    return value
  }
})

function generatePrompt(topic: string, quesCount: number) {
  const capitalizedTopic = topic[0].toUpperCase() + topic.slice(1).toLowerCase()

  return `Provide ${quesCount} college level question and its answer for students on the topic of 
      ${capitalizedTopic} that require a single word answer. `
}
