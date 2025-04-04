import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './TestApp.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function useInputWithValidate(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value);
    }

    const validateInput = () => {
        return value.search(/\d/) >= 0
    }

    return { value, onChange, validateInput }
}

const Form = () => {
    const input = useInputWithValidate('');
    const textArea = useInputWithValidate('');


    const color = input.validateInput() ? 'text-danger' : 'null';


    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input value={`${input.value} / ${textArea.value}`} type='text' className="from-control" readOnly />
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input onChange={input.onChange}
                        type="email"
                        value={input.value}
                        className={`form-control ${color}`}
                        id="exampleFormControlInput1"
                        placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea
                        onChange={textArea.onChange}
                        value={textArea.value}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}

function App() {
    return (
        <Form />
    );
}

export default App;
