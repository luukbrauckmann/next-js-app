import Link from 'next/link'

export default function SignIn({ searchParams }) {
    const error = () => {
        if (searchParams.error) return (
            <div className="form__error">
                <p>{searchParams.error}</p>
            </div>
        )

    }

    return (
        <main>
            <h1>Sign In</h1>

            <form className="form" action="/api/auth/sign-in" method="POST">
                {error()}

                <div className="form__field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" autoComplete="email" required />
                </div>

                <div className="form__field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" autoComplete="current-password" required />
                </div>

                <div className="form__field">
                    <button type="submit">Sign In</button>
                </div>
            </form>

            <Link href="/auth/sign-up">Sign Up</Link>
        </main>
    )
}