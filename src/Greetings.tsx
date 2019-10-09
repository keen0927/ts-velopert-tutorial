import React from 'react';

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;
}

function Greetings({name, mark, optional, onClick}: GreetingsProps) {

    const handleClick = () => onClick(name);

    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <p><button type="button" onClick={handleClick}>클릭</button></p>
        </div>
    );
}

Greetings.defaultProps = {
    mark: '!'
};

export default Greetings;