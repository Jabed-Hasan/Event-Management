import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
     const { createUser } = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,photoUrl,email,password);
    
        
    createUser(email,password)
    .then(result => {
        console.log(result.user)
    })
    .catch(error => {
        console.log(error)
    })
    
    }
    return (
        <div>
            
<h1 className='text-center text-4xl font-semibold mt-5'>Please Register!</h1>
<form onSubmit={handleRegister} className="card-body  md:w-3/5 lg:w-1/2 mx-auto">
        <div className="form-control">
          
          <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" required name='name' placeholder="Name" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo-Url</span>
          </label>
          <input type="text" required name='photoUrl' placeholder="Photo Url" className="input input-bordered"  />
          <label className="label">
          <span className="label-text">Email</span>
          </label>
        </div>


          <input type="email" required name='email' placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" required name='password' placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
     <p className='text-center mt-4'>Already Have an Account?<Link className='text-blue-600' to = '/login'>Login</Link></p>

</div>
    );
};

export default Register;