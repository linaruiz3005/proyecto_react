export default function Todo(){
    return <div className="container">
        ¿Cual es tu pelicula faorita?
        
        <form>
            <label >Nombre</label>
            <input type="text" />
            <label >Protagonista</label>
            <input type="text" />
            <label >Personaje Favorito</label>
            <input type="text" />
            <input type="submit" value="Enviar Mi Pelicula"  />
           
        </form>
        </div>
}