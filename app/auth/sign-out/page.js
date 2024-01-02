export default function SignOut() {
    return (
        <main>
            <h1>Sign Out</h1>

            <form className="form" action="/api/auth/sign-out" method="POST">
                <div className="form__field">
                    <button type="submit">Sign Out</button>
                </div>
            </form>
        </main>
    )
}