import { store } from '../config/store.config.js';

export function generatePrompt(input: any) {
  console.log(store.get('theme'));

  return {
    messages: [
      {
        role: 'user',
        content: input,
      },
    ],
    model: 'meta-llama/llama-3.1-8b-instruct',
    stream: false,
  };
}
