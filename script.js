fetch("https://api.hatchways.io/assessment/students").then((data) => {  
    // console.log(data);
    return data.json();
}).then((compdata) => {
    // console.log(compdata.students[2].city);
    // document.getElementById('city').innerHTML=compdata.students[2].city
    // compdata = compdata.students;
    let data1 = "";
    console.log(compdata);
    (compdata.students).map((value) => {
        let count = 0, avg = 0;
        (value.grades).map((v) => {
            count++;
            avg = parseFloat(avg) + parseFloat(v);
        })
        avg = avg / count;
        data1 +=`<div class="data">
         <table>
            <tr>
                <td>
                <img class="profile" src=${value.pic} alt="profile">
                </td>
                <td class="details">
   <h2 class="name">${value.firstName} ${value.lastName}</h2>
        <p class="email">${value.email}</p>
        <p class="company">${value.company}</p>
        <p class="skill">${value.skill}</p>
        <p class="avg">${avg}%</p>
                </td>
            </tr>
        </table>
    </div>`
    });
    document.getElementById("student_prof").innerHTML = data1;
}).catch((err)=>{
    console.log(err);
})
function searchName() {
    let input = document.getElementById('serchName').value
    input = input.toLowerCase();
    let n = document.getElementsByClassName('name');
    for (let i = 0; i < n.length; i++);
    {
        if (!n[i].innerHTML.toLowerCase().includes(input)) {
            n[i].style.display="none";
        }
        else {
            n[i].style.display="table";
        }
    }
}