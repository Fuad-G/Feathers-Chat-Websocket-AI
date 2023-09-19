import { user } from './users/users'
import { message } from './messages/messages'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'
import OpenAiService from './openai/openai'

export const services = (app: Application) => {
  app.configure(message)
  app.configure(user)
  app.configure(OpenAiService)
  // All services will be registered here
}
