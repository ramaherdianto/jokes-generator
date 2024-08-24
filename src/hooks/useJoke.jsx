import axios from 'axios';
import { useEffect, useState } from 'react';

const useJoke = (name) => {
    const [joke, setJoke] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getJoke = async () => {
            setIsLoading(true);
            try {
                const { data } = await axios.get(
                    `https://api.chucknorris.io/jokes/random?name=${name}`
                );
                setJoke(data.value);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        getJoke();
    }, [name]);

    return { joke, isLoading };
};

export default useJoke;
