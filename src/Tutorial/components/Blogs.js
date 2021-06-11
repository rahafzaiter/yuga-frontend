function Blog(props){
    const sidebar=(
        <ul>
            {props.posts.map((post)=>
            <li key={post.id}>
                {post.title}
            </li>
            )}
        </ul>
    );

    const content=props.posts.map((post)=>
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
    );

    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );

}

export default   Blog


//we can also use this structure in smaller way withou declsring listitems
// function NumberList(props) {
//   const numbers = props.numbers;
//   return (
//     <ul>
//       {numbers.map((number) =>
//         <ListItem key={number.toString()}
//                   value={number} />
//       )}
//     </ul>
//   );
// }