function search(){
    var arr = ["Pen" , "Pencil" , "Paper" , "Pent" , "Elephant" , "Aeroplane" , "Mobile","Mouse", "Mopad"]

var str = document.getElementById('inp').value

var out = ""
if(str !== null && str != undefined && str != "" )
{


var fa =  arr.filter((v,i)=>{
        return v.toLowerCase().includes(str.toLowerCase())
})



for(let i = 0 ; i < fa.length ; i++)
{
    out += `<h1>${i+1}  ${fa[i]}</h1>`
}

document.getElementById('sp').innerHTML = out

}
else{
    document.getElementById('sp').innerHTML = "<h1>No Items in Search</h1>"

}

}