document.getElementById("btnadd").addEventListener("click",add_student);
function add_student (e){
    e.preventDefault();
    // console.log("add btn");
    let em = document.getElementById("email").value
    let nm = document.getElementById("name").value
    let pw = document.getElementById("password").value
    // console.log(em);
    // console.log(nm);
    // console.log(pw);
    const xhr = new XMLHttpRequest();
    xhr.open("POST","insert.php",true);

    xhr.setRequestHeader("Content-Type","application/json");

    xhr.onload = () =>{
        if (xhr.status === 200){
            document.getElementById("msg").innerHTML="<div>"+ xhr.responseText +"</div>"
            // console.log(xhr.responseText);
    }
    else{
        console.log("problem")
    };
    }
    const mydata = {name: nm, email: em, password: pw};
    // console.log(mydata);
    const data = JSON.stringify(mydata);
    // console.log(data);


    xhr.send(data);
}