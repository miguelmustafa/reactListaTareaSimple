
import { TaskItem } from '../components/TaskItem';
import { useEffect, useState } from 'react';
import { TaskForm } from '../components/TaskForm';

export const TaskList = () => {

    const tareasGuardadas = JSON.parse(localStorage.getItem('tareasT')) || [];

    console.log('recupera del localstore', tareasGuardadas);

    const [tareas, setTareas] = useState(tareasGuardadas);
    const [qTareasPendientes, setqTareasPendientes] = useState(0);

    useEffect(() => {

        estadistica();

        localStorage.setItem('tareasT', JSON.stringify(tareas));
        console.log('guarda localstore', tareas);

    }, [tareas]);

    const estadistica = () => {
        const pendientes = tareas.filter(x => x.completada === false).length;
        setqTareasPendientes(pendientes);
    }

    const eliminarTarea = ({ idTarea }) => {

        const data = tareas.filter(t => t.idTarea != idTarea);
        setTareas(data);
    }

    const crearTarea = (tarea) => {
        if (tarea.trim()) {
            const tareaNueva = tarea.trim();
            const id = new Date().getTime();
            const tareaObj = {
                idTarea: id,
                nombre: tareaNueva,
                completada: false
            }
            console.log(tareaObj);

            setTareas(
                [
                    tareaObj,
                    ...tareas
                ]
            );
        }
    }

    const completarTarea = ({ idTarea }) => {

        const tareasActualizadas = tareas.map((tarea) => {
            if (tarea.idTarea === idTarea) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);

    }

    return (

        <>

            <h6>Numero de tareas pendientes: {qTareasPendientes}</h6>

            <TaskForm onCrearTarea={crearTarea} />
            {
                tareas.map(t => (
                    <TaskItem key={t.idTarea} tarea={t} completarTarea={completarTarea} eliminarTarea={eliminarTarea} />
                ))

            }

        </>
    )
}
