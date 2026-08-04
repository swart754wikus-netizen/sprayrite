"use client";

import { useState } from "react";
import { MACHINES } from "./machines-data";

export default function MachinesClient() {
  const [activeId, setActiveId] = useState(MACHINES[0].id);
  const active = MACHINES.find((m) => m.id === activeId)!;

  return (
    <div className="machines-layout">
      <div className="machine-sidebar">
        {MACHINES.map((m) => (
          <button
            key={m.id}
            className={`mach-tab${m.id === activeId ? " active" : ""}`}
            onClick={() => setActiveId(m.id)}
          >
            <div className="mach-tab-name">{m.tabName}</div>
            <div className="mach-tab-sub">{m.tabSub}</div>
          </button>
        ))}
      </div>
      <div className="machine-detail-panel">
        <div className="mdp active" key={active.id}>
          <div className="mdp-tag">{active.tag}</div>
          <h3>{active.name}</h3>
          <p className="mdp-lead">{active.lead}</p>
          <div className="mdp-specs">
            {active.specs.map((s) => (
              <div className="spec-item" key={s.label}>
                <div className="spec-label">{s.label}</div>
                <div className="spec-val">{s.val}</div>
              </div>
            ))}
          </div>
          <div className="mdp-features">
            <h4>Key Features</h4>
            <ul className="feat-list">
              {active.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
