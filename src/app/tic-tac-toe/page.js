'use client'
import Link from "next/link"

// import 
export default function TicTacToe() {
    return (
        <>
            <div className="flex justify-center py-2">
                <iframe
                    src="/XO/index.html"
                    width="1024"
                    height="576"
                    style={{
                        width: '100%',
                        border: 'none',
                    }}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        </>
    )
}
