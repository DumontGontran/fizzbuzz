import './FizzBuzz.css';

const FizzBuzz = (props: { displayCount: number }) => {
    const fizzbuzz = document.querySelector('span') as HTMLSpanElement;
    
    if (props.displayCount % 15 === 0 && props.displayCount !== 0) {
        fizzbuzz.style.color = 'orange';
        return <>
            <h1 className='title'>Exo Compteur</h1>
            <span>FizzBuzz</span>
        </>
    }
    else if (props.displayCount % 5 === 0 && props.displayCount !== 0) {
        fizzbuzz.style.color = 'purple';
        return <>
            <h1 className='title'>Exo Compteur</h1>
            <span>Buzz</span>
        </>
    }
    else if (props.displayCount % 3 === 0 && props.displayCount !== 0) {
        fizzbuzz.style.color = 'red';
        return <>
            <h1 className='title'>Exo Compteur</h1>
            <span>Fizz</span>
        </>
    }
    else if (props.displayCount !== props.displayCount % 15 || props.displayCount !== props.displayCount % 5 || props.displayCount !== props.displayCount % 3) {
        fizzbuzz.style.color = 'white';
    }

    return (
        <>
            <h1 className='title'>Exo Compteur</h1>
            <span>{props.displayCount}</span>
        </>
    )
}

export default FizzBuzz;