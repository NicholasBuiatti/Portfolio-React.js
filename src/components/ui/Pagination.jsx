import Button from "./Button"; // Assicurati che il path sia corretto

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Button
        text="Prev"
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      <span>
        {currentPage} / {totalPages}
      </span>
      <Button
        text="Next"
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
}
