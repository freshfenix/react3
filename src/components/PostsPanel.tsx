import { useEffect, useState } from 'react'

type Post = {
  id: number
  title: string
  body: string
}

type RequestStatus = 'loading' | 'success' | 'error'

function PostsPanel() {
  const [posts, setPosts] = useState<Post[]>([])
  const [status, setStatus] = useState<RequestStatus>('loading')
  const [error, setError] = useState('')
  const [reloadKey, setReloadKey] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadPosts() {
      setStatus('loading')
      setError('')
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', { signal: controller.signal })
        if (!response.ok) throw new Error(`Помилка сервера: ${response.status}`)
        const data = (await response.json()) as Post[]
        setPosts(data)
        setStatus('success')
      } catch (requestError) {
        if (requestError instanceof DOMException && requestError.name === 'AbortError') return
        setError(requestError instanceof Error ? requestError.message : 'Не вдалося завантажити дописи.')
        setStatus('error')
      }
    }

    void loadPosts()
    return () => controller.abort()
  }, [reloadKey])

  return (
    <section className="posts-section" aria-labelledby="posts-title">
      <div className="posts-heading">
        <div>
          <p className="eyebrow"><span>03</span> Запит та асинхронний стан</p>
          <h2 id="posts-title">Дописи із сервера</h2>
          <p>Дані завантажуються під час монтування компонента.</p>
        </div>
        <button className="reload-button" type="button" onClick={() => setReloadKey((key) => key + 1)} disabled={status === 'loading'}>
          {status === 'loading' ? 'Завантаження…' : 'Оновити'}
        </button>
      </div>
      {status === 'loading' && <p className="request-message" role="status">Завантажуємо дописи…</p>}
      {status === 'error' && <div className="request-error" role="alert"><p>Не вдалося завантажити дані: {error}</p><button className="reload-button" type="button" onClick={() => setReloadKey((key) => key + 1)}>Спробувати ще раз</button></div>}
      {status === 'success' && <div className="posts-grid" aria-live="polite">{posts.map((post) => <article className="post-card" key={post.id}><span className="post-number">Допис #{post.id}</span><h3>{post.title}</h3><p>{post.body}</p></article>)}</div>}
    </section>
  )
}

export default PostsPanel
