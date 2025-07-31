import { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const nameChange = (event) => {
        setName(event.target.value);
    }
    const emailChange = (event) => {
        setEmail(event.target.value);
    }
    const messageChange = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = async (event) => {
        event.preventDefault();

        const data = { name, email, message }; // Dati da inviare

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/contacts', data, {
                headers: {
                    'Content-Type': 'application/json', // Imposta il tipo di contenuto come JSON
                }
            });

            if (response.status === 200) {
                console.log('Messaggio inviato con successo');
                showSuccessAlert();
                setName('')
                setEmail('')
                setMessage('')
            } else {
                console.error('Errore nell’invio del messaggio');
            }
        } catch (error) {
            console.error('Errore:', error);
        }
    }

    const showSuccessAlert = () => {
        setTimeout(() => {
            Swal.fire({
                icon: "success",
                title: "Invio riuscito",
                text: "Hai inviato il messaggio!",
                footer: 'Verrai ricontatto il prima possibile! GRAZIE',
            });
        }, 2000); // Mostra l'errore dopo 2 secondi
    };

    return (
        <div className='min-h-screen'>
            <div className='mx-auto p-16 bg-black/[.54]'>
                <h1 className='text-5xl text-center text-white'>Hai un progetto da propormi? Vuoi collaborare o semplicemente condividere la tua opinione?</h1>
                <p className='mt-2 text-center text-white'>Compila il modulo qui sotto: risponderò il prima possibile per discutere insieme delle tue idee e dei tuoi progetti. Non vedo l’ora di sentirti!</p>
            </div>

            <form onSubmit={sendMessage} className="container mx-auto mt-16 md:w-6/12 px-5">
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={nameChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome*</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={emailChange}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Indirizzo Email*</label>
                </div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Messaggio*</label>
                <textarea
                    value={message}
                    onChange={messageChange}
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Lascia un commento..."
                ></textarea>
                <button type="submit" className='text-white border-2 border-l-stone-400 rounded-md p-2 mt-5 shadow-white hover:bg-neutral-300 hover:text-black'>Invia</button>

            </form>
        </div>
    )
}

export default ContactMe;
