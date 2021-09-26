import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import IEntry from 'types/entry'

const useData = (data: IEntry[]) => {
  const { query } = useRouter()
  const { filter } = query
  const [items, setItems] = useState(data)
  useEffect(() => {
    if (!filter) {
      if (items !== data) setItems(data)
      return
    }

    const filtered = data.filter((i) => i.key === filter)
    setItems(filtered)
  }, [filter])

  return { filter, items }
}

export default useData
