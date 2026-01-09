import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon } from 'lucide-react'

interface MediaItem {
  url: string
  type: 'image' | 'video'
}

interface GalleryModalProps {
  media: MediaItem[]
  isOpen: boolean
  onClose: () => void
  initialIndex: number
}

const GalleryModal: React.FC<GalleryModalProps> = ({ 
  media, 
  isOpen, 
  onClose, 
  initialIndex 
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          handlePrev()
          break
        case 'ArrowRight':
          handleNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex])

  if (!isOpen || media.length === 0) return null

  const currentMedia = media[currentIndex]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1))
    setIsPlaying(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1))
    setIsPlaying(false)
  }

  const handleVideoPlay = () => {
    setIsPlaying(true)
    const video = document.querySelector('video')
    if (video) video.play()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
        aria-label="Fermer"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Navigation buttons */}
      {media.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Main media container */}
      <div className="relative w-full max-w-6xl max-h-[90vh]">
        {/* Media display */}
        <div className="flex items-center justify-center h-full">
          {currentMedia.type === 'image' ? (
            <img
              src={currentMedia.url}
              alt={`Image ${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          ) : (
            <div className="relative w-full max-w-4xl">
              <video
                src={currentMedia.url}
                controls
                className="w-full max-h-[80vh] rounded-lg"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              {!isPlaying && (
                <button
                  onClick={handleVideoPlay}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Lire la vidéo"
                >
                  <div className="w-20 h-20 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Media info */}
        <div className="mt-4 text-white text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ImageIcon className="w-4 h-4" />
            <span className="text-sm">
              {currentMedia.type === 'image' ? 'Image' : 'Vidéo'} {currentIndex + 1} sur {media.length}
            </span>
          </div>
          
          {/* Thumbnails */}
          {media.length > 1 && (
            <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
              {media.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-[#ff6347]'
                      : 'border-transparent hover:border-white/50'
                  }`}
                  aria-label={`Voir ${item.type === 'image' ? 'image' : 'vidéo'} ${index + 1}`}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={`Miniature ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default GalleryModal