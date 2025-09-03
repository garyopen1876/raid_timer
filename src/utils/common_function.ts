export const speak = (text: string) => {
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = "zh-TW"
  speechSynthesis.speak(utterance)
}