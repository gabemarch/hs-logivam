import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Loader2 } from 'lucide-react'
import { contactTopics } from '../../lib/constants'
import { cn } from '../../lib/utils'
import { Button } from '../ui/Button'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Adja meg a nevét'),
  company: z.string().min(2, 'Adja meg a cég nevét'),
  email: z.string().email('Érvényes e-mail címet adjon meg'),
  phone: z.string().optional(),
  topic: z.string().optional(),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  showTopic?: boolean
  className?: string
}

export function ContactForm({ showTopic = false, className }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Hiba történt az üzenet küldésekor.')
      }

      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Ismeretlen hiba történt.')
    }
  }

  const inputClass = cn(
    'w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-800',
    'placeholder:text-neutral-600/60 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100',
  )

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center rounded-2xl bg-brand-50 p-8 text-center"
          >
            <CheckCircle className="mb-4 h-12 w-12 text-brand-500" />
            <h3 className="font-display text-xl font-bold text-brand-700">Üzenet elküldve!</h3>
            <p className="mt-2 text-neutral-600">Hamarosan felvesszük Önnel a kapcsolatot.</p>
            <Button variant="outline" size="sm" className="mt-6" onClick={() => setStatus('idle')}>
              Új üzenet
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-neutral-800">
                  Teljes neve *
                </label>
                <input id="fullName" type="text" className={inputClass} {...register('fullName')} />
                {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
              </div>
              <div>
                <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-neutral-800">
                  Cégnév *
                </label>
                <input id="company" type="text" className={inputClass} {...register('company')} />
                {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-800">
                  E-mail cím *
                </label>
                <input id="email" type="email" className={inputClass} {...register('email')} />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-neutral-800">
                  Telefonszám
                </label>
                <input id="phone" type="tel" className={inputClass} {...register('phone')} />
              </div>
            </div>

            {showTopic && (
              <div>
                <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-neutral-800">
                  Miben segíthetek?
                </label>
                <select id="topic" className={inputClass} {...register('topic')}>
                  <option value="">Válasszon témát...</option>
                  {contactTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-neutral-800">
                Üzenet
              </label>
              <textarea id="message" rows={4} className={inputClass} {...register('message')} />
            </div>

            {status === 'error' && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{errorMsg}</p>
            )}

            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Küldés...
                </>
              ) : (
                'Üzenetet küldök'
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
