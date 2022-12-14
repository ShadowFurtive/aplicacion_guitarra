let connection = 'localhost'
//let connection = '10.0.2.2'
function searchFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.querySelector('.list');
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0]; 
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }


const addList = (array, element) => {
    array.forEach(item => {
        const li = document.createElement('li')
        const a = document.createElement('a');
        a.textContent = item.name;
        a.setAttribute('href', "http://"+connection+"/cancion.html?song="+item.name);
        li.appendChild(a);
        element.appendChild(li)
    });
}
getAllNames()
.then((result) => {
    const list = document.querySelector('.list');
    addList(result, list);
})