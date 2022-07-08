const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'mydata',
});

app.get('/get', (req, res) => {
	const sqlSelect = 'SELECT * FROM `user` ';
	db.query(sqlSelect, (err, result) => {
		res.send(result);
	});
});

app.post('/insert', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	const sqlInsert = 'INSERT INTO `user`(`username`, `password`) VALUES (?,?)';
	db.query(sqlInsert, [username, password], (err, result) => {
		res.send(result);
	});
});

app.delete('/delete/:id', (req, res) => {
	const id = req.params.id;
	db.query('DELETE FROM user WHERE id = ?', id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});


app.put('/update', (req, res) => {
	const id = req.body.id;
	const username = req.body.username;
	const password = req.body.password;

	db.query(
		'UPDATE user SET username = ?, password = ? WHERE id = ?',
		[username, password, id],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send(result);
			}
		}
	);
});



app.get('/getCon', (req, res) => {
	const sqlSelect = 'SELECT * FROM `contact_detail` ';
	db.query(sqlSelect, (err, result) => {
		res.send(result);
	});
});

app.post('/insertCon', (req, res) => {
	const fname = req.body.fname;
	const lname = req.body.lname;
	const email = req.body.email;
	const address = req.body.address;
	const subject = req.body.subject;

	const sqlInsert =
		'INSERT INTO `contact_detail`(`fname`, `lname`, `email`, `address`, `subject`)  VALUES (?,?,?,?,?)';
	db.query(
		sqlInsert,
		[fname, lname, email, address, subject],
		(err, result) => {
			res.send(result);
		}
	);
});

app.delete('/deleteContact/:id', (req, res) => {
	const id = req.params.id;
	db.query('DELETE FROM contact_detail WHERE id = ?', id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});

app.put('/updateContact', (req, res) => {
	const id = req.body.id;
	const fname = req.body.fname;
	const lname = req.body.lname;
	const email = req.body.email;
	const address = req.body.address;
	const subject = req.body.subject;
	db.query(
		'UPDATE contact_detail SET fname = ?, lname = ?, email = ?,  address = ?, subject = ? WHERE id = ?',
		[fname, lname, email, address, subject, id],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send(result);
			}
		}
	);
});

app.get('/getBurger', (req, res) => {
	const sqlSelect2 = 'SELECT * FROM `user_order`';
	db.query(sqlSelect2, (err, result) => {
		res.send(result);
	});
});

app.delete('/deleteBurger/:id', (req, res) => {
	const id = req.params.id;
	db.query('DELETE FROM user_order WHERE id = ?', id, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});

app.post('/insertBurger', (req, res) => {
	const burger_name = req.body.burger_name;

	const sqlInsert = 'INSERT INTO `user_order`(`burger_name`)  VALUES (?)';

	db.query(sqlInsert, [burger_name], (err, result) => {
		return res.send(result);
	});
});

app.post('/insertBurger1', (req, res) => {
	const burger_name = req.body.burger_name;

	const sqlInsert = 'INSERT INTO `user_order`(`burger_name`)  VALUES (?)';

	db.query(sqlInsert, [burger_name], (err, result) => {
		return res.send(result);
	});
});

app.post('/insertBurger2', (req, res) => {
	const burger_name = req.body.burger_name;

	const sqlInsert = 'INSERT INTO `user_order`(`burger_name`)  VALUES (?)';

	db.query(sqlInsert, [burger_name], (err, result) => {
		return res.send(result);
	});
});

app.post('/insertBurger3', (req, res) => {
	const burger_name = req.body.burger_name;

	const sqlInsert = 'INSERT INTO `user_order`(`burger_name`)  VALUES (?)';

	db.query(sqlInsert, [burger_name], (err, result) => {
		return res.send(result);
	});
});

app.put('/update', (req, res) => {
	const id = req.body.id;
	const burger_name = req.body.burger_name;


	db.query(
		'UPDATE user_order SET burger-name = ? WHERE id = ?',
		[burger_name, id],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send(result);
			}
		}
	);
});


app.listen(3001, () => {
	console.log('Port is Successfull in 3001');
});
