$(document).ready(function () {
    var myId = localStorage.getItem("id");
    $.ajax(`https://jsonplaceholder.typicode.com/posts/${myId}`,
{
    type:"GET",
    success:function(response){
        // console.log(response);
        // console.log(localStorage.getItem("id"));
        var myOutPut = "";
        myOutPut = `<div  id="myForm">
            <input type="text" id="titlee" value="${response.title}">
            <input type="text" id="bodyy" value= "${response.body}">
            <div>
                <button id="save"">save</button>
                <button id="cancel">cancel</button>
            </div>
        </div>`
        $(".show").append(myOutPut)
        // console.log(response.title);
        // console.log(`${response.body}`);
        // cancel function
        $("#cancel").on("click",function(){
            window.location.href ="index.html";
        })
        // save function
        $("#save").on("click",function(){
            if($("#titlee").val() && $("#bodyy").val()){ //check the value if it has value
                $.ajax(`https://jsonplaceholder.typicode.com/posts/${myId}`,
                {
                    type:"PUT",
                    success:function(){
                        alert("saved!! done");
                        window.location.href ="index.html";
                    }
            })
        }else{
            alert("empty");
        }
        });
    }
})


});










// function saveFunc(){
//     // if($("#titlee").val()){
//         $.ajax(`https://jsonplaceholder.typicode.com/posts/${myId}`,
//         {
//             type:"PUT",
//             success:function(){
//                 console.log("saved!! done");
//             }
//         })
//     // } else{
//     //     alert("empty");
//     // }