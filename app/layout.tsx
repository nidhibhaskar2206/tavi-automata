import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(() => { try { const stored = localStorage.getItem('theme'); const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; const theme = stored === 'light' || stored === 'dark' ? stored : system; const root = document.documentElement; root.dataset.theme = theme; if (theme === 'dark') { root.classList.add('dark'); } else { root.classList.remove('dark'); } } catch (e) {} })();",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
