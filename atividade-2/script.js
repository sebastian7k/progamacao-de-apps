function calcular (){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let soma = n1 + n2
    let media= soma/ 2
    let produto = n1 * n2
    let maior = Math.max(n1,n2)
    let menor = Math.min(n1,n2)

    let res = document.getElementsById("resultado")
    
    res.innerHTL= `
    Soma: ${soma} <br>
    Média: ${media} <br>
    Produto: ${produto} <br>
    Maior número: ${maior} <br>
    Menor número: ${menor}`
}
