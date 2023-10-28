import { useState } from "react";

//Hook que criamos para permitir que as váriaveis criadas pelo useState sejam manipuladas pelo usuário através dos inputs
export default function useForm(initialForm) {
    const [form, setForm] = useState(initialForm);

    function handleform(e) {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return { form, handleform };
}