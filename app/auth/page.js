import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

export default async function Auth() {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    const { data: { session } } = await supabase.auth.getSession()

    if (session) {
        redirect('/auth/sign-out')
    } else {
        redirect('/auth/sign-in')
    }
}