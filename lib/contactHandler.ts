import { Resend } from 'resend'

export interface ContactPayload {
  fullName: string
  company: string
  email: string
  phone?: string
  topic?: string
  message?: string
}

export type ContactResult =
  | { ok: true }
  | { ok: false; status: number; error: string }

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@hslogivam.hu'

export async function handleContactSubmission(
  data: ContactPayload,
  options?: { devFallback?: boolean },
): Promise<ContactResult> {
  const { fullName, company, email, phone, topic, message } = data

  if (!fullName?.trim() || !company?.trim() || !email?.trim()) {
    return { ok: false, status: 400, error: 'Kötelező mezők hiányoznak.' }
  }

  if (!process.env.RESEND_API_KEY) {
    if (options?.devFallback) {
      console.log('\n[contact] Fejlesztői mód – üzenet (Resend API kulcs nincs beállítva):')
      console.log({ fullName, company, email, phone, topic, message })
      console.log('')
      return { ok: true }
    }

    return {
      ok: false,
      status: 503,
      error: 'Az e-mail küldés még nincs beállítva. Kérjük, vegye fel a kapcsolatot telefonon.',
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'HS LogiVám <onboarding@resend.dev>',
      to: TO_EMAIL,
      replyTo: email,
      subject: `Új kapcsolatfelvétel: ${company}`,
      html: `
        <h2>Új üzenet a weboldalról</h2>
        <p><strong>Név:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Cég:</strong> ${escapeHtml(company)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone || '–')}</p>
        <p><strong>Téma:</strong> ${escapeHtml(topic || '–')}</p>
        <p><strong>Üzenet:</strong></p>
        <p>${escapeHtml(message || '–')}</p>
      `,
    })

    return { ok: true }
  } catch (error) {
    console.error('[contact] Resend hiba:', error)
    return { ok: false, status: 500, error: 'Hiba történt az e-mail küldésekor.' }
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
