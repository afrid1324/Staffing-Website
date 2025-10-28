"use client";
import { useState } from "react";

export default function Page() {
  const [hours, setHours] = useState<number>(40);
  const [rate, setRate] = useState<number>(25);
  const gross = +(hours * rate).toFixed(2);
  const tax = +(gross * 0.12).toFixed(2);   // simple demo tax
  const net = +(gross - tax).toFixed(2);

  return (
    <>
      <main className="container" style={{ padding: 24, maxWidth: 680, margin: "0 auto" }}>
        <h1>Payroll App (Demo)</h1>
        <p>Change the inputs—values update instantly.</p>

        <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
          <label>
            Hours:
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(+e.target.value)}
              style={{ marginLeft: 8 }}
            />
          </label>

          <label>
            Rate ($/hr):
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
              style={{ marginLeft: 8 }}
            />
          </label>
        </div>

        <section className="hero" style={{ marginTop: 20, padding: 16, borderRadius: 8 }}>
          <h2>Summary</h2>
          <p>Gross: ${gross}</p>
          <p>Tax (12%): ${tax}</p>
          <p><strong>Net: ${net}</strong></p>
        </section>

        <footer style={{ marginTop: 24 }}>
          <small>© {new Date().getFullYear()} Payroll App</small>
        </footer>
      </main>
    </>
  );
}
