//绘制模拟数据线路下方的用户
var user_line = [


    {
        coor: [31.858696568292135, 117.30875048786403],
        value: 20,
        level: 1,
    },
    {
        coor: [31.858095137189462, 117.3079350963235],
        value: 30,
        level: 1,
    },
    {
        coor: [31.857402575302203, 117.30924401432277],
        value: 60,
        level: 2,
    },
    {
        coor: [31.856892263214416, 117.30840716511013],
        value: 30,
        level: 1,
    },
    {
        coor: [31.85629082034214, 117.30784926563503],
        value: 30,
        level: 1,
    },
    {
        coor: [31.85601743592146, 117.30924401432277],
        value: 70,
        level: 3,
    },
    {
        coor: [31.855251955231434, 117.3075917735696],
        value: 30,
        level: 1,
    },
    {
        coor: [31.85499679358927, 117.30630431324245],
        value: 30,
        level: 1,
    },
    {
        coor: [31.85414017434082, 117.30707678943875],
        value: 60,
        level: 2,
    },
    {
        coor: [31.85404904416524, 117.30896506458522],
        value: 30,
        level: 1,
    },
    {
        coor: [31.854176626385847, 117.31001649051906],
        value: 30,
        level: 1,
    },
    {
        coor: [31.854905664260254, 117.31055293232205],
        value: 100,
        level: 3,
    },
    {
        coor: [31.853174189897395, 117.30911526829006],
        value: 30,
        level: 1,
    },
    {
        coor: [31.852900796236593, 117.30765614658596],
        value: 30,
        level: 1,
    },
    {
        coor: [31.85257272277377, 117.3104027286172],
        value: 30,
        level: 1,
    },
    {
        coor: [31.852153516095015, 117.31184039264919],
        value: 80,
        level: 3,
    },
    {
        coor: [31.851497362685286, 117.30978045612575],
        value: 30,
        level: 1,
    },
    {
        coor: [31.85191657234669, 117.31274161487819],
        value: 60,
        level: 2,
    },
    {
        coor: [31.852098836822517, 117.31445822864772],
        value: 30,
        level: 1,
    },
    {
        coor: [31.85191657234669, 117.31535945087673],
        value: 30,
        level: 1,
    },
    {
        coor: [31.853866783543868, 117.31426510959865],
        value: 30,
        level: 1,
    },
    {
        coor: [31.854796308946522, 117.31314931064846],
        value: 30,
        level: 1,
    },
    {
        coor: [31.855616470638275, 117.31338534504177],
        value: 70,
        level: 3,
    },
    {
        coor: [31.855634696370785, 117.31201205402614],
        value: 100,
        level: 3,
        name: 'Mingguang Road 34#',
        size: "2200kVA"
    },
    {
        coor: [31.856965165114158, 117.31276307255031],
        value: 90,
        level: 3,
    },
    {
        coor: [31.856983390580087, 117.31081042438747],
        value: 80,
        level: 3,
    },
    {
        coor: [31.858222713811806, 117.31181893497707],
        value: 70,
        level: 3,
    },
    {
        coor: [31.85862366776138, 117.31111083179714],
        value: 60,
        level: 2,
    },
    {
        coor: [31.859698944744867, 117.31008086353542],
        value: 50,
        level: 2,
    },
    {
        coor: [31.86008166742461, 117.31046710163356],
        value: 40,
        level: 2,
    },
    {
        coor: [31.856637106111357, 117.3118618503213],
        value: 30,
        level: 1,
    },
];

function drawLineUser() {
    user_line.forEach(element => {
        let markers_line = L.marker(element.coor, {
            icon: L.AwesomeMarkers.icon({
                icon: 'user-white',
                prefix: 'icon',
                markerColor: (function (data) {
                    if (data.level == 1) {
                        return "green";
                    }
                    if (data.level == 2) {
                        return "yellow";
                    }
                    if (data.level == 3) {
                        return "red";
                    }
                })(element),
                calssName: element.coor[0],
                // spin: true
            }),
            // radius: element.value / 2,
            // stroke: false,
            // fillOpacity: 0.8
        }).addTo(map);
        if (element.name) {
            let markerPopup = markers_line.bindPopup(
                "<div class='userpopup'><span class='label label-primary'>Name</span> Baohe 3# User </div>" +
                "<div class='userpopup'><span class='label label-primary'>Level</span> Important</div>" +
                "<div class='userpopup'><span class='label label-primary'>Capcity</span> 220kVA</div>"+
                "<div class='userpopup'><span class='label label-primary'>Power type</span> Big industry</div>"
            );
            markers_line.on('click', function (e) {
                map.setView(e.latlng);
                markerPopup.openPopup();
                // drawPolygon(arrs);
                // drawLine();

            })
        }

        let circle = L.circle(element.coor, {
            radius: element.value / 2,
            stroke: false,
            fillOpacity: 0.8
        }).addTo(map);

    })
}