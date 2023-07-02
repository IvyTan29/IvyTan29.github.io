const name = 'Ivy';

const displayMessage = () => {
    return 'I need help!';
};
// functional compoment
/* function Hello(){
    return <h1>Hello World!</h1>
} */

// ES6 function
const Hello = () => (
    <h1>
        Total is {10 + 20}, {displayMessage()}
    </h1>
);

export default Hello; //default-> import in any file and give it any sort of name
