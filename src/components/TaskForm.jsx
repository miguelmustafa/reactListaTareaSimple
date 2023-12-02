
import { useState } from 'react'
import '../assets/css/taskForm.css'
export const TaskForm = ({onCrearTarea}) => {

    const [tarea, setTarea] = useState('');

    const onChangeTarea = ({ target }) => {

        const { value } = target;
        setTarea(value);

    }

    const onSaveTarea = (e) => {
        e.preventDefault();
        console.log(tarea);
        onCrearTarea(tarea);
    }

    return (
        <>
            <form onSubmit={onSaveTarea} >

                <input onChange={onChangeTarea} className="form-control formInput" id="tarea" type="text" placeholder="Ingrese tarea" />

                <button className="btn btn-secondary" >Agregar tarea</button>

            </form>
        </>
    )
}