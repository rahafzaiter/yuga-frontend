function Mapping(props){
   
        const numbers=props.numbers;

        const listItems=numbers.map((number)=>
        <li key={number.id}>{number}</li>);
        return(

        <ul>{listItems}</ul>
        );


}

export default Mapping