// /app/layout.jsx
export default function RootLayout({ children }) {
  // 최소한 html/body만
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
