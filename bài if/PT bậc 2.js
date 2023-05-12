function tinh(){
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    let c = document.getElementById("c").value
    if (a === 0){
        if (b == 0){
            if (c === 0){
                alert("phương trình vô số nghiệm")
            } else {
                alert("phương trình vô nghiệm")
            }
        }else {
            alert("phương trình có 1 nghiệm là "+ -c/b)
        }
    }else {
        let delta = b * b - 4 * a * c
        if (delta < 0 ){
            alert("phương trình vô nghiệm")
        }else if (delta == 0){
            alert("phương trình có hai nghiệm kép là " + - b / (2 * a))
        }else {
            alert("phương trình có hai nghiệm phân biệt là" )

        }
    }
}


