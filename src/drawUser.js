/** 
 * 绘制用户点，格式在user.js中
 */
function drawUser(data) {
    for (let i = 0; i < data.length; i++) {
        var current_line_users = data[i].coor;
        current_line_users.forEach(element => {
            let marker = L.circle(element, {
                radius: 25,
                stroke: true
            }).addTo(map);
        });
    }
}
// drawUser(user)
var arrs = [];
user.forEach(element => {
    element.coor.forEach(coor => {
        arrs.push(coor);
    })
})
// console.log(arrs);
// drawPolygon(arrs);