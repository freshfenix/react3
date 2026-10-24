import { useRef, useState } from 'react'
import type { FormEvent } from 'react'

type Submission = {
  name: string
  course: string
}

function UncontrolledForm() {
  const nameInputRef = useRef<HTMLInputElement>(null)
  const courseSelectRef = useRef<HTMLSelectElement>(null)
  const [submitted, setSubmitted] = useState<Submission | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted({
      name: nameInputRef.current?.value.trim() ?? '',
      course: courseSelectRef.current?.value ?? '',
    })
  }

  return (
    <article className="form-card" aria-labelledby="uncontrolled-form-title">
      <div className="form-card-heading">
        <span className="form-tag form-tag-alt">useRef</span>
        <h3 id="uncontrolled-form-title">UncontrolledForm</h3>
        <p>Значення полів читаються з DOM через refs після надсилання.</p>
      </div>
      <form className="demo-form" onSubmit={handleSubmit} onReset={() => setSubmitted(null)}>
        <label className="field-label" htmlFor="uncontrolled-name">Ваше ім’я</label>
        <input id="uncontrolled-name" className="text-field" type="text" ref={nameInputRef} placeholder="Наприклад, Андрій" required />
        <label className="field-label" htmlFor="uncontrolled-course">Навчальний напрям</label>
        <select id="uncontrolled-course" className="text-field" ref={courseSelectRef} defaultValue="React">
          <option value="React">React</option><option value="TypeScript">TypeScript</option><option value="HTML та CSS">HTML та CSS</option>
        </select>
        <div className="form-actions">
          <button className="form-submit" type="submit">Надіслати форму</button>
          <button className="form-reset" type="reset">Очистити</button>
        </div>
      </form>
      <p className="form-feedback" aria-live="polite">
        {submitted ? `Отримано: ${submitted.name} — ${submitted.course}.` : 'Заповніть поля: React прочитає їх через refs після надсилання.'}
      </p>
    </article>
  )
}

export default UncontrolledForm
