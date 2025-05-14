import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'

export const Decks = () => {
  return (
    <div>
      <h1>Decks 🐈</h1>
      <AddNewDeckForm />
      <DecksList />
      <footer>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae minus suscipit dolor culpa fuga, et dignissimos laborum expedita placeat voluptatem esse, molestiae reiciendis unde officiis rem doloremque dolorem sapiente.</footer>
    </div>
  )
}
