import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the word in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the word.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ㅎ"
          status="correct"
        />
        <Cell value="ㅏ" />
        <Cell value="ㄴ" />
        <Cell value="ㅡ" />
        <Cell value="ㄹ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter ㅎ is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ㅍ" />
        <Cell value="ㅣ" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ㄹ"
          status="present"
        />
        <Cell value="ㅇ" />
        <Cell value="ㅛ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter ㄹ is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ㄱ" />
        <Cell value="ㅗ" />
        <Cell value="ㅇ" />
        <Cell isRevealing={true} isCompleted={true} value="ㅂ" status="absent" />
        <Cell value="ㅜ" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter ㅂ is not in the word in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
