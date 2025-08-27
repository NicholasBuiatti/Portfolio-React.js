import PropTypes from "prop-types";
import { CircleAlert, Frown } from "lucide-react";

export function Error({ message = "Si è verificato un errore." }) {
  return (
    <div className="bg-red-100 text-red-700 p-4 mb-4">
      <div className="flex flex-col items-center gap-2 mx-auto">
        <CircleAlert size={64} />
        <span>{message}</span>
      </div>
    </div>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};

export function Loading({ message = "Caricamento..." }) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2"></div>
      <span className="text-gray-700">{message}</span>
    </div>
  );
}

Loading.propTypes = {
  message: PropTypes.string,
};

export function NoResults({ message = "Nessun risultato trovato." }) {
  return (
    <div className="bg-gray-100 text-gray-700 p-4 mb-4">
      <div className="flex flex-col items-center gap-2 mx-auto">
        <Frown size={64} />
        <span>{message}</span>
      </div>
    </div>
  );
}

NoResults.propTypes = {
  message: PropTypes.string,
};