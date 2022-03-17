import { Buffer } from 'buffer';
// import * as krDict from 'krdict.js'
import * as Hangul from 'hangul-js'
import { solution } from '../../lib/words'
import { attempts } from '../keyboard/Keyboard'

import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

global.Buffer = Buffer;

type Props = {
  guesses: string[]
}

// const krdict = require('krdict.js');
// krdict.setKey('58CEE133A177C021D6AEF27CE0508D52');
// const url = "https://krdict.korean.go.kr/api/search"
// console.log(GET("https://krdict.korean.go.kr/api/search", {

export const Definition = ({
  guesses=attempts as unknown as string[],
}: Props) => {

  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-right mx-0.5 text-4xl font-bold rounded dark:text-white bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600',
    // {
    //   'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
    //     !status,
    //   'border-black dark:border-slate-100': value && !status,
    //   'absent shadowed bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700':
    //     status === 'absent',
    // }
  )

  if (guesses && guesses.length > 0) {
    let guessArr:string[] = []

    let recent = guesses[guesses.length-1]
    for (let index = 0; index < recent.length; index++) {
      guessArr.push(recent[index])
      
    }

    const wordDef = "hello"
    console.log(wordDef)

    return (
      <div className={classes}>
        <div className="letter-container">
          {Hangul.assemble(guessArr)}
          {wordDef}
        </div>
      </div>
    )
  } else {
    return (
      <div className={classes}>
        <div className="letter-container">
          {""}
          {""}
        </div>
      </div>
    )
  }
}