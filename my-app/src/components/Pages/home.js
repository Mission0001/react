import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

const Home = () => {
	let navigate = useNavigate();

	const ButtonEvents = () => {
		alert("Welcome to Burger N' Bite. You're going to another tab.");
	};

	const ButtonEvents2 = (data) => {
		console.log(data + ' Order Now.');
	};

	const [getData, setData] = useState(' ');

	const ButtonEvents3 = (data1) => {
		setData(data1 + ' with Free Shipping');
	};

	const [getUser, setUser] = useState('');
	const [getPass, setPass] = useState('');

	const [getUpdUser, setUpdUser] = useState('');
	const [getUpdPassword, setUpdPassword] = useState('');

	const [getUserlist, setUserlist] = useState([]);

	useEffect(() => {
		Axios.get('http://localhost:3001/get').then((response) => {
			setUserlist(response.data);
		});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		Axios.post('http://localhost:3001/insert', {
			username: getUser,
			password: getPass,
		}).then((response) => {
			setUserlist([...getUserlist, { username: getUser, password: getPass }]);
		});
	};

	const deleteUser = (id) => {
		Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
			setUserlist(
				getUserlist.filter((value) => {
					return value.id !== id;
				})
			);
		});
	};

	const updateUser = (id) => {
		Axios.put('http://localhost:3001/update', {
			id: id,
			username: getUpdUser,
			password: getUpdPassword,
		}).then((response) => {
			setUserlist(
				getUserlist.map((value) => {
					return value.id === id
						? {
								username: getUpdUser,
								password: getUpdPassword,
						  }
						: value;
				})
			);
		});
	};

	return (
		<div className='bg'>
			<div className='site-info'>
				<div className='title' onClick={() => ButtonEvents2('So Delicious!')}>
					Burger N' Bite
				</div>
				<div
					className='sub-title'
					onClick={() => ButtonEvents3(' Cash on Delivery')}
				>
					Grilled To Perfection | Dare To Take Another Bite<br></br>
					Real Beef. Real Burgers
					{getData}
					<div>
						<br></br>
						<Link className='nav-link' to='/menu'>
							<button type='button' className='buttonw' onClick={ButtonEvents}>
								Order Now
							</button>
						</Link>

						<br />
						<p>OR</p>
						<br />

						<a href='#sign'>
							<button type='button' className='bt1'>
								REGISTER NOW
							</button>
						</a>
					</div>
				</div>
			</div>
			<div>
				<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{' '}
				<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{' '}
				<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{' '}
				<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{' '}
				<br /> <br /> <br /> <br /> <br /> <br /> <br />
				<a name='sign'>
					<h2>CREATE AN ACCOUNT</h2>
					<p>Please fill in this form to create an account.</p>
				</a>
				<div className='container p-8 my-2 '>
					<div className='btn-group-vertical'>
						<form onSubmit={handleSubmit}>
							<div>
								<div className='input-group mb-3'>
									<span className='input-group-text'>User Name:</span>
									<input
										type='text'
										className='form-control'
										placeholder='Enter username'
										value={getUser}
										onChange={(e) => setUser(e.target.value)}
									/>
								</div>

								<div className='input-group mb-14'>
									<span className='input-group-text'>Password:</span>
									<input
										type='password'
										className='form-control'
										value={getPass}
										placeholder='Enter password'
										onChange={(e) => setPass(e.target.value)}
									/>
								</div>

								<div className='col-58'>
									<button
										id='Popover1'
										type='submit'
										className='button1'
										onfocus="this.value=''"
										data-bs-toggle='popover'
										data-bs-content='Some content inside the popover'
									>
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<button
					type='button'
					className='bt1'
					onClick={() => {
						navigate('/menu');
					}}
				>
					Go to Menu
				</button>
				<a href='#list'>
					<button type='button' className='bt1'>
						Signup List
					</button>
				</a>
				<br />
				<div className='container2 p-5'>
					<a name='list'>
						<h2 className='sty'>Signup Information</h2>
					</a>
					<table className='table table-dark table-striped'>
						<thead>
							<tr>
								<th>Username</th>
								<th>Password</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{getUserlist.map((value) => {
								return (
									<tr key={value.id}>
										<td>{value.username}</td>
										<td>{value.password}</td>

										<td>
											<input
												type='text'
												name='url'
												id='subject'
												className='form__input'
												placeholder='Enter username..'
												onChange={(e) => {
													setUpdUser(e.target.value);
												}}
											/>{' '}
											<br />
											<input
												type='text'
												name='url'
												id='subject'
												className='form__input'
												placeholder='Enter password...'
												onChange={(e) => {
													setUpdPassword(e.target.value);
												}}
											/>
											<br />
											<div className='btn-group'>
												<button
													type='button'
													className='btn btn-warning'
													onClick={() => {
														updateUser(value.id);
													}}
												>
													Update
												</button>
												<button
													type='button'
													className='btn btn-danger'
													onClick={() => {
														deleteUser(value.id);
													}}
												>
													Delete
												</button>
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Home;
