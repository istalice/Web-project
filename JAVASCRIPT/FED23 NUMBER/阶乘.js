function _factorial(number){
    if (typeof number !== "number") return
    if (number < 0) return
    if (number == 0) return 1
    return number*_factorial(number-1)
}