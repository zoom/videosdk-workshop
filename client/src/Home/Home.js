import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { ClientContext, UserContext } from '../Context/globalContext';
import {Form, Input, Button, Checkbox, Select, message} from 'antd';
import './Home.css'

const Home = () => {

  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');

  const client = useContext(ClientContext);
  const meetingArgs = useContext(UserContext);

  const navigate = useNavigate();

  const submitUserData = async () => {
    
    meetingArgs.name = username;
    meetingArgs.password = password;
    console.log(meetingArgs)
    
    //add JWT and initialilzation functionality

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(meetingArgs)     
    }
    
    let response = await fetch('http://localhost:4000/generate', requestOptions).then(response => response.json());
    console.log(response)

    meetingArgs.signature = response;

    client.init('en-US', 'CDN').then(() => {
      console.log('session initialilzed');
      navigate('/session')
    }).catch((error) => {
      console.log(error)
    });
    
  }

  
  return (
    <div className="login-page">
    <div className="login-box">
    <div>
      <Form 
      name="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={submitUserData}
      // onFinishFailed={onSubmitFailed}
      autoComplete="off"
    >
      <p>Login to the Dashboard</p>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
        
      >
        <Input onChange={(e) => updateUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password onChange={(e) => updatePassword(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
</div>
  )
}

export default Home;
