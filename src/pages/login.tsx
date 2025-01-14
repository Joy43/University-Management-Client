import { Button } from "antd"
import { useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/features/auth/authApi"
import Password from "antd/es/input/Password"


const login = () => {
  const{register,handleSubmit}=useForm({
    defaultValues:{
      userId:'A-002',
      password:'admin123'
    }
  })
  interface FormData {
    userId: string;
    password: string;
  }

  interface UserInfo {
    id: string;
    password: string;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
    const userInfo: UserInfo = {
      id: data.userId,
      password: data.password,
    };
    login(userInfo);
  };
  const [login,{data,error}]=useLoginMutation();
  return (
    <form  className="max-auto" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id"{...register('userId')}>ID</label>
        <input type="text"id="id"/>
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="text"id="password" {...register('password')}/>
      </div>
      <Button htmlType="submit" >Resgister</Button>
    </form>
  )
}

export default login


