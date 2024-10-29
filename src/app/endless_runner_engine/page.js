import Image from 'next/image'
import "./endless-page.css";
import YoutubeEmbed from '@/components/embed-youtube';

export default function EndlessRunnerEngine() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-3xl bold mb-6 font-bold">Mono Endless Engine</h1>
        <h2 className="text-xl mb-16 font-bold">A no-code game engine to make endless runner games</h2>
        <div>
        <p className='float-left mr-4'>Download the application (Windows):</p>
        <a target='_blank' href="https://github.com/soroushJuly/MonoEditorEndless/archive/refs/heads/master.zip" className='float-left text-blue-600 underline'>Download</a>
        </div>
        <div>

        <p className='float-left mr-4'>Download assets:</p>
        <a target='_blank' href="https://drive.google.com/uc?export=download&id=17XYjVFfAIciibl_IbywaxChAgDISUUbN" className='float-left underline text-blue-600'>Download</a>
        </div>
        <div>
        

        <p className='float-left mr-4'>Download questionnaire:</p>
        <a target='_blank' href="https://drive.google.com/uc?export=download&id=1pKJhkq53Y59LEDqVMIolykRSGevGvPHN" className='float-left underline text-blue-600'>Download</a>
        </div>
        <div className='mt-5 w-1/2'>
          <YoutubeEmbed embedId='VkUCOXJ5lDE'></YoutubeEmbed>
        </div>
        <div className='mt-5'>
          Screenshots of the games made with the engine:
        </div>
        <div className='mt-5'>
          Features and key
        </div>
    </main>
  )
}
