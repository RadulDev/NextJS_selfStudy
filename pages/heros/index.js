export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: { heros: data}

    }
}

const Heros = ({heros}) => {
    return(
        <div>
            <h3>Heros Page</h3>
            {heros.map(heros => (
                <div key={heros.id}>
                    <h3>{heros.name}</h3>
                    <h5>{heros.email}</h5>

                </div>
            ))}

        </div>
    );
    
}

export default Heros;