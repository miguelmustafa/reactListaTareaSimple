
import '../assets/css/taskItem.css';

export const TaskItem = ({ tarea, completarTarea, eliminarTarea}) => {   


    return (
        <>

            <div className="contenedor">

                <div  >
                    <input className= "checkbox input-group-text" type="checkbox" onChange={()=>completarTarea(tarea)} checked={tarea.completada} />
                </div>
                <div className= {tarea.completada? 'completada': 'no-completada'}> {tarea.nombre}</div>
                <div >
                    <button className="btn btn-outline-danger" type="button" onClick={()=>eliminarTarea(tarea)}>X</button>
                </div>
            </div>

        </>
    )
}