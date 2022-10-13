import Alert from 'react-bootstrap/Alert';

function alertMsg() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((success) => (
        <Alert key={success} variant={success}>
          Successfully registered..!
        </Alert>
      ))}
    </>
  );
}

export default alertMsg;