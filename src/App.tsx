import { useState, FC } from 'react'
import { createStore } from 'hox'

const [useUserStore, UserStoreProvider] = createStore(() => {
  return {}
}, { memo: false });

const UserInfo: FC<{ name: string }> = ({ name }) => {
  return <div>{name}</div>
}

function App() {
  const [name, setName] = useState('Demo')

  return (
    <div className="App">
      <UserInfo name={name} />
      <button onClick={() => setName('Demo2')}>click to change</button>
      <UserStoreProvider>
        <UserInfo name={name} />
      </UserStoreProvider>
    </div>
  )
}

export default App
