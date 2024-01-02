import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const cookieStore = cookies()
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

    let redirectUrl = requestUrl.origin

    const response = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (response.error) {
        const { error } = response
        redirectUrl = `${redirectUrl}/auth/sign-in?error=${error.message}`
    }

    return NextResponse.redirect(redirectUrl)
}