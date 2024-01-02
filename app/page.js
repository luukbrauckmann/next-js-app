import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers'

import Link from 'next/link'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data: { session } } = await supabase.auth.getSession()

  let text = 'You are not signed in.'
  let linkText = 'Sign in'
  if (session) {
    text = `You are signed in as ${session.user.email}`
    linkText = 'Sign out'
  }

  return (
    <main>
      <h1>Home</h1>
      <p>{text}</p>

      <Link href="/auth">{linkText}</Link>
    </main>
  )
}