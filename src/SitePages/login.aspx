<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://kit.fontawesome.com/2e5c335099.js" crossorigin="anonymous"></script>
    
    <link rel="stylesheet" href="https://bootswatch.com/4/journal/bootstrap.min.css">
    <title>Node.js & Passport App</title>
    <script src = "test.js"></script>

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
            <h1 class="text-center mb-3"><i class="fas fa-sign-in-alt"></i>  Login</h1>
            
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  class="form-control"
                  placeholder="Enter username"
                  value = ""
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  placeholder="Enter Password"
                  value = ""
                />
              </div>
              <button type="submit" onclick = "getLogin(document.getElementById('username').value,document.getElementById('password').value)" class="btn btn-primary btn-block">Login</button>
              <script>
                function getLogin(user,pass){
                  var userInp = user;
                  var passInp = pass;
              
                  console.log(userInp);
                  console.log(passInp);
              
                  var userArr = ['jesus','jose'];
                  var userTemp = -1;
              
                  var passArr = ['123','456'];
                  var passTemp = -2;
                  if(userInp === '' || passInp === ''){
                      alert("Fill in username and password field");
                  }
                  else{
              
                      for(var i =0; i< userArr.length; i++){
                          if(userInp === userArr[i]){
                              userTemp = i;
                          }
                      }
                
                      for(var i =0; i<passArr.length; i++){
                          if(passInp === passArr[i]){
                            passTemp = i;
                          }
                      }
              
                      if(userTemp === passTemp){
                        window.location.href = "SoftWareHouse.aspx";
                      }
                      else{
                        alert("Wrong information,try again.");
                      }
                    }       
              }
              </script>
            <p class="lead mt-4">
              No Account? <a href="register.aspx">Register</a>
            </p>
          </div>
        </div>
      </div>
</body>
</html>
