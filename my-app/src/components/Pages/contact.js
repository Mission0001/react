import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const Contact = () => {
	let navigate = useNavigate();

	const [getFname, setFname] = useState('');
	const [getLname, setLname] = useState('');
	const [getEmail, setEmail] = useState('');
	const [getAddress, setAddress] = useState('');
	const [getSubject, setSubject] = useState('');

	const [getUpdFname, setUpdFname] = useState('');
	const [getUpdLname, setUpdLname] = useState('');
	const [getUpdEmail, setUpdEmail] = useState('');
	const [getUpdAddress, setUpdAddress] = useState('');
	const [getUpdSubject, setUpdSubject] = useState('');

	const [getContactlist, setContactlist] = useState([]);

	useEffect(() => {
		Axios.get('http://localhost:3001/getCon').then((response) => {
			setContactlist(response.data);
		});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		Axios.post('http://localhost:3001/insertCon', {
			fname: getFname,
			lname: getLname,
			email: getEmail,
			address: getAddress,
			subject: getSubject,
		}).then((response) => {
			setContactlist([
				...getContactlist,
				{
					fname: getFname,
					lname: getLname,
					email: getEmail,
					address: getAddress,
					subject: getSubject,
				},
			]);
		});
	};

	const deleteContact = (id) => {
		Axios.delete(`http://localhost:3001/deleteContact/${id}`).then(
			(response) => {
				setContactlist(
					getContactlist.filter((value) => {
						return value.id !== id;
					})
				);
			}
		);
	};

	const updateContact = (id) => {
		Axios.put('http://localhost:3001/updateContact', {
			id: id,
			fname: getUpdFname,
			lname: getUpdLname,
			email: getUpdEmail,
			address: getUpdAddress,
			subject: getUpdSubject,
		}).then((response) => {
			setContactlist(
				getContactlist.map((value) => {
					return value.id === id
						? {
								fname: getUpdFname,
								lname: getUpdLname,
								email: getUpdEmail,
								address: getUpdAddress,
								subject: getUpdSubject,
						  }
						: value;
				})
			);
		});
	};

	return (
		<div className='bg14'>
			<div>
				<br /> <br /> <br />
				<div className='body1'>
					This is our Contact Information <br />
					Please reach us @www.burgernbite.com <br />
					Contact us with: 000123456
				</div>
				<br />
				<br />
				<div className='container1'>
					<div className='cl'>
						<hr />
						<h2 className='sty'>Contact Form</h2>
					</div>
					<form onSubmit={handleSubmit}>
						<div className='form-body'>
							<div className='username'>
								<label className='form__label' htmlFor='firstName'>
									First Name{' '}
								</label>
								<input
									className='form__input'
									type='text'
									id='firstName'
									placeholder='First Name..'
									value={getFname}
									onChange={(e) => setFname(e.target.value)}
								/>
							</div>
							<div className='lastname'>
								<label className='form__label' htmlFor='lastName'>
									Last Name{' '}
								</label>
								<input
									type='text'
									name=''
									id='lastName'
									className='form__input'
									placeholder='LastName'
									value={getLname}
									onChange={(e) => setLname(e.target.value)}
								/>
							</div>
							<div className='email'>
								<label className='form__label' htmlFor='email'>
									Email{' '}
								</label>
								<input
									type='email'
									id='email'
									className='form__input'
									placeholder='Email..'
									value={getEmail}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className='address'>
								<label className='form__label' htmlFor='address'>
									Address{' '}
								</label>
								<input
									type='text'
									name=''
									id='address'
									className='form__input'
									placeholder='Address..'
									value={getAddress}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</div>
							<div className='subject'>
								<label className='form__label' htmlFor='subject'>
									Subject
								</label>
								<input
									type='text'
									name=''
									id='subject'
									className='form__input'
									placeholder='Enter something..'
									value={getSubject}
									onChange={(e) => setSubject(e.target.value)}
								/>
							</div>
						</div>
						<div className='footer'>
							<button type='submit' className='btn btn-dark'>
								Submit
							</button>
						</div>
					</form>
				</div>
				<br />
				<button
					type='button'
					className='bt1'
					onClick={() => {
						navigate('/');
					}}
				>
					Back to Homepage
				</button>
				<a href='#sign'>
					<button type='button' className='bt1'>
						Go to Contact List
					</button>
				</a>
			</div>

			<div className='container2 p-5'>
				<a name='sign'>
					<h2>Contact Information</h2>
				</a>
				<table className='table table-dark table-striped'>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Address</th>
							<th>Subject</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{getContactlist.map((value) => {
							return (
								<tr key={value.id}>
									<td>{value.fname}</td>
									<td>{value.lname}</td>
									<td>{value.email}</td>
									<td>{value.address}</td>
									<td>{value.subject}</td>
									<td>
										<input
											type='text'
											name=''
											id='subject'
											className='form__input'
											placeholder='Enter First Name..'
											onChange={(e) => {
												setUpdFname(e.target.value);
											}}
										/>
										<br />
										<input
											type='text'
											name='url'
											id='subject'
											className='form__input'
											placeholder='Enter Last Name..'
											onChange={(e) => {
												setUpdLname(e.target.value);
											}}
										/>{' '}
										<br />
										<input
											type='text'
											name=''
											id='subject'
											className='form__input'
											placeholder='Enter Email address..'
											onChange={(e) => {
												setUpdEmail(e.target.value);
											}}
										/>
										<br />
										<input
											type='text'
											name=''
											id='subject'
											className='form__input'
											placeholder='Enter Home address..'
											onChange={(e) => {
												setUpdAddress(e.target.value);
											}}
										/>{' '}
										<br />
										<input
											type='text'
											name=''
											id='subject'
											className='form__input'
											placeholder='Enter message..'
											onChange={(e) => {
												setUpdSubject(e.target.value);
											}}
										/>
										<br />
										<div className='btn-group'>
											<button
												type='button'
												className='btn btn-warning'
												onClick={() => {
													updateContact(value.id);
												}}
											>
												Update
											</button>
											<button
												type='button'
												className='btn btn-danger'
												onClick={() => {
													deleteContact(value.id);
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
				<br /> <br />
				<br />
				<br />
				<br /> <br />
				<br />
				<br />
			</div>
		</div>
	);
};

export default Contact;
