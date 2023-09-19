import type { HookContext, NextFunction } from '../declarations'

export const aiHook = async (context: HookContext, next: NextFunction) => {
  console.log('Hello')
  console.log(context.arguments[0])
  // Run everything else (other hooks and service call)
  await next()
}
