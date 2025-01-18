import { LoaderCircle } from 'lucide-react'

export default function LoadingWidget({ className }: {className?: string}) {
  return (
    <div className={`flex items-center justify-center max-h-screen ${className}`}>
    <LoaderCircle size={40} className="animate-spin" />
  </div>
  )
}
