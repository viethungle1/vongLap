// let count =0;
// let start = +prompt("moi ban nhap so bat dau");
// let number = + prompt("moi ban nhap so luong phan tu");
// while (count<number){
//     if (checkPrime(start)){
//         document.write(`${start} <br>`)
//         count++
//     }
//     start++;
// }
// function checkPrime(n) {
//     let isPrime = true;
//     if (n<2){
//         isPrime=false;
//     }
//     else {
//         if (n>3){
//             for (let i = 2; i < n; i++) {
//                 if (n%i==0){
//                     isPrime = false;
//                     break;
//                 }
//             }
//         }
//     }
//     return isPrime;
// }

// let start = +prompt("Nhập số nguyên tố bắt đầu")
// let number = +prompt("Số lượng số nguyên tố cần in ra")
// let count = 0;
// while (count<number) {
//     if (checkPrime(start)) {
//         document.write(`${start} <br>`)
//         count++
//     }
//     start++
// }
// function checkPrime(n) {
//     let isPrime = true
//     if (n < 2) {
//         isPrime = false;
//     } else {
//         if (n > 3) {
//             for (let i = 2; i < n ; i++) {
//                 if (n % i == 0) {
//                     isPrime = false;
//                     break
//                 }
//             }
//         }
//     }
//     return isPrime
// }

// Bài1
// for (i=0; i<100; i++) {
//     if (i==99) {
//         alert("Đã hoàn thành")
//     }
// }
// Bài 2
// let temp=+prompt("Nhập nhiệt độ cơ thể");
// while (temp<20 || temp>100) {
//     if (temp<20) {
//         alert("Tăng nhiệt độ lên");
//     }else if (temp>100) {
//         alert("Giảm nhiệt độ");
//     }
//     temp = prompt("Nhập lại");
// }
// alert("Bình thường");
// Bài 3: Hiển thị ra 20 số đầu tiên trong dãy Fibonacci
// let n=+prompt("Nhập số dãy Fibonacci cần hiển thị ")
// let n1=1;
// let n2=1;
// let n3;
// for (let i = 0; i < n; i++) {
//     document.write(`${n1} <br>`)
//     n3=n1+n2
//     n1=n2
//     n2=n3
// }
// Bài 4 Tìm số đầu tiên trong dãy Fibonacci chia hết cho 5
// let n=+prompt("Nhập số dãy Fibonacci cần hiển thị ")
// let n1=1;
// let n2=1;
// let n3;
// for (let i = 0; i < n; i++) {
//     n3=n1+n2
//     n1=n2
//     n2=n3
//     if (n1%5==0) {
//         document.write(`Số đầu tiên chia hết cho 5 là ${n1} <br>`)
//         break
//     }
// }
// Bài 5 Tính tổng 20 số đầu tiên trong dãy Fibonacci
let n1=1;
let n2=1;
let n3;
let total=0;
for (let i = 0; i < 20; i++) {
    document.write(`số Fibonacci thứ ${i+1} là ${n1} <br>`)
    n3 = n1 + n2
    n1 = n2
    n2 = n3
    total +=n2-n1
}
document.write(" Tổng của các số là " +total)


