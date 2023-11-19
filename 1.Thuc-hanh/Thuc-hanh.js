// let text = "";
// let cars = ["c","o", "d", "e", "g", "y", "m"];
// for (i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }
// document.write(text);

// Thực hành vòng lặp while

// let num = parseInt(prompt("Enter a number"));
// let total = 0;
// while (num!=-1) {
//     total +=num;
//     num = parseInt(prompt("Enter a number"))
//     alert(num);
//
// }
// document.write(total);
//
// let i = 1;
// while (i < 100) {
//     document.write("<hr width = " + i + "%>");
//     i++;
// }

// Vòng lặp lồng nhau
//
// let sout;
// sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>"
// for (i = 1; i <= 10; i++) {
//     sout = sout + "<tr>";
//     for (j = 1; j <= 10; j++) {
//         sout = sout + "<td>" + i * j + "</td>";
//     }
//     sout = sout + "</tr>";
// }
// sout = sout + "</table>";
// document.write(sout);

// let sout, i, j;
// sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
// i = j = 1;
// while (i <= 10) {
//     sout = sout + "<tr>";
//     while (j <= 10) {
//         sout = sout + "<td>" + i * j + "</td>";
//         j++;
//     }
//     sout = sout + "</tr>";
//     j = 1;
//     i++;
// }
// sout = sout + "</table>";
// document.write(sout);

