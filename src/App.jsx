import { useRef, useState } from 'react';
import Button from './components/button/Button';
import Card from './components/card/Card';
import ContentWrapper from './components/ContentWraper';
import Input from './components/input/Input';
import useJoke from './hooks/useJoke';

function App() {
    const [name, setName] = useState('Tom');
    const { joke, isLoading } = useJoke(name);
    const nameRef = useRef();

    const handleNameJoke = (e) => {
        e.preventDefault();
        if (nameRef.current.value === '') {
            alert('Please input your name first my dear');
        }
        setName(nameRef.current.value ? nameRef.current.value : 'Tom');
        nameRef.current.value = '';
    };

    return (
        <>
            <ContentWrapper>
                <Card>
                    <Card.Title>Jokes Generator</Card.Title>
                    <Card.Body>
                        <p className='mb-4 leading-relaxed italic'>
                            {isLoading ? 'Loading...' : `"${joke}"`}
                        </p>

                        <Input ref={nameRef} isFocused placeholder='Name' />
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={handleNameJoke} className={'bg-black/80'}>
                            Generate
                        </Button>
                    </Card.Footer>
                </Card>
            </ContentWrapper>
        </>
    );
}

export default App;
