import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Row } from "./components/Row";
import { RowInput } from "./components/RowInput";
import { words } from "./utils/words";
import "./main.css"

const word_id = Math.floor(Math.random() * words.length + 1)
console.log("id", word_id)

function App() {

  const [word, changeWord] = useState("")
  const [entries, changeEntries] = useState([])
  const [finished, changefinished] = useState(false)


  const items = entries.map((item, index) => {
    const value = entries[index].split("")
    const correct = []
    value.map((it, idx) => {
      if (it === word[idx]) {
        correct.push(idx)
      }

    })
    return <Row key={index} value={value} correct={correct} />
  })

  useEffect(() => {
    changeWord(words[word_id].toUpperCase())

  }, [])
  const check = (en) => {
    changeEntries([en, ...entries])
    if (en === word) {
      changefinished(true)
    }
    console.log(word)
  }

  return (
    <div className="main">
      {word &&
        <>
          <Header />
          <RowInput check={check} finished={finished} attempts={entries.length} />
          {items}

        </>
      }
    </div>
  );
}

export default App;
