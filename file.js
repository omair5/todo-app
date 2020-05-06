let mydate = new Date()
document.getElementById('for-time').innerHTML = mydate

// SELECTORS
const my_add_icon = document.querySelector('.my-add-icon')
const get_value = document.querySelector('.my-input-box')
const get_container = document.querySelector('.container-fluid')


// EVENT LISTENER
my_add_icon.addEventListener('click', addItem)
get_container.addEventListener('click', del_and_edit_item)


// FUNCTIONS

function addItem() {
    const todo = get_value.value
    if (todo !== '') {
        const add_item_container = `
        <div class=for-deleting>
        <li class=my-list><input type=text value=${todo} disabled></li>
        <i class="fa fa-check"></i>
        <i class="fa fa-trash"></i>
        <i class="fa fa-edit"></i>
        </div>`
        document.querySelector('.uol').insertAdjacentHTML("beforeend", add_item_container)
        get_value.value = ''
    }
    else {
        alert("PLEASE ADD A TODO")
    }
}

function del_and_edit_item(e) {
    const item = e.target
    console.log(item)
    if (item.classList[1] === 'fa-trash') {
        // DONT USE THIS

        // const deleting=document.querySelector('.for-deleting')
        // deleting.remove()

        // BETTER TO USE
        const deleting = item.parentElement
        deleting.remove()
    }

    else if (item.classList[1] === 'fa-edit') {
        console.log("working")
        item.parentElement.childNodes[1].childNodes[0].disabled = false
        const update_button = document.createElement('button')
        update_button.innerHTML = 'update'
        update_button.setAttribute('class', 'update')
        // bcz of query selector only first class get selected (solution item selected parent element)
        // plus multiple update boxes appers on click
        item.style.display = 'none'
        item.parentElement.appendChild(update_button)
    

        
        // document.querySelector('.update').addEventListener('click', function () {
        //     item.parentElement.childNodes[1].childNodes[0].disabled = true
        //     document.querySelector('.update').style.display = 'none'

        // })

    }
    else if (item.classList[0] === 'update') {
        console.log(item.className)
        item.parentElement.childNodes[1].childNodes[0].disabled = true
        item.style.display = 'none'
        item.parentElement.childNodes[7].style.display='inline-block'




    }





    //     console.log(item.parentElement.childNodes[1].innerHTML)
    //     const value_for_editing=item.parentElement.childNodes[1].innerHTML
    //     // item.parentElement.remove()
    //     get_value.value=value_for_editing
    // }


    else if (item.classList[1] === 'fa-check') {
        item.parentElement.childNodes[1].childNodes[0].classList.toggle('line-thru')

    }
}





// const gettinguol=document.querySelector('.uol')
// gettinguol.addEventListener('click',deleteItem)


















// function deleteItem(e) {
//     console.log(e.target)
//     const item=e.target
//     console.log(item.classList)
//     if (item.classList[2]==='test'){
//         console.log('hurray')
//         const todoo=item.parentElement
//         todoo.remove()
//     }
//     else{
//         console.log("nothing happens")
//     }

// }





// var row = 0;
// function addText(){
//     var input = document.getElementById('inputTask').value;
//     if(input != "")
//     {
//     var node=document.createElement("p");
//     var textnode=document.createTextNode(input);
//     node.appendChild(textnode);
//         node.setAttribute("id","contentP"+row);
//     document.getElementById('addTask').appendChild(node);

//     var removeTask = document.createElement('input');
//     removeTask.setAttribute('type', 'button');
//     removeTask.setAttribute("value", "Remove");
//     removeTask.setAttribute("id", "removeButton");
//     removeTask.setAttribute("onClick", "deleterow("+ row +");");

//     node.appendChild(removeTask);
//         row++;
//     }
//     else
//     {
//         alert("Please insert a value!");
//     }

// }
// function deleterow(ID)
// {
//     document.getElementById('contentP'+ID).remove();
// }

