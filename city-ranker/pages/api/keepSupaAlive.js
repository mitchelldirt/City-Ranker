import { supabase } from '../../services/supabaseClient';

export default async function handler(request, response) {
  try {
    await supabase.from('profiles').insert([
      { id: 'test1234', username: 'test' }
    ])

  } catch (error) {
    response.status(500).json({ error: error.message })
  }
  response.status(200).json({ body: 'ok' })
}