const nameEL = document.getElementById("name")
const familyNameEl = document.getElementById("family-name")
const emailEL = document.getElementById("email")
const passwordEL = document.getElementById("password")
const btnEL = document.getElementById("btn")
const signupForm = document.getElementById("signup-form")
const freeTrial = document.querySelector(".free-trial")



signupForm.addEventListener("submit",function(e){
    e.preventDefault()

    const signupFormData = new FormData(signupForm)
    const name = signupFormData.get("name")
    // const familyName = signupFormData.get("family-name")
    // const email = signupFormData.get("email")
    // const password = signupFormData.get("password")

    
    
    freeTrial.innerHTML = `
    <div class="new">
        <h2>Thanks <span class="modal-display-name">${name}</span> for your subscription</h2>
        <p>Please check your Dashboard for more courses</p>
        <button class="style-btn-new">Dashboard</button> 
    </div>`

})