<Form onSubmit={handleOnSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control
      type="email"
      placeholder="Enter email"
      id="email"
      onChange={handleOnChange}
    />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control
      type="password"
      placeholder="Password"
      id="password"
      onChange={handleOnChange}
    />
  </Form.Group>
  <Button variant="primary" type="submit">
    SignUp
  </Button>
</Form>;
