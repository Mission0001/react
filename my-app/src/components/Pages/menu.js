import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const style = {
	fontSize: '30px',
	fontFamily: 'serif',
	backgroundColor: '#F8F8FF',
	textTransform: 'uppercase',
	textAlign: 'center',
};

const Menu = () => {
	const [getOrderburger1, setOrderburger1] = useState('Burger King Whopper');
	const [getOrderburger2, setOrderburger2] = useState('Whiskey BBQ Burger');
	const [getOrderburger3, setOrderburger3] = useState('Bacon CheeseBurger');
	const [getOrderburger4, setOrderburger4] = useState('Shake Shack Burger');

	const [getOrderlist, setOrderlist] = useState([]);

	useEffect(() => {
		Axios.get('http://localhost:3001/getBurger').then((response) => {
			setOrderlist(response.data);
		});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		Axios.post('http://localhost:3001/insertBurger', {
			burger_name: getOrderburger1,
		}).then((response) => {
			setOrderlist([...getOrderlist, { burger_name: getOrderburger1 }]);
		});
	};

	const handleSubmit1 = (e) => {
		e.preventDefault();
		Axios.post('http://localhost:3001/insertBurger1', {
			burger_name: getOrderburger2,
		}).then((response) => {
			setOrderlist([...getOrderlist, { burger_name: getOrderburger2 }]);
		});
	};

	const handleSubmit2 = (e) => {
		e.preventDefault();
		Axios.post('http://localhost:3001/insertBurger2', {
			burger_name: getOrderburger3,
		}).then((response) => {
			setOrderlist([...getOrderlist, { burger_name: getOrderburger3 }]);
		});
	};

	const handleSubmit3 = (e) => {
		e.preventDefault();
		Axios.post('http://localhost:3001/insertBurger3', {
			burger_name: getOrderburger4,
		}).then((response) => {
			setOrderlist([...getOrderlist, { burger_name: getOrderburger4 }]);
		});
	};

	const deleteOrder = (id) => {
		Axios.delete(`http://localhost:3001/deleteBurger/${id}`).then((response) => {
		  setOrderlist(
			getOrderlist.filter((value) => {
			  return value.id !== id;
			})
		  );
		});
	  };
	

	return (
		<div style={style}>
			<table className='table'>
				<tbody>
					<tr className='cl3'>
						<th scope='row'>Beef Burgers</th>
						<th scope='row'>Veggie Burgers</th>
						<th scope='row'>Turkey Burgers</th>
						<th scope='row'>Portobello Mushroom Burgers</th>
					</tr>
					<tr>
						<td>
							<div className='card'>
								<form onSubmit={handleSubmit}>
									<img
										src='https://www.thepackagingcompany.us/knowledge-sharing/wp-content/uploads/sites/2/2019/05/ip-bk-whopper-blog.jpg'
										alt='new'
										width={'300px'}
										height={'300px'}
									/>
									<h2>
										<input
											type='button'
											className='btw'
											value={getOrderburger1}
											onChange={(e) => setOrderburger1(e.target.value)}
										/>
									</h2>
									<p className='price'>₱50</p>

									<div className='card1'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quidem, iste totam et laboriosam perferendis tenetur quis
										ratione assumenda, odio, vitae odit reiciendis! In natus
										cum, ut soluta repellendus quidem qui?
										<button type='submit'>Add to Cart</button>
									</div>
								</form>
							</div>
						</td>

						<td>
							<div className='card'>
								<form onSubmit={handleSubmit1}>
									<img
										src='https://media.istockphoto.com/photos/fried-chicken-sandwich-picture-id511520568?k=20&m=511520568&s=612x612&w=0&h=4SChcngzqOE2nNCEQV26ZCtA84BlhAshnxcdN5Beb7I='
										alt='new'
										width={'300px'}
										height={'300px'}
									/>
									<h2>
										<input
											type='button'
											className='btw'
											value={getOrderburger2}
											onChange={(e) => setOrderburger2(e.target.value)}
										/>
									</h2>
									<p className='price'>₱45</p>

									<div className='card1'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quidem, iste totam et laboriosam perferendis tenetur quis
										ratione assumenda, odio, vitae odit reiciendis! In natus
										cum, ut soluta repellendus quidem qui?
										<button type='submit'>Add to Cart</button>
									</div>
								</form>
							</div>
						</td>

						<td>
							<div className='card'>
								<form onSubmit={handleSubmit2}>
									<img
										src='https://previews.123rf.com/images/belchonock/belchonock1902/belchonock190209458/116958943-tasty-burger-with-bacon-on-white-background.jpg'
										alt='new'
										width={'300px'}
										height={'300px'}
									/>
									<h2>
										<input
											type='button'
											className='btw'
											value={getOrderburger3}
											onChange={(e) => setOrderburger3(e.target.value)}
										/>
									</h2>
									<p className='price'>₱50</p>

									<div className='card1'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quidem, iste totam et laboriosam perferendis tenetur quis
										ratione assumenda, odio, vitae odit reiciendis! In natus
										cum, ut soluta repellendus quidem qui?
										<button type='submit'>Add to Cart</button>
									</div>
								</form>
							</div>
						</td>

						<td>
							<div className='card'>
								<form onSubmit={handleSubmit3}>
									<img
										src='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Shake-Shack-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459385949.jpeg'
										alt='new'
										width={'300px'}
										height={'300px'}
									/>
									<h2>
										<input
											type='button'
											className='btw'
											value={getOrderburger4}
											onChange={(e) => setOrderburger4(e.target.value)}
										/>
									</h2>
									<p className='price'>₱60</p>

									<div className='card1'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Quidem, iste totam et laboriosam perferendis tenetur quis
										ratione assumenda, odio, vitae odit reiciendis! In natus
										cum, ut soluta repellendus quidem qui?
										<button type='submit'>Add to Cart</button>
									</div>
								</form>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<br />
			<br />
			<a href='#sign'>
				<button type='button' className='bt1'>
					Menu Information
				</button>
			</a>
			<br /> <br /> <br /> <br /> <br /> <br /> <br />
			<div className='container2 p-5'>
				<a name='sign'>
					<h2>Order Information</h2>
				</a>
				<table className='table table-dark table-striped'>
					<thead>
						<tr>
							<th>Order</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{getOrderlist.map((value) => {
							return (
								<tr key={value.id}>
									<td>{value.burger_name}</td>

									<td>
										<div className='btn-group'>
										
											<button
												type='button'
												className='btn btn-danger'
												onClick={() => {
													deleteOrder(value.id);
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
	);
};
export default Menu;
