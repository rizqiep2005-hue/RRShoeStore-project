const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");


registerForm.addEventListener("submit", async function(event) {

    event.preventDefault();
     
    const username = document.getElementById("Registerusername").value;
    const Registeremail = document.getElementById("Registeremail").value;
    const confirmEmail = document.getElementById("confirmEmail").value;
    const Registerpassword = document.getElementById("Registerpassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  


    if(Registeremail !== confirmEmail){
        message.textContent = "your confirm email is wrong";
        return;
    }

    if(Registerpassword !== confirmPassword){
        message.textContent = "your confirm password is wrong";
        return;
    }
   
    try {
        const response = await fetch("../backend/register.php",{
           method: "POST",
           headers: {
              "Content-Type" : "application/json"
           },
           body: JSON.stringify({
            username: username,
            email: Registeremail,
            password: Registerpassword
           })
        });
    

    const result = await response.json();

    if(result.status === "success"){
        window.location.href = result.redirect;
    }

} catch (error){
    document.getElementById("message").textContent = "terjadi kesalahan, coba lagi"; //menampilkan pesan error ke browser
    console.error("Detail error", error); //pesan error di console"
}




});