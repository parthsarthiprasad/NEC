import React, { Component } from "react";
import styled from "styled-components";
import { history } from "../../../history";
import {
  FormSuccessMessage,
  FormErrorMessage,
  Form,
  FormItem,
  FormAction,
  FormInput,
  FormLabel,
  FormSubmit
} from "../../themes/form";

import _ from "lodash";

const LoginWrapper = styled.div``;

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: {
        type: "success",
        msg: null
      },
      user: {
        email: "",
        password: ""
      }
    };

    this._onSubmit = this._onSubmit.bind(this);
    this._onTextFieldChange = this._onTextFieldChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { store } = this.props;

    const currentUser = store.getCurrentUser();
    if (currentUser) {
      // user is logged in we need redirect him to other page.

      history.push("/");
    }
  }

  _onTextFieldChange(event) {
    let { user } = this.state;

    const field = event.target.name;
    const value = event.target.value;

    user[field] = value;

    this.setState({
      user: user
    });
  }

  _onSubmit(event) {
    const { user } = this.state;
    const { store } = this.props;

    event.preventDefault();

    console.log("FOrm is submitted with value", user);

    store.login(user, (err, result) => {
      if (err) {
        this.setState({
          message: {
            type: "error",
            msg: _.get(err, "response.data.error.message", "Login Error")
          }
        });
      } else {
        this.setState({
          message: { type: "success", msg: "Login successful." }
        });
      }
    });
  }

  render() {
    const { user, message } = this.state;

    return (
      // <LoginWrapper>
      //     <h2>Sign In</h2>
      //     <Form onSubmit={this._onSubmit}>
      //         {
      //             message.msg ? message.type === 'success' ?
      //                 <FormSuccessMessage>{message.msg}</FormSuccessMessage> :
      //                 <FormErrorMessage>{message.msg}</FormErrorMessage> : null
      //         }
      //         <FormItem>
      //             <FormLabel>Email</FormLabel>
      //             <FormInput onChange={this._onTextFieldChange} value={_.get(user, 'email', '')} type={'email'}
      //                        name={'email'} placeholder={'Your email address'}/>
      //         </FormItem>
      //         <FormItem>
      //             <FormLabel>Password</FormLabel>
      //             <FormInput onChange={this._onTextFieldChange} value={_.get(user, 'password', '')}
      //                        type={'password'} name={'password'} placeholder={'Password'}/>
      //         </FormItem>
      //         <FormAction>
      //             <FormSubmit type={"submit"}>Login</FormSubmit>
      //         </FormAction>
      //     </Form>
      // </LoginWrapper>
      <div>
        <title>Login V16</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/*===============================================================================================*/}
        <link rel='icon' type='image/png' href='images/icons/favicon.ico' />
        {/*===============================================================================================*/}
        <link
          rel='stylesheet'
          type='text/css'
          href='vendor/bootstrap/css/bootstrap.min.css'
        />
        {/*===============================================================================================*/}
        <link
          rel='stylesheet'
          type='text/css'
          href='fonts/font-awesome-4.7.0/css/font-awesome.min.css'
        />
        {/*===============================================================================================*/}
        <link
          rel='stylesheet'
          type='text/css'
          href='fonts/Linearicons-Free-v1.0.0/icon-font.min.css'
        />
        {/*===============================================================================================*/}
        <link
          rel='stylesheet'
          type='text/css'
          href='vendor/animate/animate.css'
        />
        {/*===============================================================================================*/}
        <link
          rel='stylesheet'
          type='text/css'
          href='vendor/css-hamburgers/hamburgers.min.css'
        />
        {/*===============================================================================================*/}
        <link
          rel='stylesheet'
          type='text/css'
          href='vendor/animsition/css/animsition.min.css'
        />
        {/*===============================================================================================*/}
        <link
          rel='stylesheet'
          type='text/css'
          href='vendor/select2/select2.min.css'
        />
        {/*===============================================================================================*/}
        <link
          rel='stylesheet'
          type='text/css'
          href='vendor/daterangepicker/daterangepicker.css'
        />
        {/*===============================================================================================*/}
        <link rel='stylesheet' type='text/css' href='css/util.css' />
        <link rel='stylesheet' type='text/css' href='css/main.css' />
        {/*===============================================================================================*/}
        <div className='limiter'>
          <div
            className='container-login100'
            style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
          >
            <div className='wrap-login100 p-t-30 p-b-50'>
              <span className='login100-form-title p-b-41'>Account Login</span>
              <form
                className='login100-form validate-form p-b-33 p-t-5'
                onSubmit={this._onSubmit}
              >
                <div
                  className='wrap-input100 validate-input'
                  data-validate='Enter username'
                >
                  <input
                    onChange={this._onTextFieldChange}
                    value={_.get(user, "email", "")}
                    type={"email"}
                    className='input100'
                    name='username'
                    placeholder='User name'
                  />
                  <span className='focus-input100' data-placeholder='' />
                </div>
                <div
                  className='wrap-input100 validate-input'
                  data-validate='Enter password'
                >
                  <input
                    onChange={this._onTextFieldChange}
                    value={_.get(user, "password", "")}
                    className='input100'
                    type='password'
                    name='pass'
                    placeholder='Password'
                  />
                  <span className='focus-input100' data-placeholder='' />
                </div>
                <div className='container-login100-form-btn m-t-32'>
                  <button className='login100-form-btn' type={"submit"}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id='dropDownSelect1' />
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
        {/*===============================================================================================*/}
      </div>
    );
  }
}
