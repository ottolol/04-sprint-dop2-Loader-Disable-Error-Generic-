import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { selectDecks } from '../decks-selectors.ts'
import { useEffect, useLayoutEffect, useState } from 'react'
import { fetchDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector(selectDecks)
  // 1. Вариант такой и обычный useEffect
  // const [isLoading, setIsLoading] = useState(true)

  // 2. Вариант через useLayoutEffect
  const [isLoading, setIsLoading] = useState(false)

  useLayoutEffect(() => {
    setIsLoading(true)
    dispatch(fetchDecksTC()).finally(() => {
      setIsLoading(false)
    })
  }, [dispatch])

  return {
    decks,
    isLoading
  }
}
