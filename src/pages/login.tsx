import { useForm } from "react-hook-form"


const login = () => {
  const{register,handleSubmit}=useForm()
  const onSubmit=(data)=>{
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID</label>
        <input type="text"id="id"/>
      </div>
      <div>
        <label htmlFor="password">ID</label>
        <input type="text"id="password"/>
      </div>
    </form>
  )
}

export default login


