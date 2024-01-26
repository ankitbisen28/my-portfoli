import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '5lxsichf',
  dataset: 'production',
  useCdn:true
});

export default client;