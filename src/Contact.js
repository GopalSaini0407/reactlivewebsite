import React,{useState} from 'react'
function Contact()
{
    const [data,setData]=useState(
        {
         firstName:"",
         lastName:"",
         email:"",
         msg:""
    }
    )

    function onEvent(e)
    {
      const {name,value}=e.target;

      setData((oldData)=>
      {
        return {
            ...oldData,
            [name]:value
        }
      }


      )
    }

    function onSubmit(e)
    {
        e.preventDefault();
        alert(`My first name is ${data.firstName} My last name is ${data.lastName} Email is ${data.email} Message is ${data.msg}`);

    }
    return(<>
        <div className="my-5">
            <h1 className="text-center">Contact US</h1>
        </div>
        <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={onSubmit}> 
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">First Name</label>
  
  <input
   type="text" 
   class="form-control" 
    placeholder="First Name" 
    name="firstName"
    value={data.firstName}
    onChange={onEvent}

    />
</div>
 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Last Name</label>

  <input
   type="text"
    class="form-control" 
     placeholder="Last Name"
     name="lastName"
    value={data.lastName}
    onChange={onEvent}


     />
</div>

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input 
  type="email"
  class="form-control" 
 placeholder="name@example.com"
 name="email"
value={data.email}
onChange={onEvent}
 />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea
   class="form-control" 
   rows="3"
   name="msg"
    value={data.msg}
    onChange={onEvent}
   >

   </textarea>
</div>
<div class="d-grid gap-2 col-6 mx-auto">
 
  <button class="btn">Button</button>
</div>

                </form>
            </div>
        </div>
         </div>
    </>)
}

export default Contact;