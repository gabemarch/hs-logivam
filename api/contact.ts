import type { VercelRequest, VercelResponse } from '@vercel/node'
import { handleContactSubmission, type ContactPayload } from '../lib/contactHandler'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = req.body as ContactPayload | undefined
  const result = await handleContactSubmission(body ?? ({} as ContactPayload))

  if (!result.ok) {
    return res.status(result.status).json({ error: result.error })
  }

  return res.status(200).json({ success: true })
}
