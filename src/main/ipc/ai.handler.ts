import { ipcMain } from "electron"
import type { AxiosResponse } from "axios";

import { proxy } from '../config/axios.config.js';
import * as promptService from '../services/prompt.service.js';

ipcMain.handle('ia:generateMail', async input => {
  const body = promptService.generatePrompt(input);

  const params = new URLSearchParams();
  params.append('targetUrl', 'https://router.huggingface.co/novita/v3/openai/chat/completions');

  return await proxy.post('/proxy', body, { params }).then(
    (res: AxiosResponse) => res.data,
    (err: Error) => console.error(err?.message),
  );
});
