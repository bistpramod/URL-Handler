import React from 'react'

const FormContainer: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl">
      {/* hero card — banner image with a dark overlay so text stays readable */}
      <div className="relative overflow-hidden rounded-2xl bg-banner bg-cover bg-center shadow-2xl shadow-violet-900/40">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-violet-950/80 to-slate-900/70" />

        <div className="relative px-6 py-12 text-center sm:px-10 sm:py-16">
          <span className="mb-4 inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-violet-300">
            Free &amp; fast
          </span>

          {/* renamed clearer what the app actually does */}
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Shorten your links in seconds
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-slate-300 sm:text-lg">
            Paste a long URL below and get a clean short link you can share anywhere.
          </p>

          {/* fixed broken classes like text-red etc*/}
          <form
            className="glass-card mx-auto mt-10 max-w-xl text-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="url-input" className="mb-2 block text-sm font-medium text-slate-300">
              Enter your URL
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                {/* prefix sits inside the input on the left */}
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-sm text-slate-400">
                  urlshortner.link/
                </span>
                <input
                  id="url-input"
                  type="url"
                  required
                  placeholder="https://example.com/my-long-page"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 py-3.5 pl-[8.5rem] pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-400/30"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110 active:scale-[0.98]"
              >
                Shorten
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* little feature row under the hero — makes the page feel less empty */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { title: 'Instant', desc: 'Get a short link right away' },
          { title: 'Trackable', desc: 'See clicks on your links' },
          { title: 'Shareable', desc: 'Works on social, email, anywhere' },
        ].map((item) => (
          <div key={item.title} className="glass-card text-center">
            <h3 className="font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FormContainer
