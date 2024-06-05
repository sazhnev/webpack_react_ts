import * as React from 'react';
import { createStore, createEvent } from "effector";
import { useUnit } from 'effector-react';

type IProps = {
    title: string;
};

const incrementClicked = createEvent();
const $counter = createStore(0);

$counter.on(incrementClicked, (count) => count + 1);

const MainPage: React.FC<IProps> = (props) => {
    const { title } = props;

    const [count, onIncrement] = useUnit([$counter, incrementClicked]);

    return (
        <div>
            {title ? (
                <h1>{title}</h1>
            ) : null}

            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellat suscipit accusantium? Ea, repellat impedit sit dolores molestiae sint? Commodi quaerat asperiores consequuntur magni? Voluptatibus temporibus blanditiis debitis iste possimus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellat suscipit accusantium? Ea, repellat impedit sit dolores molestiae sint? Commodi quaerat asperiores consequuntur magni? Voluptatibus temporibus blanditiis debitis iste possimus.</p>
            </div>

            <div>
                <h2>Счетчик кликов: {count}</h2>
                <button onClick={() => onIncrement()}>Кликнуть</button>
            </div>
        </div>
    );
};

export {
    MainPage,
};
