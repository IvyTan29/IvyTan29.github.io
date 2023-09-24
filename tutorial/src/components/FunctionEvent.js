function FunctionEvent() {
    const handleClick = () => console.log("Button is clicked") //arrow function
    // function handleClick() {
    //     console.log('Button is clicked');
    // }
    return (
        <div>
            Functional Component
            <button onClick={handleClick}>Click here</button> 
            {/* Shouldn't passed a () because it will be executed when this JSX is rendered */}
        </div>
    );
}

export default FunctionEvent;
