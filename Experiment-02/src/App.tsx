import { useState } from "react";

function SignalBars() {
  return (
    <div className="signal-bars" aria-label="4 bars">
      <span className="bar bar-1" />
      <span className="bar bar-2" />
      <span className="bar bar-3" />
      <span className="bar bar-4" />
    </div>
  );
}

export default function App() {
  const [mobileData, setMobileData] = useState(true);

  return (
    <main className="mobile-screen">
      <header className="page-header">
        <h1>Mobile Network</h1>
      </header>

      <section className="network-section" aria-labelledby="network-status">
        <h2 id="network-status">Network Status</h2>

        <div className="setting-row">
          <span className="row-label">Status</span>
          <span className="status-value">
            <span className="status-dot" aria-hidden="true" />
            Connected
          </span>
        </div>

        <div className="setting-row">
          <span className="row-label">Signal Strength</span>
          <div className="signal-value">
            <SignalBars />
            <span>4 bars</span>
          </div>
        </div>

        <div className="setting-row">
          <span className="row-label">Network Type</span>
          <span className="row-value">4G LTE</span>
        </div>
      </section>

      <section
        className="network-section connectivity-section"
        aria-labelledby="connectivity-settings"
      >
        <h2 id="connectivity-settings">Connectivity Settings</h2>

        <div className="setting-row mobile-data-row">
          <div>
            <span className="row-label">Mobile Data</span>
            <span className="data-state">{mobileData ? "ON" : "OFF"}</span>
          </div>
          <button
            className={`toggle ${mobileData ? "toggle-on" : ""}`}
            type="button"
            role="switch"
            aria-checked={mobileData}
            aria-label="Mobile Data"
            onClick={() => setMobileData((current) => !current)}
          >
            <span className="toggle-knob" />
          </button>
        </div>

        <button className="check-button" type="button">
          Check Connection
        </button>
      </section>
    </main>
  );
}
