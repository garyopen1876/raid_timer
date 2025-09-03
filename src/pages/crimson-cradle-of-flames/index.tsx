import { useState, useEffect, useRef } from 'react'
import { speak } from '@/utils/common_function'
import CatCheckButton from './CatCheckButton'

function CountdownTimer() {
  const [remainingSeconds, setRemainingSeconds] = useState(0)
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)
  const hasSpoken = useRef(false)

  useEffect(() => {
    if (remainingSeconds <= 0 && timerId) {
      clearInterval(timerId)
      setTimerId(null)
      speak('時間到 請重新計算')
    }

    if (remainingSeconds === 10 && !hasSpoken.current) {
      speak('還剩 10 秒 注意尖刺')
      hasSpoken.current = true
    }
  }, [remainingSeconds])

  function updateDisplay() {
    const mins = String(Math.floor(remainingSeconds / 60)).padStart(2, '0')
    const secs = String(remainingSeconds % 60).padStart(2, '0')
    return `${mins}:${secs}`
  }

  function cancelSpeaking() {
    speechSynthesis.cancel()
  }

  const startCountdown = (seconds: number) => {
    if (timerId) clearInterval(timerId)
    cancelSpeaking()
    hasSpoken.current = false
    setRemainingSeconds(seconds)

    const id = setInterval(() => {
      setRemainingSeconds((prev) => prev - 1)
    }, 1000)
    setTimerId(id)
  }

  const resetCountdown = () => {
    if (timerId) clearInterval(timerId)
    setTimerId(null)
    setRemainingSeconds(0)
    cancelSpeaking()
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-pink-50'>
      <div className='text-5xl mb-8 text-gray-800'>{updateDisplay()}</div>
      <div className='flex gap-4'>
        <button
          className='text-white text-lg px-6 py-3 rounded-xl bg-blue-400 hover:bg-blue-500'
          onClick={() => startCountdown(30)}
        >
          倒數 0:30
        </button>
        <button
          className='text-white text-lg px-6 py-3 rounded-xl bg-pink-400 hover:bg-pink-500'
          onClick={() => startCountdown(150)}
        >
          倒數 2:30
        </button>
        <button
          className='text-white text-lg px-6 py-3 rounded-xl bg-gray-500 hover:bg-gray-700'
          onClick={resetCountdown}
        >
          重置
        </button>
      </div>
      <CatCheckButton /> 
    </div>
  );
}


export default CountdownTimer