import { useState } from 'react'
import type { CSSProperties } from 'react'
import Button from './components/Button'
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'
import PostsPanel from './components/PostsPanel'
import './App.css'

const pageColors = ['#e8f3ff', '#fce8ef', '#e7f7ee', '#f3f4f6']
const textColors = ['#19324d', '#642d45', '#22543d', '#202536']
const buttonColors = ['#087e8b', '#e05d5d', '#7357d8', '#252a3a']

function nextColor(current: string, palette: string[]): string {
  const nextIndex = (palette.indexOf(current) + 1) % palette.length
  return palette[nextIndex]
}

function App() {
  const [pageColor, setPageColor] = useState('#f3f4f6')
  const [textColor, setTextColor] = useState('#202536')
  const [buttonColor, setButtonColor] = useState('#252a3a')
  const buttonStyle: CSSProperties = { backgroundColor: buttonColor }

  return (
    <main className="app" style={{ backgroundColor: pageColor, color: textColor }}>
      <header className="site-hero">
        <div className="hero-topline">
          <span className="brand-mark">R/</span>
          <span>Інтерактивна лабораторія</span>
          <span className="hero-index">НАВЧАЛЬНИЙ ПРОЄКТ · 01—04</span>
        </div>
        <div className="hero-content">
          <p className="hero-kicker">Практика React та TypeScript</p>
          <h1>React у дії<span>.</span></h1>
          <p>
            Інтерактивний простір, щоб побачити, як стан, форми, компоненти й
            запити до сервера працюють разом.
          </p>
        </div>
        <div className="hero-topics" aria-label="Теми проєкту">
          <span>01 <b>useState</b></span>
          <span>02 <b>форми</b></span>
          <span>03 <b>useEffect</b></span>
          <span>04 <b>компоненти</b></span>
        </div>
      </header>

      <section className="color-panel" aria-labelledby="page-title">
        <p className="eyebrow"><span>01</span> Стан та повторне використання</p>
        <h2 id="page-title">Кольори під контролем</h2>
        <p className="description">
          Кожна кнопка змінює окрему частину інтерфейсу. Стан зберігається в
          React, а повторно використовувана кнопка отримує параметри через props.
        </p>
        <div className="control-list">
          <div className="control-row">
            <div className="control-label"><strong>Колір сторінки</strong><span>Зміна фону сторінки</span></div>
            <Button text="Змінити фон" style={buttonStyle} onClick={() => setPageColor((color) => nextColor(color, pageColors))} />
          </div>
          <div className="control-row">
            <div className="control-label"><strong>Колір тексту</strong><span>Оновлення тексту сторінки</span></div>
            <Button text="Змінити текст" style={buttonStyle} onClick={() => setTextColor((color) => nextColor(color, textColors))} />
          </div>
          <div className="control-row">
            <div className="control-label"><strong>Колір кнопок</strong><span>Зміна кольору кнопок</span></div>
            <Button text="Змінити кнопки" style={buttonStyle} onClick={() => setButtonColor((color) => nextColor(color, buttonColors))} />
          </div>
        </div>
        <p className="color-value" aria-live="polite">
          Поточні кольори — фон: {pageColor} · текст: {textColor} · кнопки: {buttonColor}
        </p>
      </section>

      <section className="forms-section" aria-labelledby="forms-title">
        <div className="forms-heading">
          <p className="eyebrow"><span>02</span> Два підходи до форм</p>
          <h2 id="forms-title">Контрольовані та неконтрольовані форми</h2>
          <p>Порівняйте два способи роботи зі значеннями полів у React.</p>
        </div>
        <div className="forms-grid">
          <ControlledForm />
          <UncontrolledForm />
        </div>
      </section>

      <PostsPanel />

      <section className="project-summary" aria-labelledby="summary-title">
        <div className="summary-heading">
          <p className="eyebrow"><span>ПІДСУМОК</span></p>
          <h2 id="summary-title">Що реалізовано</h2>
          <p>Чотири практичні приклади — від стану компонента до даних із сервера.</p>
        </div>
        <div className="summary-grid">
          <article className="summary-item"><span className="summary-number">01</span><div><h3>Стан та props</h3><p>Кнопки змінюють палітру через useState, а параметри та обробники передаються компонентам через props.</p></div></article>
          <article className="summary-item"><span className="summary-number">02</span><div><h3>Controlled form</h3><p>Значення полів пов’язані зі станом React і оновлюються під час введення.</p></div></article>
          <article className="summary-item"><span className="summary-number">03</span><div><h3>Uncontrolled form</h3><p>Refs зчитують значення безпосередньо з DOM під час надсилання форми.</p></div></article>
          <article className="summary-item"><span className="summary-number">04</span><div><h3>Запит до сервера</h3><p>useEffect завантажує дописи та показує стани очікування, успіху й помилки з повторною спробою.</p></div></article>
        </div>
        <footer className="site-footer"><span>Зроблено для практики</span><span>React <i>×</i> TypeScript</span></footer>
      </section>
    </main>
  )
}

export default App
