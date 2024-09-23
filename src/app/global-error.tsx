'use client'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body>
        <h2>An Error Occurred!</h2>
        <button onClick={() => reset()}>Please try again</button>
      </body>
    </html>
  )
}
