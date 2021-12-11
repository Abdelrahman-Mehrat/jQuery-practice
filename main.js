$(document).ready(function () {
    // $("#parent").append("aaaa")
    $.ajax("https://jsonplaceholder.typicode.com/posts",
        {
            type: "GET",
            success: function (response) {
                // console.log(response)
                $.each(response, function (index, ele) {
                    var increaseHTML = ""
                    increaseHTML = `
                    <div class="wrapper" id="wr${ele.id}">
                        <h1>${ele.id}</h1>
                        <h3>${ele.title}</h3> 
                        <p>${ele.body}</p>
                        <div class="btnContainer">
                            <button class="edit"  id="${ele.id}">Edit</button>
                            <button class="delete" onClick="deleteFunc(${ele.id})" >Delete</button>
                        </div>
                    </div>
                `
                    
                    $("h1").css({"color":"#87e687","font-size" :"4rem"}); //style only
                     $("#parent").append(increaseHTML);
                })
                $(".edit").click(function(){
                    console.log($(this.id));
                    localStorage.setItem("id",$(this).attr("id"))
                    window.location.href = "index2.html";  //direct to edit page
                })
            },
            error: function (error) {
                console.log(error)
            },    
        })
        
})


function deleteFunc(idd){
    var con = confirm("you are going to remove element from the ^DOM^");
                    // console.log(con,this);
                    if(con==true){
                        $.ajax(`https://jsonplaceholder.typicode.com/posts/${idd}`,
                        {
                            type: "DELETE",
                            success: function () {
                                $(`#wr${idd}`).remove(); //remove from dom
                                console.log("deleted");
                            },
                            error: function () {
                                console.log("error")
                            }   
                        }
                        )
                    }
}