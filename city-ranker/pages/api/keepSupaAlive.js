import { supabase } from '../../services/supabaseClient';

export default async function handler(request, response) {
  try {
    const supaResponse = await supabase.from('junk').insert([
      { id: new Date().getTime() }
    ])

    response.status(200).json({ body: supaResponse })
  } catch (error) {
    response.status(500).json({ error: error.message })
  }
  
}