import { CircleAlert } from "lucide-react";

export function Error({ message = "Si è verificato un errore." }) {
  return (
    <div className="bg-red-100 text-red-700 p-4 rounded mb-4 text-center">
      <CircleAlert size={64} />
      {message}
    </div>
  );
}

export function Loading({ message = "Caricamento..." }) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2"></div>
      <span className="text-gray-700">{message}</span>
    </div>
  );
}
