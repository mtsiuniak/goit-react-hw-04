import { useState } from "react";
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import { FaSearch } from "react-icons/fa";

export default function SearchBar({onSearch}) {
    const[text, setText] = useState('');
    const handleChange = event => {
        setText(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (text === "") {
            toast('Enter some text', {
                duration: 2000,
                position: 'top-center',
            });
            return;
        }
        onSearch(text.trim());
        setText('');
    }

    return <header className={css.header}>
    <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit"><FaSearch /></button>
        <input
            className={css.input}
            type="text"
            autoComplete="off"
            value={text}
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
        />
    </form>
    </header>
}