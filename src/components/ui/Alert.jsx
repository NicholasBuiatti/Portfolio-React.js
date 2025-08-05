import Swal from "sweetalert2";

export function showAlert({ icon = "success", title, text, footer }) {
  Swal.fire({
    icon,
    title,
    text,
    footer,
  });
}