const node_for_click_surname = document.getElementById("for_click_surname")
function find_edit_surname(){
    const item  = document.getElementsByTagName('p')[2]
    console.log(item.innerText)
    item.innerText = 'CHERNYSHOVA'
}
node_for_click_surname.addEventListener("click",find_edit_surname)


const node_for_click_name = document.getElementById("for_click_name")
function find_edit_name(){
    document.getElementsByTagName('p')[3].innerText='KARINA'
}
node_for_click_name.addEventListener("click",find_edit_name)


const node_for_click_date = document.getElementById("for_click_date")
function find_edit_date(){
    document.getElementsByTagName('p')[5].childNodes[1].innerText='JUNE 3, 2005'
}
node_for_click_date.addEventListener("click",find_edit_date)
