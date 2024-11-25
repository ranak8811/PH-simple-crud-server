/**
 * ----------------------------------------------------------------
 * Mongodb connection
 * ----------------------------------------------------------------
 *
 * 1. Create an account
 * 2. Create an user with password
 * 3. Whitelist IP addresses
 * 4. database > connect > driver > Node > View full code
 * 5. Change the password in the uri
 *
 * ----------------------------------------------------------------
 *
 * -------------------
 * CREATE --- POST
 * -------------------
 *
 * 1. app.post('/users', async (req, res) => {})
 * 2. make the function async to use await inside it
 * 3. make sure you used the express.json() middleware
 * 4. access data from the body: const user = req.body;
 * 5. const result = await userCollection.insertOne(user);
 * 6. res.send(result);
 *
 * -------------------
 * CLIENT --- Side for POST requests
 * -------------------
 *
 * 1. fetch the url
 * 2. add second parameter as object
 * 3. provide method: 'POST'
 * 4. add headers: {'content-type': 'application/json'}
 * 5. add body: JSON.Stringify(user)
 *
 * ----------------------------------------------------------------
 *
 * -------------------
 * READ (many - more than one)
 * -------------------
 *
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray();
 *
 *
 * -------------------
 * DELETE
 * -------------------
 *
 * 1. create app.delete('/users/:id', async (req, res) => {})
 * 2. specify new ObjectId to delete the right user
 * 3. const query = {_id: new ObjectId(id)}
 * 4. const result = await userCollection.deleteOne(query)
 *
 * -------------------
 * CLIENT --- Side for DELETE requests
 * -------------------
 *
 * 1. create a dynamic url using id
 * 2. mention the DELETE method
 *
 *
 */
