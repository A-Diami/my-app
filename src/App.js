import React, {useState, useEffect, useRef} from "react";
import Image from "./component/Image";

function App(){
    // les hooks
    const [title, setTitle] = useState("Bonjour, monde");
    const [show, setShow] = useState(false);
    // sauvegarder une valeur arbitraire
    const isshowInitialize = useRef(false);

    useEffect( () => console.log("Component monte"), [])
    // mise a jour component
        useEffect( () => {
            if(isshowInitialize.current){
                console.log('show mis a jour');
            }else{
                isshowInitialize.current = true;
            }
        }, [show]);

   function handleClick() {
       setShow(!show)
   }

    return  (
        <div>
               {console.log("Render JSX")}
            <h1 className="text-center text-red-500 text-4xl">{title}</h1>
            <button className="bg-purple-900 text-white rounded py-2 px-3" onClick={handleClick}>Click me</button>
            {
               show ?
                  <Image />
               :null
            }
           
        </div>
    )
}



// composant avec classe

// class App extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             title : "Bonjour, monde!",
//             show : false,
//         }

//     }

//      componentDidMount() {
//         this.setState({title: "Composant modifie"});
//     }

   
//     render(){
//         return  (
//             <div>
//                 <h1 className="text-center text-red-500 text-4xl">{this.state.title}</h1>
//                 <button className="bg-purple-900 text-white rounded py-2 px-3" onClick={() => this.setState({show:!this.state.show}) }>Click me</button>
//                 {
//                    this.state.show ?
//                       <Image />
//                    :null
//                 }
               
//             </div>
//         )
//     }
// }

export default App;
