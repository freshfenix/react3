import { useState } from 'react'
import type { FormEvent } from 'react'

function ControlledForm() {
  const [name, setName] = useState('')
  const [course, setCourse] = useState('React')
  const [wantsUpdates, setWantsUpdates] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <article className="form-card" aria-labelledby="controlled-form-title">
      <div className="form-card-heading">
        <span className="form-tag">useState</span>
        <h3 id="controlled-form-title">ControlledForm</h3>
        <p>React зберігає значення кожного поля у стані.</p>
      </div>
      <form className="demo-form" onSubmit={handleSubmit}>
        <label className="field-label" htmlFor="controlled-name">Ваше ім’я</label>
        <input id="controlled-name" className="text-field" type="text" value={name} onChange={(event) => { setName(event.target.value); setSubmitted(false) }} placeholder="Наприклад, Олена" required />
        <label className="field-label" htmlFor="controlled-course">Навчальний напрям</label>
        <select id="controlled-course" className="text-field" value={course} onChange={(event) => { setCourse(event.target.value); setSubmitted(false) }}>
          <option value="React">React</option><option value="TypeScript">TypeScript</option><option value="HTML та CSS">HTML та CSS</option>
        </select>
        <label className="checkbox-label"><input type="checkbox" checked={wantsUpdates} onChange={(event) => { setWantsUpdates(event.target.checked); setSubmitted(false) }} />Надсилати мені оновлення</label>
        <button className="form-submit" type="submit">Надіслати форму</button>
      </form>
      <p className="form-feedback" aria-live="polite">
        {submitted ? `Дякуємо, ${name}! Напрям: ${course}. Оновлення: ${wantsUpdates ? 'так' : 'ні'}.` : `Поточне ім’я: ${name || 'ще не введено'}`}
      </p>
    </article>
  )
}

export default ControlledForm
