// frontend/src/components/buttons/ToggleDyslexiaSwitch.js
import React from 'react'

// This is the actual switch toggle
const ToggleDyslexiaSwitch = ({ isDyslexia, onChange }) => (
  <>
    <label className="switch">
      <input
        type="checkbox"
        id="switch"
        checked={isDyslexia}
        onChange={onChange}
        aria-label="Switch between default site font and Open Dyslexic font"
      />
      <span className="slider round"></span>
    </label>
  </>
)

export default ToggleDyslexiaSwitch
