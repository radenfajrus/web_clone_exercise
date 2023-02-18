import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BeakerIcon, PresentationChartBarIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import { login } from '@/services';
import { Navigate, useNavigate } from 'react-router-dom';

import ImgSosmed from '@/assets/img/sosmed.png';

const LoginPage = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		rememberme: false
  });

	useEffect(()=>{
		try{
			let formLoginData = localStorage.getItem("formLoginData")
			if(formLoginData!==null){
				let formLoginObject = JSON.parse(formLoginData) 
				setFormData({
					email: formLoginObject.email,
					password: formLoginObject.password,
					rememberme: formLoginObject.rememberme,
				})
			}
		}catch(e){
			localStorage.removeItem("formLoginData")
		}
	},[])

	useEffect(()=>{
		if(formData.rememberme){	
			localStorage.setItem("formLoginData",JSON.stringify({
				email: formData.email,
				password: "",
				rememberme: formData.rememberme
		  }))
		}else{
			localStorage.removeItem("formLoginData")
		}
	},[formData])

	let updateData = (e:any) => {
		let val = (e.target.name=="rememberme")?e.target.checked:e.target.value
		setFormData({
			...formData,
			[e.target.name]: val
		})
	}
	let navigate = useNavigate();
	let handleSubmit = (e:any) => {
		e.preventDefault();
		let postData = {
			email: formData.email,
			password: formData.password,
		}

		let res = login(formData.email,formData.password)
		if (res){
			navigate("/admin");
		}else{
			alert(res)
		}
	}
  return (
    <div className="flex flex-row">
		<LoginContainer className="flex justify-center">
			<LoginArea className="flex flex-col justify-start max-w-full m-4 p-4 mt-8 md:max-w-md">
				<Logo  className="flex py-8 ml-2">
					<RocketLaunchIcon/>
				</Logo>
				<h2 className="self-start ml-2">Login</h2>
				<h3 className="self-start ml-2 text-gray-600 pb-4">Manage your ads platform, campaign and your income!</h3>
				<div className='my-4 h-auto'>
					<SignInGoogleButton>
						<GoogleLogo></GoogleLogo>
						SignIn with Google
					</SignInGoogleButton>
				</div>
				<Divider><span>or SignIn with email</span></Divider>
				<form className='flex flex-col' onSubmit={handleSubmit}>
					<FormInput>
						<label className='self-start ml-2'>Email*</label>
						<input name="email" type="text" value={formData.email} onChange={updateData} placeholder="email@website.com"></input>
					</FormInput>
					<FormInput>
						<label className='self-start ml-2'>Password*</label>
						<input name="password" type="password" value={formData.password} onChange={updateData} placeholder="Min. 8 character"></input>
					</FormInput>
					<div className='flex flex-row justify-between items-center mt-5 mb-8 h-0'>
						<RememberMe>
							<input name="rememberme" type="checkbox" checked={formData.rememberme} onChange={updateData}></input>
							<label>Remember me</label>
						</RememberMe>
						<a href="#">Forget password?</a>
					</div>
	
					<SubmitButton>Login</SubmitButton>
				</form>
				<div> Not registered yet?   <a href="#">Create an Account</a> </div>
			</LoginArea>
		</LoginContainer>
		<InfoContainer className='hidden md:flex flex-col justify-center items-center gap-16 pt-16'>
				<img className="max-w-xl" src={ImgSosmed}></img>
				<h2>Turn Opportunities into Yours</h2>
				<img src="" style={{float:"left"}}></img>
				<img src="" style={{float:"right"}}></img>
		</InfoContainer>
    </div>
  )
}

const LoginContainer = styled.div`
	background-color: var(--color-60);
`
const LoginArea = styled.div`
	background-color: var(--color-60);
`
const Logo = styled.div`
	color: var(--color-30);
	width: 40px;
	height: auto;
`

const SignInGoogleButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	height: 40px;
  	transition: background-color .3s, box-shadow .3s;
	border: none;
	border-radius: 20px;
	box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
	
	color: #757575;
	font-size: 14px;
	font-weight: 500;
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
	
	&:hover {
		box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
		cursor: pointer;
	}
	
	&:active {
		background-color: #eeeeee;
	}
	
	&:focus {
		outline: none;
		box-shadow: 
			0 -1px 0 rgba(0, 0, 0, .04),
			0 2px 4px rgba(0, 0, 0, .25),
			0 0 0 3px #c8dafc;
	}
	
	&:disabled {
		filter: grayscale(100%);
		background-color: #ebebeb;
		box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
		cursor: not-allowed;
	}
`
const GoogleLogo = styled.div`
	background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
	background-repeat: no-repeat;
	background-position: center;
	width: 24px;
	padding: 4px;
`
const Divider = styled.div`
	position: relative;
	text-align: center;
	white-space: nowrap;
	color: #757575;
	font-size: 0.8em;
	height:auto;

	&:before {
		border-bottom: 1px solid #757575;
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		width: 100%;
	}
	span {	
		background-color:var(--color-60);
		display: inline-block;
		padding: 0 10px;
		position: relative;
		z-index: 1;
	}
`

const FormInput = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 4px 0;
	label{
		padding: 8px 0;
		font-weight:bold;
	}
	input{
		padding: 12px 16px;
		transition: background-color .3s, box-shadow .3s;
		border: none;
		border-radius: 20px;
		box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
	
		&:focus {
			outline: none;
			box-shadow: 
				0 -1px 0 rgba(0, 0, 0, .04),
				0 2px 4px rgba(0, 0, 0, .25),
				0 0 0 2px var(--color-10);
		}
	}
`

const RememberMe = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	input{
		scale: 1.2;
	}
	label{
		padding: 4px;
	}
`
const SubmitButton = styled.button`
	margin: 8px 0;
	padding: 12px;
	background-color: var(--color-30);

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	height: 40px;
    transition: background-color .3s, box-shadow .3s;
	border: none;
	border-radius: 20px;
	box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
	
	color: white;
	font-size: 1em;
	font-weight: 500;
	font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
	
	&:hover {
		box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
		cursor: pointer;
	}
	
	&:active {
		background-color: var(--color-60);
		color: var(--color-30);
	}
	
	&:focus {
		outline: none;
		box-shadow: 
			0 -1px 0 rgba(0, 0, 0, .04),
			0 2px 4px rgba(0, 0, 0, .25),
			0 0 0 3px #c8dafc;
	}
	
	&:disabled {
		filter: grayscale(100%);
		background-color: #ebebeb;
		box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
		cursor: not-allowed;
	}
`

const InfoContainer = styled.div`
	background-color: var(--color-30);
	h2{
		color: var(--color-10);
		opacity:0.8;
	}
`


export default LoginPage