import React from 'react'
import { Button, Form, Input } from 'antd';
import { useUser } from '../context/useContext.jsx';
import login from "../assets/login.jpg"
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export function Login() {

  const context = useUser();
  const [form] = Form.useForm();

  const navigate = useNavigate()



  const onFinish = values => {
    console.log('Success:', values);
    const { password, username } = values;
    const success = context.login({ userNameExt: username, passwordExt: password })

    if (success) {
      Swal.fire({
        icon: "success",
        title: "Credenciales Correctas",
        text: "Bienvenido "+ username
      });

      setTimeout(() => form.resetFields(), 0);
      navigate("/MyCart")
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Credenciales Invalidas"
      });
    }



  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>

      <div className="bg-[url('../assets/login.jpg')] bg-cover bg-center min-h-screen px-4 sm:px-10 lg:px-36 flex items-center justify-start">
        <div className="w-full max-w-md p-6 sm:p-8">

          <h1 className="text-3xl sm:text-4xl font-bold text-center text-textprimary mb-6">
            Iniciar sesión
          </h1>

          <Form
            form={form}
            name="basic"
            labelCol={{ span: 24 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="space-y-4"
          >
            <Form.Item
              label={<span className="text-textprimary">Username</span>}
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input className="w-full" />
            </Form.Item>

            <Form.Item
              label={<span className="text-textprimary">Password</span>}
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password className="w-full" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>


    </>
  )
}
