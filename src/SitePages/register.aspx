<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://kit.fontawesome.com/2e5c335099.js" crossorigin="anonymous"></script>
    
    <link rel="stylesheet" href="https://bootswatch.com/4/journal/bootstrap.min.css">
    <title>Node.js & Passport App</title>
</head>
<body>
    <body style="background-color:gray;">

    <div class="container">
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card card-body">
            <h1 class="text-center mb-3">
              <i class="fas fa-user-plus"></i> Register
            </h1>
           
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  class="form-control"
                  placeholder="Enter Name"
                  value=""
                />
              </div>

              <div class="form-group">
                <label for="username">username</label>
                <input
                  type="name"
                  id="name"
                  name="name"
                  class="form-control"
                  placeholder="Enter Name"
                  value=""
                />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  placeholder="Enter Email"
                  value=""
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  placeholder="Create Password"
                  value=""
                />
              </div>
              <div class="form-group">
                <label for="password2">Confirm Password</label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  class="form-control"
                  placeholder="Confirm Password"
                  value=""
                />
              </div>
                <button type="submit" onclick = "getRegister(document.getElementById('password').value,document.getElementById('password2').value)" class="btn btn-primary btn-block">Register</button>
                <script>
                  function getRegister(pass,pass2){
                    var password = pass;
                    var confirmpass = pass2;
                              
                   if(password !=confirmpass){
                       alert("Passwords don't match, try again");
                    }
                    else{
                          window.location.href = "SoftWareHouse.aspx";
                        }       
                   }
                </script>
            <p class="lead mt-4">Have An Account? <a href="login.aspx">Login</a></p>
          </div>
        </div>
      </div>
      
</body>
</html>