
"use client";
import { useState } from "react";
export default function ContributePage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="space-y-4 max-w-2xl">
      <h1 className="text-2xl font-serif font-semibold">Contribute a Source or Correction</h1>
      <p>Submit a pre‑1930 source, earliest attestation, translation, or correction. We review for accuracy and add it to the catalog.</p>
      {!submitted ? (
        <form onSubmit={(e)=>{e.preventDefault(); setSubmitted(true);}} className="space-y-3 card">
          <div><label>Source Title</label><input className="input mt-1" required /></div>
          <div><label>Author / Compiler</label><input className="input mt-1" required /></div>
          <div><label>Year (<= 1930 preferred)</label><input className="input mt-1" type="number" min={0} /></div>
          <div><label>Details / Page Numbers / Notes</label><textarea className="input mt-1 h-28" /></div>
          <div><label>Your Email (for follow‑up)</label><input className="input mt-1" type="email" /></div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      ) : (<div className="card">Thanks! We received your submission and will review it shortly.</div>)}
    </div>
  );
}
