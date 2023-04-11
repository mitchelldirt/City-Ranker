import { supabase } from '../../services/supabaseClient';

export default async function handler(response) {
  await supabase.from('profiles').insert([
    { id: 'test1234', username: 'test' }
  ])

  await supabase.from('profiles').delete().eq({ id: 'test1234' })
  
  response.status(200).json({ body: 'ok' })
}