import Swal from "sweetalert2";

export default function showAlert({ icon = "success", title, text, footer }) {
  Swal.fire({
    icon,
    title,
    text,
    footer,
  });
}