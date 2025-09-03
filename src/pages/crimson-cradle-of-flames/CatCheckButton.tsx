import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function CatCheckButton() {
    const [checked, setChecked] = useState(true)
    const [showPaw, setShowPaw] = useState(false)

    const handleClick = () => {
        if (checked) {
            setChecked(false)
            setShowPaw(true)
            setTimeout(() => {
                setChecked(true)
                setShowPaw(false)
            }, 600)
        } else {
            setChecked(!checked)
        }
    }

    return (
        <div className="flex items-center gap-2 p-10">
            <div className="relative inline-block">
                <button
                    onClick={handleClick}
                    className={`w-8 h-8 border-2 rounded-md flex items-center justify-center transition-colors ${checked ? "bg-green-400 border-green-500" : "bg-white border-gray-400"
                        }`}
                >
                    {checked && (
                        <span className="text-white font-bold text-lg">✓</span>
                    )}
                </button>

                <AnimatePresence>
                    {showPaw && (
                        <motion.img
                            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                            alt="cat paw"
                            initial={{ opacity: 0, y: -40, rotate: -20 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.4 }}
                            className="absolute w-10 -top-8 left-1/2 -translate-x-1/2"
                        />
                    )}
                </AnimatePresence>
            </div>

            {/* 文字 */}
            <span>纏翼是臭甲(不是請取消)</span>
        </div>
    )
}