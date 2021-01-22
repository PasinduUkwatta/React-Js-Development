import React from "react"
import {ErrorDetails} from "./UserFuctions";


class ErrorBoundry extends React.Component{

constructor(props) {
    super(props);

    this.state={
        hasError:false,
        error:"",
        errorInfo :""


    }
    this.changeHandler = this.changeHandler.bind(this);



}
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})

    }


    static getDerivedStateFromError(error){
        return{
            hasError:true

        }
    }

    componentDidCatch(error, errorInfo,componentStack) {
    console.log(error)
    console.log(componentStack)

        let errorString =error.toString()
    console.log(errorInfo.componentStack)
        console.log(errorString)
        console.log(typeof(errorString))
        this.setState({error:errorInfo.componentStack})

        console.log(error.stack)





        const errorDetails={
         error:errorInfo.componentStack,
         errorInfo:errorString


        }



        console.log(errorDetails)

         // ErrorDetails(errorDetails).then(res=>{})




    }

    render() {

    if(this.state.hasError){
      return <h1>Something went Wrong!</h1>
    }

    return this.props.children

    }
}

export default ErrorBoundry