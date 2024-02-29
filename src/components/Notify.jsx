import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Notify() {
  const notify = () => {
    toast("Success  !");

  };

   return (
      <>
        <button onClick={notify}>Notify</button>;
        <ToastContainer 
        theme="dark"
        autoClose={4000}
        />
      </>
    );
}

export default Notify