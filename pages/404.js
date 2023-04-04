import { useEffect } from "react";
import {useRouter} from 'next/router'
import Image from "next/image";


const NotFound = () => {
    const router = useRouter();

    useEffect(() =>{
        setTimeout(() =>{
            router.push('/')
        }, 5000)
    },[])



    return(
        <div>
            <Image src='/job.jpg' width={250} height={250} />
            <h3>Page not found</h3>
            <p>lorem ipsum</p>
            <p>lorem ipsum</p>
        </div>
    );
    
}

export default NotFound;