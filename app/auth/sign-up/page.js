import Link from 'next/link'

export default function SignUp({ searchParams }) {
    const error = () => {
        if (searchParams.error) return (
            <div className="form__error">
                <p>{searchParams.error}</p>
            </div>
        )

    }

    return (
        <main>
            <h1>Sign Up</h1>

            <form className="form" action="/api/auth/sign-up" method="POST">
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
                    <button type="submit">Sign Up</button>
                </div>
            </form>


            <Link href="/auth/sign-in">Already have an account? Sign in.</Link>
        </main>
    )
}