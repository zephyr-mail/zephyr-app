import Store from 'electron-store';

interface Schema {
  theme: 'light' | 'dark';
  apiKey?: string;
  notifications: boolean;
}

export const store = new Store<Schema>({
  defaults: {
    theme: 'dark',
    notifications: true,
  },
});
